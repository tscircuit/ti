import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { MSP430FR6007ReferenceLayout } from "./Microcontroller_MSP430FR6007.circuit.tsx";

/**
 * The complete MSP-TS430PZ100E Figure B-78 electrical graph split across four
 * native schematic sheets for a compact, readable review view.
 */
export const Microcontroller_MSP430FR6007_MultiSheet = (
  props: SubcircuitProps,
) => <MSP430FR6007ReferenceLayout layoutVariant="multi-sheet" {...props} />;

export default Microcontroller_MSP430FR6007_MultiSheet;
