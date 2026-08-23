/// <reference types="bun-types" />

import { describe, expect, test } from "bun:test";
import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const getPins = (
  side: undefined | Array<number | string> | { pins: Array<number | string> },
) => (Array.isArray(side) ? side : (side?.pins ?? []));

describe("getTiSchematicLayout", () => {
  test("places pins by function and hides no-connect pins", () => {
    const pinLabels = {
      pin1: "VIN",
      pin2: "GND",
      pin3: "EN",
      pin4: "NC",
      pin5: "VOUT",
      pin6: "SENSE",
      pin7: "GPIO1",
      pin8: "EP",
    } as const;
    const layout = getTiSchematicLayout(pinLabels);
    const chipProps = {
      name: "U1",
      pinLabels,
      ...layout,
    } satisfies ChipProps<typeof pinLabels>;

    expect(getPins(chipProps.schPinArrangement.topSide)).toEqual(["pin1"]);
    expect(getPins(layout.schPinArrangement.bottomSide)).toEqual([
      "pin2",
      "pin8",
    ]);
    expect(getPins(layout.schPinArrangement.leftSide)).toEqual([
      "pin6",
      "pin3",
      "pin7",
    ]);
    expect(getPins(layout.schPinArrangement.rightSide)).toEqual(["pin5"]);
    expect(layout.noConnect).toEqual(["pin4"]);
  });

  test("adds only 0.2 mm margins between functional groups", () => {
    const layout = getTiSchematicLayout({
      pin1: "AIN0",
      pin2: "AIN1",
      pin3: "RESET",
      pin4: "SCLK",
      pin5: "GPIO0",
      pin6: "GPIO1",
      pin7: "OUT0",
      pin8: "OUT1",
    } as const);

    expect(layout.schPinStyle).toEqual({
      pin2: { marginBottom: 0.2 },
      pin4: { marginBottom: 0.2 },
    });
    expect("schPinSpacing" in layout).toBe(false);
    for (const style of Object.values(layout.schPinStyle)) {
      for (const margin of Object.values(style)) {
        expect(Number(margin) % 0.2).toBeCloseTo(0);
      }
    }
  });

  test("balances unknown pins across the left and right sides", () => {
    const layout = getTiSchematicLayout({
      pin1: "MYSTERY1",
      pin2: "MYSTERY2",
      pin3: "MYSTERY3",
      pin4: "MYSTERY4",
      pin5: "MYSTERY5",
    } as const);

    const leftPins = getPins(layout.schPinArrangement.leftSide);
    const rightPins = getPins(layout.schPinArrangement.rightSide);
    expect(leftPins).toEqual(["pin1", "pin3", "pin5"]);
    expect(rightPins).toEqual(["pin2", "pin4"]);
    expect(Math.abs(leftPins.length - rightPins.length)).toBeLessThanOrEqual(1);
  });

  test("classifies functional aliases after alphanumeric physical pins", () => {
    const layout = getTiSchematicLayout({
      pin1: ["A1", "VDD"],
      pin2: ["A2", "UART_RX"],
      pin3: ["B1", "UART_TX"],
      pin4: ["B2", "VSS"],
      pin5: ["AA23", "DNC"],
    } as const);

    expect(getPins(layout.schPinArrangement.topSide)).toEqual(["pin1"]);
    expect(getPins(layout.schPinArrangement.leftSide)).toEqual(["pin2"]);
    expect(getPins(layout.schPinArrangement.rightSide)).toEqual(["pin3"]);
    expect(getPins(layout.schPinArrangement.bottomSide)).toEqual(["pin4"]);
    expect(layout.noConnect).toEqual(["pin5"]);
  });

  test("supports datasheet-specific role overrides", () => {
    const layout = getTiSchematicLayout(
      {
        pin1: "BIAS",
        pin2: "SUBSTRATE",
      } as const,
      {
        pinRoles: {
          pin1: "power",
          pin2: "ground",
        },
      },
    );

    expect(getPins(layout.schPinArrangement.topSide)).toEqual(["pin1"]);
    expect(getPins(layout.schPinArrangement.bottomSide)).toEqual(["pin2"]);
  });

  test("places non-electrical thermal pads on the bottom without making them ground", () => {
    const layout = getTiSchematicLayout(
      {
        pin1: "GND",
        pin2: "THERMAL_PAD",
        pin3: "PADCONFIG",
      } as const,
      { pinRoles: { pin2: "thermal" } },
    );

    expect(getPins(layout.schPinArrangement.bottomSide)).toEqual([
      "pin1",
      "pin2",
    ]);
    expect(getPins(layout.schPinArrangement.leftSide)).toEqual(["pin3"]);
    expect(layout.noConnect).toEqual([]);
  });

  test("keeps side pins clear of long top and bottom labels", () => {
    const layout = getTiSchematicLayout({
      pin1: "VDD_VERY_LONG_POWER_RAIL",
      pin2: "INPUT_A",
      pin3: "INPUT_B",
      pin4: "OUTPUT_A",
      pin5: "OUTPUT_B",
      pin6: "VQFN_THERMAL_PAD",
    } as const);

    expect(layout.schPinStyle.pin2?.marginTop).toBeGreaterThan(0);
    expect(layout.schPinStyle.pin3?.marginBottom).toBeGreaterThan(0);
    expect(layout.schPinStyle.pin4?.marginTop).toBeGreaterThan(0);
    expect(layout.schPinStyle.pin5?.marginBottom).toBeGreaterThan(0);
    for (const pin of ["pin2", "pin3", "pin4", "pin5"] as const) {
      for (const margin of Object.values(layout.schPinStyle[pin] ?? {})) {
        const gridUnits = Number(margin) / 0.2;
        expect(gridUnits).toBeCloseTo(Math.round(gridUnits));
      }
    }
  });

  test("recognizes common analog-supply and address-control aliases", () => {
    const layout = getTiSchematicLayout({
      pin1: "VA",
      pin2: "ADR0",
      pin3: "ADR1",
      pin4: "GND",
    } as const);

    expect(getPins(layout.schPinArrangement.topSide)).toEqual(["pin1"]);
    expect(getPins(layout.schPinArrangement.leftSide)).toEqual([
      "pin2",
      "pin3",
    ]);
    expect(getPins(layout.schPinArrangement.bottomSide)).toEqual(["pin4"]);
  });

  test("returns dimensions rounded up to the 0.2 mm grid", () => {
    const layout = getTiSchematicLayout({
      pin1: "VERY_LONG_ANALOG_INPUT_NAME",
      pin2: "VERY_LONG_DIGITAL_OUTPUT_NAME",
      pin3: "VDD",
      pin4: "GND",
    } as const);

    expect(layout.schWidth / 0.2).toBeCloseTo(
      Math.round(layout.schWidth / 0.2),
    );
    expect(layout.schHeight / 0.2).toBeCloseTo(
      Math.round(layout.schHeight / 0.2),
    );
    expect(layout.schWidth).toBeGreaterThanOrEqual(1.6);
    expect(layout.schHeight).toBeGreaterThanOrEqual(1.2);
  });
});
