// @ts-nocheck
import {
  createCipheriv,
  createDecipheriv,
  createHash,
  randomBytes,
} from "node:crypto";

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

const getModelEncryptionKey = () => {
  const keyMaterial =
    process.env.TSCIRCUIT_SPICE_MODEL_KEY ?? defaultKeyMaterial;

  return createHash("sha256").update(keyMaterial).digest();
};

const toBase64 = (buffer: Buffer) => buffer.toString("base64");

const fromBase64 = (value: string) => Buffer.from(value, "base64");

export const encryptPspiceModelSource = (
  source: string,
): EncryptedPspiceModel => {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", getModelEncryptionKey(), iv);
  const ciphertext = Buffer.concat([
    cipher.update(source, "utf8"),
    cipher.final(),
  ]);

  return {
    format: "tscircuit-encrypted-pspice-model",
    version: 1,
    algorithm: "aes-256-gcm",
    keyId: "default",
    iv: toBase64(iv),
    authTag: toBase64(cipher.getAuthTag()),
    ciphertext: toBase64(ciphertext),
  };
};

export const decryptPspiceModelSource = (model: EncryptedPspiceModel) => {
  if (
    model.format !== "tscircuit-encrypted-pspice-model" ||
    model.version !== 1 ||
    model.algorithm !== "aes-256-gcm"
  ) {
    throw new Error("Unsupported encrypted PSPICE model format");
  }

  const decipher = createDecipheriv(
    "aes-256-gcm",
    getModelEncryptionKey(),
    fromBase64(model.iv),
  );
  decipher.setAuthTag(fromBase64(model.authTag));

  return Buffer.concat([
    decipher.update(fromBase64(model.ciphertext)),
    decipher.final(),
  ]).toString("utf8");
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

export const decryptEncryptedPspiceModelsInSpice = (spiceString: string) =>
  spiceString.replace(
    new RegExp(
      [
        beginMarker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "\\r?\\n\\* (.+?)\\r?\\n[\\s\\S]*?",
        endMarker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "\\r?\\n?",
      ].join(""),
      "g",
    ),
    (_match, encryptedModelJson: string) =>
      decryptPspiceModelSource(JSON.parse(encryptedModelJson)),
  );
