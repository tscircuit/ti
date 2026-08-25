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
export const SQJ461EP = (props: ChipProps<typeof SQJ461EP_PIN_LABELS>) => (
  <chip
    manufacturerPartNumber="SQJ461EP"
    footprint="kicad:Package_SO/PowerPAK_SO-8L_Single"
    internallyConnectedPins={[[1, 2, 3]]}
    symbol={
      <symbol>
        <schematicrect
          schX={0}
          schY={0}
          width={0.762}
          height={0.8382}
          strokeWidth={0.025}
          color="#840000"
          fillColor="#ffffc2"
          isFilled
        />
        <port
          name="pin5"
          aliases={["D"]}
          schX={-0.889}
          schY={-0.0889}
          direction="left"
          schStemLength={0.508}
          pinNumber={5}
        />
        <port
          name="pin4"
          aliases={["G"]}
          schX={-0.127}
          schY={0.9271}
          direction="up"
          schStemLength={0.508}
          pinNumber={4}
        />
        <port
          name="pin1"
          aliases={["S", "S_1"]}
          schX={0.889}
          schY={0.1651}
          direction="right"
          schStemLength={0.508}
          pinNumber={1}
        />
        <port
          name="pin2"
          aliases={["S", "S_2"]}
          schX={0.889}
          schY={-0.0889}
          direction="right"
          schStemLength={0.508}
          pinNumber={2}
        />
        <port
          name="pin3"
          aliases={["S", "S_3"]}
          schX={0.889}
          schY={-0.3429}
          direction="right"
          schStemLength={0.508}
          pinNumber={3}
        />
      </symbol>
    }
    {...props}
  />
);

export default SQJ461EP;
