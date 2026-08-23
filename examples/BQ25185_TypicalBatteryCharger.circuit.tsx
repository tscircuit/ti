import "tscircuit";
import { Fragment } from "react";
import { BQ25185DLHR } from "../lib/chips/BQ25185DLHR.tsx";

const PRIMARY = "#840000";

const TiGround = ({ x, y }: { x: number; y: number }) => (
  <>
    <schematicline
      x1={x}
      y1={y + 0.1}
      x2={x}
      y2={y}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicpath
      points={[
        { x: x - 0.13, y },
        { x: x + 0.13, y },
        { x, y: y - 0.22 },
        { x: x - 0.13, y },
      ]}
      strokeWidth={0.02}
      strokeColor={PRIMARY}
      isFilled
      fillColor={PRIMARY}
    />
  </>
);

/**
 * TI BQ25185 datasheet (SLUSF65A), Figure 8-1, "BQ25185 Typical Application":
 * https://www.ti.com/lit/ds/symlink/bq25185.pdf#page=20
 * Figure asset: https://www.ti.com/ods/images/SLUSF65A/GUID-20230122-SS0I-PSKM-ZS85-WTN1HZFTWQXP-low.svg
 */
export const BQ25185_TypicalBatteryCharger = () => (
  <board routingDisabled>
    <net
      name="GND"
      isGroundNet
      connectsTo={[
        "CIN.pin2",
        "RILIM.pin2",
        "RISET.pin2",
        "U1.pin5",
        "U1.pin11",
        "CSYS.pin2",
        "CBAT.pin2",
        "BT1.pin2",
        "RNTC.pin2",
        "SW1.pin1",
      ]}
    />

    <BQ25185DLHR
      name="U1"
      displayName=""
      schX={0}
      schY={0}
      pinLabels={{
        pin1: "pin1",
        pin2: "pin2",
        pin3: "pin3",
        pin4: "pin4",
        pin5: "pin5",
        pin6: "pin6",
        pin7: "pin7",
        pin8: "pin8",
        pin9: "pin9",
        pin10: "pin10",
        pin11: "pin11",
      }}
      symbol={
        <symbol>
          <schematicrect
            schX={0}
            schY={0}
            width={2.8}
            height={4.4}
            strokeWidth={0.03}
            color={PRIMARY}
            isFilled={false}
          />
          {[
            { y: 1.6, label: "IN" },
            { y: 0.7, label: "STAT1" },
            { y: 0.35, label: "STAT2" },
            { y: 0, label: "/CE" },
            { y: -1, label: "ILIM/VSET" },
            { y: -1.35, label: "ISET" },
          ].map(({ y, label }) => (
            <Fragment key={label}>
              <schematictext
                text={label}
                schX={-1.15}
                schY={y}
                fontSize={0.16}
                anchor="left"
                color={PRIMARY}
              />
            </Fragment>
          ))}
          {[
            { y: 1.6, label: "SYS" },
            { y: 0.65, label: "BAT" },
            { y: -0.55, label: "TS/MR" },
          ].map(({ y, label }) => (
            <Fragment key={label}>
              <schematictext
                text={label}
                schX={1.15}
                schY={y}
                fontSize={0.16}
                anchor="right"
                color={PRIMARY}
              />
            </Fragment>
          ))}
          <schematictext
            text="BQ25185"
            schX={0}
            schY={-1.75}
            fontSize={0.22}
            anchor="center"
            color={PRIMARY}
          />
          <schematictext
            text="GND"
            schX={0}
            schY={-2}
            fontSize={0.16}
            anchor="center"
            color={PRIMARY}
          />
          {[
            { pin: 10, y: 1.6 },
            { pin: 9, y: 0.7 },
            { pin: 3, y: 0.35 },
            { pin: 4, y: 0 },
            { pin: 7, y: -1 },
            { pin: 8, y: -1.35 },
          ].map(({ pin, y }) => (
            <Fragment key={`left-stem-${pin}`}>
              <schematicline
                x1={-2.1}
                y1={y}
                x2={-1.4}
                y2={y}
                strokeWidth={0.02}
                color={PRIMARY}
              />
            </Fragment>
          ))}
          {[
            { pin: 1, y: 1.6 },
            { pin: 2, y: 0.65 },
            { pin: 6, y: -0.55 },
          ].map(({ pin, y }) => (
            <Fragment key={`right-stem-${pin}`}>
              <schematicline
                x1={1.4}
                y1={y}
                x2={2.1}
                y2={y}
                strokeWidth={0.02}
                color={PRIMARY}
              />
            </Fragment>
          ))}
          <schematicline
            x1={0}
            y1={-2.2}
            x2={0}
            y2={-2.9}
            strokeWidth={0.02}
            color={PRIMARY}
          />
          <schematicline
            x1={0.5}
            y1={-2.2}
            x2={0.5}
            y2={-2.9}
            strokeWidth={0.02}
            color={PRIMARY}
          />
          <port
            name="pin10"
            pinNumber={10}
            schX={-2.1}
            schY={1.6}
            direction="left"
            schStemLength={0}
          />
          <port
            name="pin9"
            pinNumber={9}
            schX={-2.1}
            schY={0.7}
            direction="left"
            schStemLength={0}
          />
          <port
            name="pin3"
            pinNumber={3}
            schX={-2.1}
            schY={0.35}
            direction="left"
            schStemLength={0}
          />
          <port
            name="pin4"
            pinNumber={4}
            schX={-2.1}
            schY={0}
            direction="left"
            schStemLength={0}
          />
          <port
            name="pin7"
            pinNumber={7}
            schX={-2.1}
            schY={-1}
            direction="left"
            schStemLength={0}
          />
          <port
            name="pin8"
            pinNumber={8}
            schX={-2.1}
            schY={-1.35}
            direction="left"
            schStemLength={0}
          />
          <port
            name="pin1"
            pinNumber={1}
            schX={2.1}
            schY={1.6}
            direction="right"
            schStemLength={0}
          />
          <port
            name="pin2"
            pinNumber={2}
            schX={2.1}
            schY={0.65}
            direction="right"
            schStemLength={0}
          />
          <port
            name="pin6"
            pinNumber={6}
            schX={2.1}
            schY={-0.55}
            direction="right"
            schStemLength={0}
          />
          <port
            name="pin5"
            pinNumber={5}
            schX={0}
            schY={-2.9}
            direction="down"
            schStemLength={0}
          />
          <port
            name="pin11"
            pinNumber={11}
            schX={0.5}
            schY={-2.9}
            direction="down"
            schStemLength={0}
          />
        </symbol>
      }
    />

    <capacitor
      name="CIN"
      displayName=""
      capacitance="1uF"
      footprint="0402"
      schX={-3.3}
      schY={1.3}
      schOrientation="vertical"
    />
    <resistor
      name="RILIM"
      displayName=""
      resistance="5k"
      footprint="0402"
      schX={-3.1}
      schY={-1.35}
      schOrientation="vertical"
    />
    <resistor
      name="RISET"
      displayName=""
      resistance="1k"
      footprint="0402"
      schX={-2.4}
      schY={-1.7}
      schOrientation="vertical"
    />
    <capacitor
      name="CSYS"
      displayName=""
      capacitance="10uF"
      footprint="0402"
      schX={3.1}
      schY={1.3}
      schOrientation="vertical"
    />
    <capacitor
      name="CBAT"
      displayName=""
      capacitance="1uF"
      footprint="0402"
      schX={3.1}
      schY={0.35}
      schOrientation="vertical"
    />
    <battery
      name="BT1"
      displayName=""
      voltage="4.2V"
      footprint="pinrow2"
      schX={4.4}
      schY={0}
      schOrientation="vertical"
    />
    <resistor
      name="RNTC"
      displayName="NTC"
      resistance="10k"
      footprint="0402"
      schX={4.4}
      schY={-1.15}
      schOrientation="vertical"
    />
    <pushbutton
      name="SW1"
      displayName=""
      footprint="smdpushbutton"
      schX={3.3}
      schY={-1.15}
      schRotation={90}
    />

    <trace from="CIN.pin1" to="U1.pin10" />
    <trace from="U1.pin7" to="RILIM.pin1" />
    <trace from="U1.pin8" to="RISET.pin1" />
    <trace from="U1.pin1" to="CSYS.pin1" />
    <trace from="U1.pin2" to="CBAT.pin1" />
    <trace from="U1.pin2" to="BT1.pin1" />
    <trace from="U1.pin6" to="RNTC.pin1" />
    <trace from="U1.pin6" to="SW1.pin2" />

    <schematicrect
      schX={-4.7}
      schY={0.35}
      width={1.1}
      height={1.3}
      strokeWidth={0.02}
      color={PRIMARY}
      isDashed
      isFilled={false}
    />
    <schematictext
      text="Host"
      schX={-4.7}
      schY={0.35}
      fontSize={0.2}
      anchor="center"
    />
    <schematicline
      x1={-4.15}
      y1={0.7}
      x2={-2.1}
      y2={0.7}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-4.15}
      y1={0.35}
      x2={-2.1}
      y2={0.35}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematicline
      x1={-4.15}
      y1={0}
      x2={-2.1}
      y2={0}
      strokeWidth={0.02}
      color={PRIMARY}
    />

    <schematicrect
      schX={4.7}
      schY={1.6}
      width={1.2}
      height={0.9}
      strokeWidth={0.02}
      color={PRIMARY}
      isDashed
      isFilled={false}
    />
    <schematictext
      text="Regulated"
      schX={4.7}
      schY={1.75}
      fontSize={0.17}
      anchor="center"
    />
    <schematictext
      text="Load"
      schX={4.7}
      schY={1.45}
      fontSize={0.17}
      anchor="center"
    />
    <schematicline
      x1={3.1}
      y1={1.6}
      x2={4.1}
      y2={1.6}
      strokeWidth={0.02}
      color={PRIMARY}
    />

    <schematicline
      x1={-4.2}
      y1={1.6}
      x2={-3.3}
      y2={1.6}
      strokeWidth={0.02}
      color={PRIMARY}
    />
    <schematiccircle
      center={{ x: -4.2, y: 1.6 }}
      radius={0.04}
      strokeWidth={0.02}
      color={PRIMARY}
      isFilled={false}
    />
    <schematictext
      text="VBUS"
      schX={-4.55}
      schY={1.6}
      fontSize={0.19}
      anchor="center"
    />

    <TiGround x={-3.3} y={0.95} />
    <TiGround x={-3.1} y={-1.95} />
    <TiGround x={-2.4} y={-2.3} />
    <TiGround x={0} y={-2.9} />
    <TiGround x={3.1} y={0.95} />
    <TiGround x={3.1} y={0} />
    <TiGround x={3.3} y={-1.65} />
    <TiGround x={4.4} y={-1.75} />
  </board>
);

export default BQ25185_TypicalBatteryCharger;
