import { Fragment } from "react";
import "tscircuit";

export const tidaSourceScale = 0.01827813802686429;
export const tidaSourceLineWidth = tidaSourceScale;
export const tidaSourceBlue = "#000080";
export const tidaSymbolBlue = "#0000ff";
export const tidaSourceDark = "#1f2937";
export const tidaSourceRed = "#800000";

type Point = { x: number; y: number };

type ReferencePartProps = {
  name: string;
  value: string;
  schX: number;
  schY: number;
};

export const HiddenTwoPinPart = ({
  name,
  footprint,
  manufacturerPartNumber,
  doNotPlace,
}: {
  name: string;
  footprint: string;
  manufacturerPartNumber: string;
  doNotPlace?: boolean;
}) => (
  <chip
    name={name}
    footprint={footprint}
    manufacturerPartNumber={manufacturerPartNumber}
    pinLabels={{ pin1: "pin1", pin2: "pin2" }}
    noSchematicRepresentation
    doNotPlace={doNotPlace}
  />
);

export const ReferenceVerticalCapacitor = ({
  name,
  value,
  schX,
  schY,
}: ReferencePartProps) => (
  <>
    <schematicline
      x1={schX}
      y1={schY + 0.274172}
      x2={schX}
      y2={schY + 0.091391}
      strokeWidth={tidaSourceLineWidth}
      color={tidaSourceDark}
    />
    <schematicline
      x1={schX}
      y1={schY + 0.091391}
      x2={schX}
      y2={schY + 0.036556}
      strokeWidth={tidaSourceLineWidth}
      color={tidaSymbolBlue}
    />
    <schematicline
      x1={schX - 0.146225}
      y1={schY + 0.036556}
      x2={schX + 0.146225}
      y2={schY + 0.036556}
      strokeWidth={tidaSourceLineWidth}
      color={tidaSymbolBlue}
    />
    <schematicline
      x1={schX - 0.146225}
      y1={schY - 0.036556}
      x2={schX + 0.146225}
      y2={schY - 0.036556}
      strokeWidth={tidaSourceLineWidth}
      color={tidaSymbolBlue}
    />
    <schematicline
      x1={schX}
      y1={schY - 0.036556}
      x2={schX}
      y2={schY - 0.091391}
      strokeWidth={tidaSourceLineWidth}
      color={tidaSymbolBlue}
    />
    <schematicline
      x1={schX}
      y1={schY - 0.091391}
      x2={schX}
      y2={schY - 0.274172}
      strokeWidth={tidaSourceLineWidth}
      color={tidaSourceDark}
    />
    <schematictext
      schX={schX + 0.164503}
      schY={schY + 0.018278}
      text={name}
      fontSize={0.182781}
      anchor="left"
      color={tidaSourceDark}
    />
    <schematictext
      schX={schX + 0.164503}
      schY={schY - 0.164503}
      text={value}
      fontSize={0.182781}
      anchor="left"
      color={tidaSourceDark}
    />
  </>
);

export const ReferenceVerticalResistor = ({
  name,
  value,
  schX,
  schY,
}: ReferencePartProps) => (
  <>
    <schematicline
      x1={schX}
      y1={schY + 0.365563}
      x2={schX}
      y2={schY + 0.182781}
      strokeWidth={tidaSourceLineWidth}
      color={tidaSourceDark}
    />
    <schematicpath
      points={[
        { x: schX, y: schY + 0.182781 },
        { x: schX, y: schY + 0.109669 },
        { x: schX + 0.036556, y: schY + 0.091391 },
        { x: schX - 0.036556, y: schY + 0.054834 },
        { x: schX + 0.036556, y: schY + 0.018278 },
        { x: schX - 0.036556, y: schY - 0.018278 },
        { x: schX + 0.036556, y: schY - 0.054834 },
        { x: schX - 0.036556, y: schY - 0.091391 },
        { x: schX, y: schY - 0.109669 },
        { x: schX, y: schY - 0.182781 },
      ]}
      strokeColor={tidaSymbolBlue}
      strokeWidth={tidaSourceLineWidth}
    />
    <schematicline
      x1={schX}
      y1={schY - 0.182781}
      x2={schX}
      y2={schY - 0.365563}
      strokeWidth={tidaSourceLineWidth}
      color={tidaSourceDark}
    />
    <schematictext
      schX={schX + 0.054834}
      schY={schY + 0.109669}
      text={name}
      fontSize={0.182781}
      anchor="left"
      color={tidaSourceDark}
    />
    <schematictext
      schX={schX + 0.054834}
      schY={schY - 0.073112}
      text={value}
      fontSize={0.182781}
      anchor="left"
      color={tidaSourceDark}
    />
  </>
);

