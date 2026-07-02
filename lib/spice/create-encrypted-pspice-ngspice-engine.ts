import createNgspiceSpiceEngine from "@tscircuit/ngspice-spice-engine";
import type { SpiceEngine } from "@tscircuit/props";
import { decryptEncryptedPspiceModelsInSpice } from "./encrypted-pspice-model";

export const createEncryptedPspiceNgspiceEngine =
  async (): Promise<SpiceEngine> => {
    const ngspiceEngine = await createNgspiceSpiceEngine();

    return {
      async simulate(spiceString) {
        return ngspiceEngine.simulate(
          decryptEncryptedPspiceModelsInSpice(spiceString),
        );
      },
    };
  };

export default createEncryptedPspiceNgspiceEngine;
