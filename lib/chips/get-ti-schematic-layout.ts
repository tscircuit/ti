import type {
  SchematicPinArrangement,
  SchematicPinStyle,
} from "@tscircuit/props";

const PIN_SPACING_MM = 0.2;
const GROUP_GAP_MM = 0.2;
const BOX_PADDING_MM = 0.8;
const LABEL_CHARACTER_WIDTH_MM = 0.11;
const SIDE_PIN_EDGE_ALLOWANCE_MM = 0.4;

export type TiPinLabels = Readonly<Record<string, string | readonly string[]>>;

export type TiSchematicPinRole =
  | "power"
  | "ground"
  | "input"
  | "control"
  | "bidirectional"
  | "output"
  | "thermal"
  | "unknown"
  | "no-connect";

export interface GetTiSchematicLayoutOptions<PinKey extends string = string> {
  /** Override the heuristic when the datasheet defines a less obvious role. */
  pinRoles?: Readonly<Partial<Record<PinKey, TiSchematicPinRole>>>;
}

export interface TiSchematicLayout<PinKey extends string = string> {
  schPinArrangement: SchematicPinArrangement;
  schPinStyle: SchematicPinStyle;
  schWidth: number;
  schHeight: number;
  noConnect: PinKey[];
}

interface ClassifiedPin<PinKey extends string> {
  key: PinKey;
  labels: string[];
  role: TiSchematicPinRole;
}

const normalizeLabel = (label: string) =>
  label
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

const isPhysicalPinIdentifier = (label: string) =>
  /^\d+$/.test(label) || /^[A-Z]{1,3}\d{1,3}$/.test(label);

const isNoConnectLabel = (label: string) =>
  /^(?:NC|N_C|DNC|DNU|NU|RSVD|RESERVED|NO_CONNECT|NOT_CONNECTED|DO_NOT_CONNECT)\d*$/.test(
    label,
  ) || label.startsWith("NC_");

const isGroundLabel = (label: string) =>
  /(?:^|_)(?:GND|AGND|DGND|PGND|SGND|CGND|GNDA|GNDD|VSS|VSSA|VSSD)(?:\d*|$|_)/.test(
    label,
  );

const isThermalLabel = (label: string) =>
  /^(?:EP|EPAD|PAD|DAP|POWERPAD|PADDLE|EXPOSED|EXPOSED_PAD|THERMAL|THERMALPAD|THERMAL_PAD|QFN_PAD|VQFN_THERMAL_PAD)$/.test(
    label,
  );

const isOutputLabel = (label: string) =>
  /^(?:OUT|OUTPUT|VOUT|IOUT|TX|TXD|SDO|DOUT|MISO|Q\d*|Y|Z|SW\d*|LX\d*|PH\d*|PHASE\d*|GATE\d*|DRV\d*|LED\d*|INT\d*|IRQ\d*|ALERT\d*|FAULT\d*|PGOOD\d*|POWERGOOD\d*|STAT\d*|READY\d*|DONE\d*|LOCK\d*|CLKOUT\d*|REFOUT\d*)/.test(
    label,
  ) ||
  /(?:^|_)(?:OUT|OUTPUT|TX|TXD|SDO|DOUT|MISO|SW|LX|PHASE|GATE|DRV|INT|IRQ|ALERT|FAULT|PGOOD|POWERGOOD|STAT|READY|DONE|LOCK|CLKOUT|REFOUT)(?:\d*|$|_)/.test(
    label,
  ) ||
  /^\d*[YQZ]\d*$/.test(label) ||
  /DRV\d*$/.test(label);