export const ReferenceNetTie = ({
  name,
  schX,
  schY,
}: {
  name: string;
  schX: number;
  schY: number;
}) => (
  <>
    <schematicline
      x1={schX - 0.365563}
      y1={schY}
      x2={schX - 0.182781}
      y2={schY}
      strokeWidth={tidaSourceLineWidth}
      color={tidaSourceDark}
    />
    <schematicline
      x1={schX + 0.182781}
      y1={schY}
      x2={schX + 0.365563}
      y2={schY}
      strokeWidth={tidaSourceLineWidth}
      color={tidaSourceDark}
    />
    {/* The renderer currently ignores fillColor. Layering these two rectangles
        preserves the Altium yellow fill and red outline. */}
    <schematicrect
      schX={schX}
      schY={schY}
      width={0.365563}
      height={0.182781}
      strokeWidth={tidaSourceLineWidth}
      isFilled
      color="#ffffb0"
    />
    <schematicrect
      schX={schX}
      schY={schY}
      width={0.365563}
      height={0.182781}
      strokeWidth={tidaSourceLineWidth}
      color={tidaSourceRed}
    />
    <schematictext
      schX={schX - 0.182781}
      schY={schY + 0.182782}
      text={name}
      fontSize={0.182781}
      anchor="left"
      color={tidaSourceDark}
    />
    <schematictext
      schX={schX - 0.182781}
      schY={schY - 0.182781}
      text="Net-Tie"
      fontSize={0.182781}
      anchor="left"
      color={tidaSourceDark}
    />
  </>
);

export const ReferenceGround = ({
  schX,
  schY,
}: {
  schX: number;
  schY: number;
}) => (
  <>
    <schematicline
      x1={schX}
      y1={schY}
      x2={schX}
      y2={schY - 0.073113}
      strokeWidth={tidaSourceLineWidth}
      color={tidaSourceRed}
    />
    <schematicline
      x1={schX - 0.127947}
      y1={schY - 0.073113}
      x2={schX + 0.127947}
      y2={schY - 0.073113}
      strokeWidth={tidaSourceLineWidth}
      color={tidaSourceRed}
    />
    <schematicline
      x1={schX - 0.082252}
      y1={schY - 0.146225}
      x2={schX + 0.082252}
      y2={schY - 0.146225}
      strokeWidth={tidaSourceLineWidth}
      color={tidaSourceRed}
    />
    <schematicline
      x1={schX - 0.036556}
      y1={schY - 0.219338}
      x2={schX + 0.036556}
      y2={schY - 0.219338}
      strokeWidth={tidaSourceLineWidth}
      color={tidaSourceRed}
    />
    <schematictext
      schX={schX}
      schY={schY - 0.29245}
      text="GND"
      fontSize={0.182781}
      anchor="top"
      color={tidaSourceRed}
    />
  </>
);

export const ReferenceWiring = ({
  paths,
}: {
  paths: readonly (readonly Point[])[];
}) => (
  <>
    {paths.map((points, index) => (
      <Fragment key={`wire-${index}`}>
        <schematicpath
          points={points.map(({ x, y }) => ({ x, y }))}
          strokeColor={tidaSourceBlue}
          strokeWidth={tidaSourceLineWidth}
        />
      </Fragment>
    ))}
  </>
);

export const ReferenceJunctions = ({
  centers,
}: {
  centers: readonly Point[];
}) => (
  <>
    {centers.map((center, index) => (
      <Fragment key={`junction-${index}`}>
        <schematiccircle
          center={center}
          radius={0.032901}
          isFilled
          color={tidaSourceRed}
          strokeWidth={tidaSourceLineWidth}
        />
      </Fragment>
    ))}
  </>
);

export const ReferenceLabels = ({
  labels,
}: {
  labels: readonly { text: string; x: number; y: number }[];
}) => (
  <>
    {labels.map(({ text, x, y }, index) => (
      <Fragment key={`label-${text}-${index}`}>
        <schematictext
          text={text}
          schX={x}
          schY={y + 0.091391}
          fontSize={0.182781}
          anchor="left"
          color={tidaSourceRed}
        />
      </Fragment>
    ))}
  </>
);
