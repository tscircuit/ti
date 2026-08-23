import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin2: ["A0", "B1"],
  pin1: ["A1"],
  pin6: ["A2", "B2"],
  pin5: ["A3", "A2"],
  pin3: ["A4", "D1"],
  pin7: ["A5", "C2"],
  pin12: ["A6", "C3"],
  pin11: ["A7", "B3"],
  pin15: ["CAP0_0", "A4"],
  pin20: ["CAP0_2", "A5"],
  pin16: ["CAP1_2", "B4"],
  pin21: ["CAP1_3", "B5"],
  pin17: ["CAP2_0", "C4"],
  pin23: ["CAP2_2", "D5"],
  pin24: ["CAP3_0", "E5"],
  pin18: ["CAP3_2", "D4"],
  pin10: ["SYNC", "A3"],
  pin14: ["XIN", "E3"],
  pin19: ["XOUT", "E4"],
  pin8: ["SBWTCK", "D2"],
  pin4: ["SBWTDIO", "E1"],
  pin9: ["DVCC", "E2"],
  pin13: ["DVSS", "D3"],
  pin22: ["VREG", "C5"],
} as const;

const pinRoles = {
  pin2: "input",
  pin1: "input",
  pin6: "input",
  pin5: "input",
  pin3: "input",
  pin7: "input",
  pin12: "input",
  pin11: "input",
  pin15: "bidirectional",
  pin20: "bidirectional",
  pin16: "bidirectional",
  pin21: "bidirectional",
  pin17: "bidirectional",
  pin23: "bidirectional",
  pin24: "bidirectional",
  pin18: "bidirectional",
  pin10: "input",
  pin14: "input",
  pin19: "output",
  pin8: "input",
  pin4: "bidirectional",
  pin9: "power",
  pin13: "ground",
  pin22: "output",
} as const;

const pinAttributes = {
  pin9: {
    requiresPower: true,
  },
  pin13: {
    requiresGround: true,
  },
} as const;

export const MSP430FR2632IYQWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2053274"],
      }}
      manufacturerPartNumber="MSP430FR2632IYQWR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.8001mm"
            pcbY="0.8001mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.8001mm"
            pcbY="0.40005mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.8001mm"
            pcbY="-0.40005mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.8001mm"
            pcbY="-0.8001mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.40005mm"
            pcbY="0.8001mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.40005mm"
            pcbY="0.40005mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.40005mm"
            pcbY="0mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.40005mm"
            pcbY="-0.40005mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.40005mm"
            pcbY="-0.8001mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="0mm"
            pcbY="0.8001mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="0mm"
            pcbY="0.40005mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="0mm"
            pcbY="0mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="0mm"
            pcbY="-0.40005mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="0mm"
            pcbY="-0.8001mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="0.40005mm"
            pcbY="0.8001mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="0.40005mm"
            pcbY="0.40005mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="0.40005mm"
            pcbY="0mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="0.40005mm"
            pcbY="-0.40005mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="0.40005mm"
            pcbY="-0.8001mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="0.8001mm"
            pcbY="0.8001mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="0.8001mm"
            pcbY="0.40005mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="0.8001mm"
            pcbY="0mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="0.8001mm"
            pcbY="-0.40005mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="0.8001mm"
            pcbY="-0.8001mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -1.2261849999999868, y: 1.226185000000001 },
              { x: 1.226185000000001, y: 1.226185000000001 },
              { x: 1.226185000000001, y: -1.2261849999999868 },
              { x: -1.2261849999999868, y: -1.2261849999999868 },
              { x: -1.2261849999999868, y: 1.226185000000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.6761459999999886, y: 0.8001000000000005 },
              { x: -1.677851003504145, y: 0.7871492126211592 },
              { x: -1.6828498208454334, y: 0.7750810000000001 },
              { x: -1.6908017908829862, y: 0.7647177908829832 },
              { x: -1.7011650000000031, y: 0.7567658208454304 },
              { x: -1.7132332126211622, y: 0.7517670035041562 },
              { x: -1.7261840000000035, y: 0.7500619999999998 },
              { x: -1.7391347873788305, y: 0.7517670035041562 },
              { x: -1.7512029999999896, y: 0.7567658208454304 },
              { x: -1.7615662091170066, y: 0.7647177908829832 },
              { x: -1.7695181791545593, y: 0.7750810000000001 },
              { x: -1.7745169964958478, y: 0.7871492126211592 },
              { x: -1.77622199999999, y: 0.8001000000000005 },
              { x: -1.7745169964958478, y: 0.8130507873788275 },
              { x: -1.7695181791545593, y: 0.8251190000000008 },
              { x: -1.7615662091170066, y: 0.8354822091170178 },
              { x: -1.7512029999999896, y: 0.8434341791545705 },
              { x: -1.7391347873788305, y: 0.8484329964958448 },
              { x: -1.7261840000000035, y: 0.8501380000000012 },
              { x: -1.7132332126211622, y: 0.8484329964958448 },
              { x: -1.7011650000000031, y: 0.8434341791545705 },
              { x: -1.6908017908829862, y: 0.8354822091170178 },
              { x: -1.6828498208454334, y: 0.8251190000000008 },
              { x: -1.677851003504145, y: 0.8130507873788275 },
              { x: -1.6761459999999886, y: 0.8001000000000005 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.2794mm"
            pcbY="2.2192mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.028000000000006, y: 1.469200000000015 },
              { x: 1.4692000000000007, y: 1.469200000000015 },
              { x: 1.4692000000000007, y: -1.4945999999999913 },
              { x: -2.028000000000006, y: -1.4945999999999913 },
              { x: -2.028000000000006, y: 1.469200000000015 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2053274.obj?uuid=cdf3453816d9432ab39b610be19ac9f2",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2053274.step?uuid=cdf3453816d9432ab39b610be19ac9f2",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000012700000013410317,
          y: 0.000012699999999199463,
          z: -0.195,
        },
      }}
      {...props}
    />
  );
};

export default MSP430FR2632IYQWR;