const isPowerLabel = (label: string) =>
  /^(?:VCC|VDD|AVCC|AVDD|DVCC|DVDD|PVCC|PVDD|IOVCC|IOVDD|VA|VAA|VBB|VCCA|VCCB|VDDA|VDDD|VDDIO|VDDR|VBAT|VBUS|VSUPPLY|VS|VIN|VBIAS|VREF|REFIN|REFP|REFN|VCOM|VREG|VLDO|VMOTOR|VM|VP|VN|VPP|VEE|REGN|BAT|SYS)(?:\d*|_[A-Z0-9]+)*$/.test(
    label,
  ) || /(?:^|_)(?:POWER|SUPPLY)(?:$|_)/.test(label);

const isBidirectionalLabel = (label: string) =>
  /(?:^|_)(?:GPIO|DIO|SDA|SDIO|I2C|I3C|USB_DP|USB_DM|CANH|CANL|MDIO)(?:\d*|$|_)/.test(
    label,
  ) ||
  /^(?:IO|DQ|DAT)\d+$/.test(label) ||
  label === "DATA";

const isInputLabel = (label: string) =>
  /^(?:IN|INPUT|AIN|ADC_IN|RX|RXD|MOSI|SDI|DIN|SENSE|SNS|FB|VINP|VINN|INP|INN|IP|IM|A|B|C|D)(?:\d*|_[A-Z0-9]+)*$/.test(
    label,
  ) ||
  /(?:^|_)(?:INPUT|AIN|ADC_IN|RX|RXD|MOSI|SDI|DIN|SENSE|SNS|FB|INP|INN)(?:\d*|$|_)/.test(
    label,
  ) ||
  /^\d+[ABCD]$/.test(label);

const isControlLabel = (label: string) =>
  /(?:^|_)(?:EN|ENABLE|RESET|RST|SHDN|SHUTDOWN|SLEEP|WAKE|CLK|CLOCK|SCK|SCL|CS|CE|OE|SEL|MODE|ADR|ADDR|SYNC|LATCH|TRIG|TRIGGER|PWM|ILIM|ISET|FREQ|RT|SS|BOOT|BST|TMR|TEST|TCK|TMS|TDI|TDO|TRST)(?:\d*|$|_)/.test(
    label,
  );

const classifyPin = (
  labels: string[],
  override: TiSchematicPinRole | undefined,
): TiSchematicPinRole => {
  if (override) return override;

  const normalizedLabels = labels
    .map(normalizeLabel)
    .filter(Boolean)
    .filter(
      (label, index) =>
        !(labels.length > 1 && index === 0 && isPhysicalPinIdentifier(label)),
    );

  if (normalizedLabels.some(isNoConnectLabel)) return "no-connect";
  if (normalizedLabels.some(isGroundLabel)) return "ground";

  const hasBidirectionalLabel = normalizedLabels.some(isBidirectionalLabel);
  const hasOutputLabel = normalizedLabels.some(isOutputLabel);

  if (hasOutputLabel && !hasBidirectionalLabel) return "output";
  if (normalizedLabels.some(isPowerLabel)) return "power";
  if (normalizedLabels.some(isThermalLabel)) return "thermal";
  if (hasBidirectionalLabel) return "bidirectional";
  if (hasOutputLabel) return "output";
  if (normalizedLabels.some(isInputLabel)) return "input";
  if (normalizedLabels.some(isControlLabel)) return "control";
  return "unknown";
};

const compareNatural = (left: string, right: string) => {
  const leftParts = left.replace(/^pin/i, "").match(/\d+|\D+/g) ?? [left];
  const rightParts = right.replace(/^pin/i, "").match(/\d+|\D+/g) ?? [right];
  const partCount = Math.max(leftParts.length, rightParts.length);

  for (let index = 0; index < partCount; index += 1) {
    const leftPart = leftParts[index];
    const rightPart = rightParts[index];
    if (leftPart === undefined) return -1;
    if (rightPart === undefined) return 1;
    if (leftPart === rightPart) continue;

    const leftNumber = /^\d+$/.test(leftPart) ? Number(leftPart) : null;
    const rightNumber = /^\d+$/.test(rightPart) ? Number(rightPart) : null;
    if (leftNumber !== null && rightNumber !== null) {
      return leftNumber - rightNumber;
    }

    return leftPart.localeCompare(rightPart);
  }

  return 0;
};

