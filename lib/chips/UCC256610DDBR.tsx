import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["HV"],
  pin3: ["BLK"],
  pin4: ["pin4"],
  pin5: ["FB"],
  pin6: ["LL"],
  pin7: ["TSET"],
  pin8: ["V5P"],
  pin9: ["ISNS"],
  pin10: ["GNDP"],
  pin11: ["LO"],
  pin12: ["VCCP"],
  pin14: ["HB"],
  pin15: ["HO"],
  pin16: ["HS"],
} as const;

export const UCC256610DDBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C49247863"],
      }}
      manufacturerPartNumber="UCC256610DDBR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.77495mm"
            pcbY="4.445mm"
            width="1.5500096mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-2.77495mm"
            pcbY="1.905mm"
            width="1.5500096mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-2.77495mm"
            pcbY="0.635mm"
            width="1.5500096mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-2.77495mm"
            pcbY="-0.635mm"
            width="1.5500096mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.77495mm"
            pcbY="-1.905mm"
            width="1.5500096mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-2.77495mm"
            pcbY="-3.175mm"
            width="1.5500096mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-2.77495mm"
            pcbY="-4.445mm"
            width="1.5500096mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="2.77495mm"
            pcbY="-4.445mm"
            width="1.5500096mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="2.77495mm"
            pcbY="-3.175mm"
            width="1.5500096mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="2.77495mm"
            pcbY="-1.905mm"
            width="1.5500096mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="2.77495mm"
            pcbY="-0.635mm"
            width="1.5500096mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="2.77495mm"
            pcbY="1.905mm"
            width="1.5500096mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="2.77495mm"
            pcbY="3.175mm"
            width="1.5500096mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="2.77495mm"
            pcbY="4.445mm"
            width="1.5500096mm"
            height="0.5999988mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.7999964000000546, y: 4.899990199999934 },
              { x: 1.7999964000000546, y: 4.899990199999934 },
              { x: 1.7999964000000546, y: -4.89999019999982 },
              { x: -1.7999964000000546, y: -4.89999019999982 },
              { x: -1.7999964000000546, y: 4.899990199999934 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.3997920000001614, y: 5.199888000000101 },
              { x: -2.4032020070084172, y: 5.173986425242447 },
              { x: -2.413199641690994, y: 5.149850000000015 },
              { x: -2.4291035817660713, y: 5.129123581766066 },
              { x: -2.4498300000001336, y: 5.113219641690989 },
              { x: -2.473966425242452, y: 5.103222007008412 },
              { x: -2.499868000000106, y: 5.099812000000156 },
              { x: -2.52576957475776, y: 5.103222007008412 },
              { x: -2.549906000000078, y: 5.113219641690989 },
              { x: -2.5706324182340268, y: 5.129123581766066 },
              { x: -2.586536358309104, y: 5.149850000000015 },
              { x: -2.596533992991681, y: 5.173986425242447 },
              { x: -2.5999440000000504, y: 5.199888000000101 },
              { x: -2.596533992991681, y: 5.225789574757755 },
              { x: -2.586536358309104, y: 5.249926000000187 },
              { x: -2.5706324182340268, y: 5.270652418234022 },
              { x: -2.549906000000078, y: 5.286556358309099 },
              { x: -2.52576957475776, y: 5.296553992991676 },
              { x: -2.499868000000106, y: 5.299964000000045 },
              { x: -2.473966425242452, y: 5.296553992991676 },
              { x: -2.4498300000001336, y: 5.286556358309099 },
              { x: -2.4291035817660713, y: 5.270652418234022 },
              { x: -2.413199641690994, y: 5.249926000000187 },
              { x: -2.4032020070084172, y: 5.225789574757755 },
              { x: -2.3997920000001614, y: 5.199888000000101 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.0889mm"
            pcbY="6.3086mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -3.958400000000097, y: 5.5586000000000695 },
              { x: 3.780599999999936, y: 5.5586000000000695 },
              { x: 3.780599999999936, y: -5.2029999999999745 },
              { x: -3.958400000000097, y: -5.2029999999999745 },
              { x: -3.958400000000097, y: 5.5586000000000695 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C49247863.obj?uuid=e67eebb554c34962b9e6671d12c54581",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C49247863.step?uuid=e67eebb554c34962b9e6671d12c54581",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000025399999913133797,
          y: -0.000012700000070253736,
          z: -0.95,
        },
      }}
      {...props}
    />
  );
};

export default UCC256610DDBR;
