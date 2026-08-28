import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import {
  LDO_01_PMIC_ENABLE_SECTION_NAME,
  LdoRegulator1V8_TPS7A8101,
} from "./LdoRegulator1V8_TPS7A8101.circuit.tsx";
import {
  DualLdoRegulator1V3_TPS7A8801,
  LDO_02_DUAL_1P3V_SECTION_NAME,
} from "./DualLdoRegulator1V3_TPS7A8801.circuit.tsx";
import {
  PMIC_INPUT_DECOUPLING_SECTION_NAME,
  PMIC_POWER_STAGE_SECTION_NAME,
  PMIC_SWITCH_NODE_SNUBBER_SECTION_NAME,
  PmicPowerStage_LP87524B,
} from "./PmicPowerStage_LP87524B.circuit.tsx";
import {
  PMIC_CONTROL_DIVIDER_SECTION_NAME,
  PMIC_ENABLE_PULLUPS_SECTION_NAME,
  PMIC_PGOOD_SECTION_NAME,
  PmicSequencer,
} from "./PmicSequencer.circuit.tsx";
import { PrecisionVoltageReference_LM4060A33 } from "./PrecisionVoltageReference_LM4060A33.circuit.tsx";
import { VppLdoRegulator_TPS79601 } from "./VppLdoRegulator_TPS79601.circuit.tsx";

/**
 * Obstacle Detection Sensor system power supply, TI system-block subsystem 21584.
 * TIDEP-0092 children retain their official sheet-local coordinate systems.
 * PMIC page 9 uses its physical PDF-to-ANSI-B coordinate mapping without a
 * centering translation. The other source sheets retain their documented
 * sheet-local centering translations. The complete PMIC source page uses the
 * source document's ANSI B size.
 * The LM4060 section is separately identified as datasheet-derived.
 */
export const SystemPowerSupply = (props: SubcircuitProps) => (
  <subcircuit routingDisabled {...props}>
    <schematicsheet
      name="pmic_power_stage"
      displayName="PMIC Power Stage"
      sheetIndex={0}
      sheetSize="ANSI_B"
    >
      <schematicsection
        name={PMIC_INPUT_DECOUPLING_SECTION_NAME}
        displayName="5 V Input Decoupling"
      />
      <schematicsection name={PMIC_POWER_STAGE_SECTION_NAME} />
      <schematicsection
        name={PMIC_CONTROL_DIVIDER_SECTION_NAME}
        displayName="Controls for the PMIC"
      />
      <schematicsection
        name={PMIC_ENABLE_PULLUPS_SECTION_NAME}
        displayName="PMIC Enable Pull-ups"
      />
      <schematicsection
        name={PMIC_PGOOD_SECTION_NAME}
        displayName="3.3 V PGOOD Output"
      />
      <schematicsection
        name={PMIC_SWITCH_NODE_SNUBBER_SECTION_NAME}
        displayName="Snubber on Switching Nodes"
      />
    </schematicsheet>
    <schematicsheet
      name="ldo_1p8v"
      displayName="LDO 01 - 1.8 V Output"
      sheetIndex={1}
    >
      <schematicsection
        name={LDO_01_PMIC_ENABLE_SECTION_NAME}
        displayName="PMIC"
      />
    </schematicsheet>
    <schematicsheet
      name="dual_ldo_1p3v"
      displayName="LDO 02 - Dual 1.3 V Outputs"
      sheetIndex={2}
    >
      <schematicsection
        name={LDO_02_DUAL_1P3V_SECTION_NAME}
        displayName="LDO 02 - Dual 1.3 V Outputs"
      />
    </schematicsheet>
    <schematicsheet
      name="vpp_ldo"
      displayName="VPP Supply LDO"
      sheetIndex={3}
    />
    <schematicsheet
      name="precision_reference"
      displayName="LM4060 Precision Reference"
      sheetIndex={4}
    />

    <PmicPowerStage_LP87524B
      name="pmic_power_stage"
      schSheetName="pmic_power_stage"
    />
    <PmicSequencer name="pmic_sequencer" schSheetName="pmic_power_stage" />
    <LdoRegulator1V8_TPS7A8101
      name="ldo_1p8v"
      schSheetName="ldo_1p8v"
      schX={2.0625}
      schY={-1.2375}
    />
    <DualLdoRegulator1V3_TPS7A8801
      name="dual_ldo_1p3v"
      schSheetName="dual_ldo_1p3v"
      schX={-0.3575}
      schY={-1.1075}
    />
    <VppLdoRegulator_TPS79601
      name="vpp_ldo"
      schSheetName="vpp_ldo"
      schX={6.325}
      schY={-2.745}
    />
    <PrecisionVoltageReference_LM4060A33
      name="precision_reference"
      schSheetName="precision_reference"
      schX={-0.68}
      schY={-0.6}
    />
  </subcircuit>
);

export default SystemPowerSupply;
