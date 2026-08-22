import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["S3"],
  pin2: ["S1"],
  pin3: ["S2"],
  pin4: ["G"],
  pin5: ["D2"],
  pin6: ["D3"],
  pin7: ["D4"],
  pin8: ["D1"],
  pin9: ["D5"],
} as const;

export const CSD18513Q5A = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2862101"],
      }}
      manufacturerPartNumber="CSD18513Q5A"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.635mm"
            pcbY="-2.875026mm"
            width="0.6999986mm"
            height="1.0999978mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.635mm"
            pcbY="-2.875026mm"
            width="0.6999986mm"
            height="1.0999978mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.905mm"
            pcbY="-2.875026mm"
            width="0.6999986mm"
            height="1.0999978mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.905mm"
            pcbY="-2.875026mm"
            width="0.6999986mm"
            height="1.0999978mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.905mm"
            pcbY="2.875026mm"
            width="0.6999986mm"
            height="1.0999978mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.905mm"
            pcbY="2.875026mm"
            width="0.6999986mm"
            height="1.0999978mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.635mm"
            pcbY="2.875026mm"
            width="0.6999986mm"
            height="1.0999978mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.635mm"
            pcbY="2.875026mm"
            width="0.6999986mm"
            height="1.0999978mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0mm"
            pcbY="0.635mm"
            width="4.5099986mm"
            height="3.580003mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 2.4500077999998666, y: 2.875000600000135 },
              { x: 2.4500077999998666, y: -2.8750006000000212 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.450007800000094, y: 2.875000600000135 },
              { x: -2.450007800000094, y: -2.8750006000000212 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.66700000000003, y: -2.9209999999999354 },
              { x: -2.6756548401225473, y: -2.9867400374558883 },
              { x: -2.701029547438793, y: -3.048000000000002 },
              { x: -2.741394877578614, y: -3.1006051224213707 },
              { x: -2.7939999999999827, y: -3.1409704525611915 },
              { x: -2.8552599625439825, y: -3.1663451598774373 },
              { x: -2.921000000000049, y: -3.1749999999999545 },
              { x: -2.9867400374561157, y: -3.1663451598774373 },
              { x: -3.048000000000002, y: -3.1409704525611915 },
              { x: -3.1006051224214843, y: -3.1006051224213707 },
              { x: -3.140970452561305, y: -3.048000000000002 },
              { x: -3.1663451598774373, y: -2.9867400374558883 },
              { x: -3.1749999999999545, y: -2.9209999999999354 },
              { x: -3.1663451598774373, y: -2.8552599625439825 },
              { x: -3.140970452561305, y: -2.7939999999999827 },
              { x: -3.1006051224214843, y: -2.7413948775785 },
              { x: -3.048000000000002, y: -2.7010295474386794 },
              { x: -2.9867400374561157, y: -2.6756548401225473 },
              { x: -2.921000000000049, y: -2.66700000000003 },
              { x: -2.8552599625439825, y: -2.6756548401225473 },
              { x: -2.7939999999999827, y: -2.7010295474386794 },
              { x: -2.741394877578614, y: -2.7413948775785 },
              { x: -2.701029547438793, y: -2.7939999999999827 },
              { x: -2.6756548401225473, y: -2.8552599625439825 },
              { x: -2.66700000000003, y: -2.9209999999999354 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.3556mm"
            pcbY="4.429mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -3.4249999999999545, y: 3.6789999999999736 },
              { x: 2.713799999999992, y: 3.6789999999999736 },
              { x: 2.713799999999992, y: -3.6790000000000873 },
              { x: -3.4249999999999545, y: -3.6790000000000873 },
              { x: -3.4249999999999545, y: 3.6789999999999736 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2862101.obj?uuid=95d3eebac31746c1b1270344a0444abd",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2862101.step?uuid=95d3eebac31746c1b1270344a0444abd",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: -0.01 },
      }}
      {...props}
    />
  );
};

export default CSD18513Q5A;
