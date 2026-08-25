import { getPlatformConfig } from "tscircuit";
import createEncryptedPspiceNgspiceEngine, {
  createCdnNgspiceSpiceEngine,
} from "./lib/spice/create-encrypted-pspice-ngspice-engine.ts";

const { footprintLibraryMap } = getPlatformConfig();

export default {
  mainEntrypoint: "index.ts",
  platformConfig: {
    footprintLibraryMap,
    spiceEngineMap: {
      ngspice: createCdnNgspiceSpiceEngine(),
      "encrypted-pspice-ngspice": createEncryptedPspiceNgspiceEngine(),
    },
  },
};
