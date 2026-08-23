import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["ON", "D2"],
  pin2: ["GND", "D1"],
  pin3: ["VOUT", "C1", "VOUT_C1"],
  pin4: ["VIN", "C2", "VIN_C2"],
  pin5: ["VIN", "B2", "VIN_B2"],
  pin6: ["VOUT", "B1", "VOUT_B1"],
  pin7: ["VOUT", "A1", "VOUT_A1"],
  pin8: ["VIN", "A2", "VIN_A2"],
} as const;

const pinRoles = {
  pin1: "input",
  pin2: "ground",
  pin3: "output",
  pin4: "power",
  pin5: "power",
  pin6: "output",
  pin7: "output",
  pin8: "power",
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin4: { requiresPower: true },
  pin5: { requiresPower: true },
  pin8: { requiresPower: true },
} as const;

export const TPS22970YZPR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing YZP0008; donor SN74LVC2G132YZPR (JLCPCB C2872358)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TPS22970YZPR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="0.749935mm"
            pcbY="0.24511mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0.749935mm"
            pcbY="-0.255016mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.250063mm"
            pcbY="-0.255016mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.250063mm"
            pcbY="0.24511mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.250063mm"
            pcbY="0.24511mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.249809mm"
            pcbY="-0.255016mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.749935mm"
            pcbY="-0.255016mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.749935mm"
            pcbY="0.24511mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -0.8167370000000034, y: -0.8940799999999882 },
              { x: -0.819194974594808, y: -0.9127501706375085 },
              { x: -0.8264013914725865, y: -0.9301479999999884 },
              { x: -0.8378651452323425, y: -0.9450878547676638 },
              { x: -0.8528050000000036, y: -0.9565516085273913 },
              { x: -0.8702028293624835, y: -0.9637580254051841 },
              { x: -0.8888730000000038, y: -0.9662159999999886 },
              { x: -0.9075431706375099, y: -0.9637580254051841 },
              { x: -0.924941000000004, y: -0.9565516085273913 },
              { x: -0.9398808547676651, y: -0.9450878547676638 },
              { x: -0.9513446085273927, y: -0.9301479999999884 },
              { x: -0.9585510254051997, y: -0.9127501706375085 },
              { x: -0.9610090000000042, y: -0.8940799999999882 },
              { x: -0.9585510254051997, y: -0.8754098293624821 },
              { x: -0.9513446085273927, y: -0.858011999999988 },
              { x: -0.9398808547676651, y: -0.8430721452323269 },
              { x: -0.924941000000004, y: -0.8316083914725994 },
              { x: -0.9075431706375099, y: -0.8244019745948066 },
              { x: -0.8888730000000038, y: -0.8219439999999878 },
              { x: -0.8702028293624835, y: -0.8244019745948066 },
              { x: -0.8528050000000036, y: -0.8316083914725994 },
              { x: -0.8378651452323425, y: -0.8430721452323269 },
              { x: -0.8264013914725865, y: -0.858011999999988 },
              { x: -0.819194974594808, y: -0.8754098293624821 },
              { x: -0.8167370000000034, y: -0.8940799999999882 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.013335mm"
            pcbY="1.52451mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.2793350000000032, y: 0.7745100000000207 },
              { x: 1.2526650000000075, y: 0.7745100000000207 },
              { x: 1.2526650000000075, y: -1.2240899999999755 },
              { x: -1.2793350000000032, y: -1.2240899999999755 },
              { x: -1.2793350000000032, y: 0.7745100000000207 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default TPS22970YZPR;
