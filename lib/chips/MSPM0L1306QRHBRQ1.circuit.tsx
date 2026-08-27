import type { ChipProps } from "@tscircuit/props";
import { Fragment } from "react";

/**
 * Automotive MSPM0L1306-Q1 in the 32-pin RHB VQFN package.
 *
 * The RHB32 package geometry comes from the pin-compatible JLCPCB import of
 * MSPM0L1306SRHBR (C19189324). The pin names and ordering are taken from the
 * TIDA-020065 Altium symbol and the MSPM0L1306-Q1 datasheet.
 */
const pinLabels = {
  pin1: ["PA0"],
  pin2: ["PA1"],
  pin3: ["NRST"],
  pin4: ["VDD"],
  pin5: ["VSS"],
  pin6: ["PA2", "ROSC"],
  pin7: ["PA3"],
  pin8: ["PA4"],
  pin9: ["PA5"],
  pin10: ["PA6"],
  pin11: ["PA7"],
  pin12: ["PA8"],
  pin13: ["PA9"],
  pin14: ["PA10"],
  pin15: ["PA11"],
  pin16: ["PA12"],
  pin17: ["PA13"],
  pin18: ["PA14"],
  pin19: ["PA15", "A9"],
  pin20: ["PA16", "A8"],
  pin21: ["PA17"],
  pin22: ["PA18", "A7"],
  pin23: ["PA19", "SWDIO"],
  pin24: ["PA20", "SWCLK", "A6"],
  pin25: ["PA21", "A5", "VREFN"],
  pin26: ["PA22", "A4"],
  pin27: ["PA23", "VREFP"],
  pin28: ["PA24", "A3"],
  pin29: ["PA25", "A2"],
  pin30: ["PA26", "A1"],
  pin31: ["PA27", "A0"],
  pin32: ["VCORE"],
  pin33: ["Thermal_pad"],
} as const;

/*
 * The TI Altium symbol draws input markers on NRST and every PA pin. Power,
 * VCORE, VSS and the exposed pad are plain pins in that reference.
 */
const inputPinAttributes = {
  pin1: { requiresPower: true },
  pin2: { requiresPower: true },
  pin3: { requiresPower: true },
  pin6: { requiresPower: true },
  pin7: { requiresPower: true },
  pin8: { requiresPower: true },
  pin9: { requiresPower: true },
  pin10: { requiresPower: true },
  pin11: { requiresPower: true },
  pin12: { requiresPower: true },
  pin13: { requiresPower: true },
  pin14: { requiresPower: true },
  pin15: { requiresPower: true },
  pin16: { requiresPower: true },
  pin17: { requiresPower: true },
  pin18: { requiresPower: true },
  pin19: { requiresPower: true },
  pin20: { requiresPower: true },
  pin21: { requiresPower: true },
  pin22: { requiresPower: true },
  pin23: { requiresPower: true },
  pin24: { requiresPower: true },
  pin25: { requiresPower: true },
  pin26: { requiresPower: true },
  pin27: { requiresPower: true },
  pin28: { requiresPower: true },
  pin29: { requiresPower: true },
  pin30: { requiresPower: true },
  pin31: { requiresPower: true },
} satisfies NonNullable<ChipProps["pinAttributes"]>;

const edgePadOffsets = [
  -1.74965, -1.24975, -0.74985, -0.24995, 0.24995, 0.74985, 1.24975, 1.74965,
] as const;

/**
 * The pad geometry is the C19189324 JLCPCB import, with its exposed pad
 * explicitly mapped to TI pin 33. Footprinter calls that pad "thermalpad",
 * which would otherwise leak a non-reference alias into the schematic label.
 */
const RHB32Footprint = () => (
  <footprint>
    {[...edgePadOffsets].reverse().map((offset, index) => (
      <Fragment key={`left-${index + 1}`}>
        <smtpad
          portHints={[`pin${index + 1}`]}
          pcbX="-2.40005mm"
          pcbY={`${offset}mm`}
          width="0.8mm"
          height="0.28mm"
          radius="0.14mm"
          shape="pill"
        />
      </Fragment>
    ))}
    {edgePadOffsets.map((offset, index) => (
      <Fragment key={`bottom-${index + 9}`}>
        <smtpad
          portHints={[`pin${index + 9}`]}
          pcbX={`${offset}mm`}
          pcbY="-2.40005mm"
          width="0.28mm"
          height="0.8mm"
          radius="0.14mm"
          shape="pill"
        />
      </Fragment>
    ))}
    {edgePadOffsets.map((offset, index) => (
      <Fragment key={`right-${index + 17}`}>
        <smtpad
          portHints={[`pin${index + 17}`]}
          pcbX="2.40005mm"
          pcbY={`${offset}mm`}
          width="0.8mm"
          height="0.28mm"
          radius="0.14mm"
          shape="pill"
        />
      </Fragment>
    ))}
    {[...edgePadOffsets].reverse().map((offset, index) => (
      <Fragment key={`top-${index + 25}`}>
        <smtpad
          portHints={[`pin${index + 25}`]}
          pcbX={`${offset}mm`}
          pcbY="2.40005mm"
          width="0.28mm"
          height="0.8mm"
          radius="0.14mm"
          shape="pill"
        />
      </Fragment>
    ))}
    <smtpad
      portHints={["pin33"]}
      pcbX="0mm"
      pcbY="0mm"
      width="3.45mm"
      height="3.45mm"
      shape="rect"
    />
    <courtyardrect width="6.3001mm" height="6.3001mm" />
  </footprint>
);

export const MSPM0L1306QRHBRQ1 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    pinAttributes={inputPinAttributes}
    manufacturerPartNumber="MSPM0L1306QRHBRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/mspm0l1306-q1.pdf"
    footprint={<RHB32Footprint />}
    {...props}
  />
);
export const MSPM0L1306Q1 = MSPM0L1306QRHBRQ1;

export default MSPM0L1306QRHBRQ1;