const getLabels = (label: string | readonly string[]) =>
  typeof label === "string" ? [label] : [...label];

const addVerticalGroups = <PinKey extends string>(
  groups: Array<ClassifiedPin<PinKey>[]>,
  schPinStyle: SchematicPinStyle,
) => {
  const pins: PinKey[] = [];

  for (const group of groups.filter((candidate) => candidate.length > 0)) {
    const previousPin = pins[pins.length - 1];
    if (previousPin) {
      schPinStyle[previousPin] = { marginBottom: GROUP_GAP_MM };
    }
    pins.push(...group.map((pin) => pin.key));
  }

  return pins;
};

const roundUpToGrid = (value: number) =>
  Number(
    (
      Math.ceil((value - Number.EPSILON) / PIN_SPACING_MM) * PIN_SPACING_MM
    ).toFixed(10),
  );

const getBestDisplayLabel = (pin: ClassifiedPin<string>) => {
  const firstLabel = pin.labels[0] ?? pin.key;
  if (
    pin.labels.length > 1 &&
    isPhysicalPinIdentifier(normalizeLabel(firstLabel))
  ) {
    return pin.labels[1] ?? firstLabel;
  }
  return firstLabel;
};

const getLongestLabelWidth = (pins: ClassifiedPin<string>[]) =>
  Math.max(
    0,
    ...pins.map(
      (pin) => getBestDisplayLabel(pin).length * LABEL_CHARACTER_WIDTH_MM,
    ),
  );

const getPinSpan = (pinCount: number, groupGapCount = 0) =>
  Math.max(0, pinCount - 1) * PIN_SPACING_MM + groupGapCount * GROUP_GAP_MM;

const getSidePinEdgeClearance = (pins: ClassifiedPin<string>[]) =>
  roundUpToGrid(
    Math.max(0, getLongestLabelWidth(pins) - SIDE_PIN_EDGE_ALLOWANCE_MM),
  );

const addSidePinEdgeClearance = <PinKey extends string>(
  pins: PinKey[],
  schPinStyle: SchematicPinStyle,
  topClearance: number,
  bottomClearance: number,
) => {
  const firstPin = pins[0];
  const lastPin = pins[pins.length - 1];
  if (firstPin && topClearance > 0) {
    schPinStyle[firstPin] = {
      ...schPinStyle[firstPin],
      marginTop: topClearance,
    };
  }
  if (lastPin && bottomClearance > 0) {
    schPinStyle[lastPin] = {
      ...schPinStyle[lastPin],
      marginBottom: bottomClearance,
    };
  }
};

/**
 * Produce a readable default schematic box from imported TI pin labels.
 *
 * tscircuit fixes adjacent schematic-box pins at 0.2 mm. This helper therefore
 * does not return the deprecated `schPinSpacing` prop. It adds only 0.2 mm
 * margins between functional groups.
 */
