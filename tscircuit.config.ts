import createEncryptedPspiceNgspiceEngine from "./lib/spice/create-encrypted-pspice-ngspice-engine";

export default {
  mainEntrypoint: "index.ts",
  platformConfig: {
    spiceEngineMap: {
      "encrypted-pspice-ngspice": await createEncryptedPspiceNgspiceEngine(),
    },
  },
};
