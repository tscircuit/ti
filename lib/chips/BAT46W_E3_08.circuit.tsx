import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const BAT46W_E3_08_PIN_LABELS = {
  pin1: "K",
  pin2: "A",
} as const;

/**
 * BAT46W-E3-08 with its package pin numbering projected onto tscircuit's
 * native Schottky-diode symbol. The native symbol calls its cathode `neg` and
 * its anode `pos`; the projection preserves TI's Altium map of K=1 and A=2.
 */
export const BAT46W_E3_08 = ({
  name,
  schX,
  schY,
  schRotation,
  ...props
}: ChipProps<typeof BAT46W_E3_08_PIN_LABELS>) => (
  <>
    <chip
      name={name}
      manufacturerPartNumber="BAT46W-E3-08"
      footprint="kicad:Diode_SMD/D_SOD-123"
      pinLabels={BAT46W_E3_08_PIN_LABELS}
      noSchematicRepresentation
      schX={schX}
      schY={schY}
      schRotation={schRotation}
      {...props}
    />
    <schematicsymbol
      name={`${name}_SCHEMATIC`}
      displayName={`${name} BAT46W-E3-08`}
      chipRef={`.${name}`}
      symbolName="schottky_diode_up"
      schX={schX}
      schY={schY}
      schRotation={schRotation}
      connections={{
        neg: `.${name} > .pin1`,
        pos: `.${name} > .pin2`,
      }}
    />
  </>
);

export default BAT46W_E3_08;