export const getTiSchematicLayout = <const Labels extends TiPinLabels>(
  pinLabels: Labels,
  options: GetTiSchematicLayoutOptions<Extract<keyof Labels, string>> = {},
): TiSchematicLayout<Extract<keyof Labels, string>> => {
  type PinKey = Extract<keyof Labels, string>;

  const pins = (
    Object.entries(pinLabels) as Array<[PinKey, string | readonly string[]]>
  )
    .map(([key, label]) => {
      const labels = getLabels(label);
      return {
        key,
        labels,
        role: classifyPin(labels, options.pinRoles?.[key]),
      } satisfies ClassifiedPin<PinKey>;
    })
    .sort((left, right) => compareNatural(left.key, right.key));

  const pinsByRole = (role: TiSchematicPinRole) =>
    pins.filter((pin) => pin.role === role);

  const inputs = pinsByRole("input");
  const controls = pinsByRole("control");
  const bidirectional = pinsByRole("bidirectional");
  const outputs = pinsByRole("output");
  const unknown = pinsByRole("unknown");
  const power = pinsByRole("power");
  const ground = pinsByRole("ground");
  const thermal = pinsByRole("thermal");
  const noConnectPins = pinsByRole("no-connect");

  const leftUnknown: ClassifiedPin<PinKey>[] = [];
  const rightUnknown: ClassifiedPin<PinKey>[] = [];
  let leftCount = inputs.length + controls.length + bidirectional.length;
  let rightCount = outputs.length;

  for (const pin of unknown) {
    if (leftCount <= rightCount) {
      leftUnknown.push(pin);
      leftCount += 1;
    } else {
      rightUnknown.push(pin);
      rightCount += 1;
    }
  }

  const schPinStyle: SchematicPinStyle = {};
  const leftGroups = [inputs, controls, bidirectional, leftUnknown];
  const rightGroups = [outputs, rightUnknown];
  const leftPins = addVerticalGroups(leftGroups, schPinStyle);
  const rightPins = addVerticalGroups(rightGroups, schPinStyle);
  const powerPins = power.map((pin) => pin.key);
  const bottomPins = ground.concat(thermal).map((pin) => pin.key);
  const topClearance = getSidePinEdgeClearance(power);
  const bottomClearance = getSidePinEdgeClearance(ground.concat(thermal));
  addSidePinEdgeClearance(leftPins, schPinStyle, topClearance, bottomClearance);
  addSidePinEdgeClearance(
    rightPins,
    schPinStyle,
    topClearance,
    bottomClearance,
  );

  const schPinArrangement: SchematicPinArrangement = {};
  if (leftPins.length > 0) {
    schPinArrangement.leftSide = {
      direction: "top-to-bottom",
      pins: leftPins,
    };
  }
  if (rightPins.length > 0) {
    schPinArrangement.rightSide = {
      direction: "top-to-bottom",
      pins: rightPins,
    };
  }
  if (powerPins.length > 0) {
    schPinArrangement.topSide = {
      direction: "left-to-right",
      pins: powerPins,
    };
  }
  if (bottomPins.length > 0) {
    schPinArrangement.bottomSide = {
      direction: "left-to-right",
      pins: bottomPins,
    };
  }

  const nonEmptyLeftGroupCount = leftGroups.filter(
    (group) => group.length > 0,
  ).length;
  const nonEmptyRightGroupCount = rightGroups.filter(
    (group) => group.length > 0,
  ).length;
  const verticalPinSpan = Math.max(
    leftPins.length > 0
      ? getPinSpan(leftPins.length, Math.max(0, nonEmptyLeftGroupCount - 1)) +
          topClearance +
          bottomClearance
      : 0,
    rightPins.length > 0
      ? getPinSpan(rightPins.length, Math.max(0, nonEmptyRightGroupCount - 1)) +
          topClearance +
          bottomClearance
      : 0,
  );
  const horizontalPinSpan = Math.max(
    getPinSpan(powerPins.length),
    getPinSpan(bottomPins.length),
  );
  const sideLabelWidth =
    getLongestLabelWidth(inputs.concat(controls, bidirectional, leftUnknown)) +
    getLongestLabelWidth(outputs.concat(rightUnknown)) +
    0.6;
  const topBottomLabelHeight =
    getLongestLabelWidth(power) +
    getLongestLabelWidth(ground.concat(thermal)) +
    0.6;

  return {
    schPinArrangement,
    schPinStyle,
    schWidth: roundUpToGrid(
      Math.max(1.6, horizontalPinSpan + BOX_PADDING_MM, sideLabelWidth),
    ),
    schHeight: roundUpToGrid(
      Math.max(1.2, verticalPinSpan + BOX_PADDING_MM, topBottomLabelHeight),
    ),
    noConnect: noConnectPins.map((pin) => pin.key),
  };
};
