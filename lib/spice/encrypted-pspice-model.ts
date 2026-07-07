export type EncryptedPspiceModel = {
  format: "tscircuit-encrypted-pspice-model";
  version: 1;
  algorithm: "aes-256-gcm";
  keyId: string;
  iv: string;
  authTag: string;
  ciphertext: string;
};

const beginMarker = "* tscircuit-encrypted-pspice-model:v1";
const endMarker = "* /tscircuit-encrypted-pspice-model:v1";
const defaultKeyMaterial = "tscircuit-ti-local-pspice-model-encryption-key-v1";

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

const getCrypto = () => {
  const cryptoApi = globalThis.crypto;

  if (!cryptoApi?.subtle) {
    throw new Error("Web Crypto API is required for encrypted PSPICE models");
  }

  return cryptoApi;
};

const getModelEncryptionKeyMaterial = () => {
  const processEnv = (
    globalThis as {
      process?: { env?: Record<string, string | undefined> };
    }
  ).process?.env;
  const keyMaterial =
    processEnv?.TSCIRCUIT_SPICE_MODEL_KEY ?? defaultKeyMaterial;

  return textEncoder.encode(keyMaterial);
};

const getModelEncryptionKey = async () => {
  const cryptoApi = getCrypto();
  const keyBytes = await cryptoApi.subtle.digest(
    "SHA-256",
    getModelEncryptionKeyMaterial(),
  );

  return cryptoApi.subtle.importKey("raw", keyBytes, "AES-GCM", false, [
    "encrypt",
    "decrypt",
  ]);
};

const toBase64 = (bytes: Uint8Array) => {
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary);
};

const fromBase64 = (value: string) => {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);

  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  return bytes;
};

const concatenateBytes = (...byteArrays: Uint8Array[]) => {
  const totalLength = byteArrays.reduce((sum, bytes) => sum + bytes.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;

  for (const bytes of byteArrays) {
    result.set(bytes, offset);
    offset += bytes.length;
  }

  return result;
};

export const encryptPspiceModelSource = async (
  source: string,
): Promise<EncryptedPspiceModel> => {
  const cryptoApi = getCrypto();
  const iv = cryptoApi.getRandomValues(new Uint8Array(12));
  const encryptedBytes = new Uint8Array(
    await cryptoApi.subtle.encrypt(
      { name: "AES-GCM", iv, tagLength: 128 },
      await getModelEncryptionKey(),
      textEncoder.encode(source),
    ),
  );
  const ciphertext = encryptedBytes.slice(0, -16);
  const authTag = encryptedBytes.slice(-16);

  return {
    format: "tscircuit-encrypted-pspice-model",
    version: 1,
    algorithm: "aes-256-gcm",
    keyId: "default",
    iv: toBase64(iv),
    authTag: toBase64(authTag),
    ciphertext: toBase64(ciphertext),
  };
};

export const decryptPspiceModelSource = async (model: EncryptedPspiceModel) => {
  if (
    model.format !== "tscircuit-encrypted-pspice-model" ||
    model.version !== 1 ||
    model.algorithm !== "aes-256-gcm"
  ) {
    throw new Error("Unsupported encrypted PSPICE model format");
  }

  const cryptoApi = getCrypto();
  const decryptedBytes = await cryptoApi.subtle.decrypt(
    { name: "AES-GCM", iv: fromBase64(model.iv), tagLength: 128 },
    await getModelEncryptionKey(),
    concatenateBytes(fromBase64(model.ciphertext), fromBase64(model.authTag)),
  );

  return textDecoder.decode(decryptedBytes);
};

export const toEncryptedPspiceModelSpiceSource = (
  model: EncryptedPspiceModel,
  subckt?: { name: string; pins: string[] },
) => `${beginMarker}
* ${JSON.stringify(model)}
${
  subckt
    ? `.SUBCKT ${subckt.name} ${subckt.pins.join(" ")}
* Encrypted PSPICE model body is decrypted by the configured ngspice wrapper.
.ENDS ${subckt.name}
`
    : ""
}
${endMarker}
`;

export const decryptEncryptedPspiceModelsInSpice = async (
  spiceString: string,
) => {
  const encryptedModelRegex = new RegExp(
    [
      beginMarker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
      "\\r?\\n\\* (.+?)\\r?\\n[\\s\\S]*?",
      endMarker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
      "\\r?\\n?",
    ].join(""),
    "g",
  );
  let decryptedSpiceString = "";
  let lastIndex = 0;

  for (const match of spiceString.matchAll(encryptedModelRegex)) {
    decryptedSpiceString += spiceString.slice(lastIndex, match.index);
    decryptedSpiceString += await decryptPspiceModelSource(
      JSON.parse(match[1]),
    );
    lastIndex = match.index! + match[0].length;
  }

  return decryptedSpiceString + spiceString.slice(lastIndex);
};
