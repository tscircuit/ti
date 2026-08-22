import type { SpiceEngine } from "@tscircuit/props";
import createEncryptedPspiceNgspiceEngine, {
  createCdnNgspiceSpiceEngine,
} from "./lib/spice/create-encrypted-pspice-ngspice-engine.ts";

const isCi =
  typeof process !== "undefined" &&
  process.env.CI !== undefined &&
  process.env.CI !== "false";

const disabledInCiSpiceEngine: SpiceEngine = {
  async simulate() {
    return {
      engineVersionString: "disabled-in-ci",
      simulationResultCircuitJson: [],
    };
  },
};

const spiceEngineMap = isCi
  ? {
      spicey: disabledInCiSpiceEngine,
      ngspice: disabledInCiSpiceEngine,
      "encrypted-pspice-ngspice": disabledInCiSpiceEngine,
    }
  : {
      ngspice: createCdnNgspiceSpiceEngine(),
      "encrypted-pspice-ngspice": createEncryptedPspiceNgspiceEngine(),
    };

export default {
  mainEntrypoint: "index.ts",
  platformConfig: {
    spiceEngineMap,
  },
};
