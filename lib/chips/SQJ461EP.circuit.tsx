import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const SQJ461EP_PIN_LABELS = {
  pin1: "S_1",
  pin2: "S_2",
  pin3: "S_3",
  pin4: "G",
  pin5: "D",
} as const;

/**
 * SQJ461EP P-channel MOSFET package record used by the TIDA-050008 BOM.
 * The released Altium symbol exposes pins 1-3 (source), 4 (gate), and a
 * single combined drain terminal numbered 5, exactly as reproduced here.
 */
export const SQJ461EP = ({
  name,
  schX,
  schY,
  schRotation,
  ...props
}: ChipProps<typeof SQJ461EP_PIN_LABELS>) => (
  <>
    <chip
      name={name}
      manufacturerPartNumber="SQJ461EP"
      footprint="kicad:Package_SO/PowerPAK_SO-8L_Single"
      internallyConnectedPins={[[1, 2, 3]]}
      pinLabels={SQJ461EP_PIN_LABELS}
      noSchematicRepresentation
      schX={schX}
      schY={schY}
      schRotation={schRotation}
      {...props}
    />
    <schematicsymbol
      name={`${name}_SCHEMATIC`}
      displayName={`${name} SQJ461EP`}
      chipRef={`.${name}`}
      symbolName="p_channel_e_mosfet_transistor_gate_top_drain_left"
      schX={schX}
      schY={schY}
      schRotation={schRotation}
      connections={{
        drain: `.${name} > .pin5`,
        source: `.${name} > .pin1`,
        gate: `.${name} > .pin4`,
      }}
    />
  </>
);

export default SQJ461EP;
