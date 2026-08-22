import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN1"],
  pin2: ["IN2"],
  pin3: ["IN3"],
  pin4: ["IN4"],
  pin5: ["GND1"],
  pin6: ["GND2"],
  pin7: ["GND3"],
  pin8: ["GND4"],
  pin9: ["EP"],
} as const;

const pinAttributes = {
  pin5: { requiresGround: true },
  pin6: { requiresGround: true },
  pin7: { requiresGround: true },
  pin8: { requiresGround: true },
} as const;

export const TVS1401DRBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1849891"],
      }}
      manufacturerPartNumber="TVS1401DRBR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.9752838mm"
            pcbY="-1.47574mm"
            width="0.3400044mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.3250438mm"
            pcbY="-1.47574mm"
            width="0.3400044mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.3251962mm"
            pcbY="-1.47574mm"
            width="0.3400044mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.9754362mm"
            pcbY="-1.47574mm"
            width="0.3400044mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.9754362mm"
            pcbY="1.47574mm"
            width="0.3400044mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.3251962mm"
            pcbY="1.47574mm"
            width="0.3400044mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.3250438mm"
            pcbY="1.47574mm"
            width="0.3400044mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.9752838mm"
            pcbY="1.47574mm"
            width="0.3400044mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            points={[
              { x: "-0.890016mm", y: "-0.759841mm" },
              { x: "-0.8899906mm", y: "-0.4698746mm" },
              { x: "-1.7100042mm", y: "-0.4698746mm" },
              { x: "-1.7100042mm", y: "-0.1798828mm" },
              { x: "-0.8800084mm", y: "-0.1798828mm" },
              { x: "-0.8800084mm", y: "0.1801368mm" },
              { x: "-1.7100042mm", y: "0.1801368mm" },
              { x: "-1.7100042mm", y: "0.4701286mm" },
              { x: "-0.8800084mm", y: "0.4701286mm" },
              { x: "-0.8800084mm", y: "0.7601204mm" },
              { x: "0.8899906mm", y: "0.7601204mm" },
              { x: "0.8899906mm", y: "0.4701286mm" },
              { x: "1.7100042mm", y: "0.4701286mm" },
              { x: "1.7100042mm", y: "0.1801368mm" },
              { x: "0.8899906mm", y: "0.1801368mm" },
              { x: "0.8899906mm", y: "-0.1798828mm" },
              { x: "1.7100042mm", y: "-0.1798828mm" },
              { x: "1.7100042mm", y: "-0.4698746mm" },
              { x: "0.8899906mm", y: "-0.4698746mm" },
              { x: "0.8899906mm", y: "-0.7598664mm" },
              { x: "-0.8899906mm", y: "-0.7598664mm" },
              { x: "-0.890016mm", y: "-0.759841mm" },
              { x: "-0.890016mm", y: "-0.759841mm" },
              { x: "-0.890016mm", y: "-0.759841mm" },
            ]}
            shape="polygon"
          />
          <silkscreenpath
            route={[
              { x: -1.523974599999974, y: 1.5241777999999613 },
              { x: -1.523974599999974, y: 0.6492494000000306 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.523974599999974, y: -0.6490207999999029 },
              { x: -1.523974599999974, y: -1.5238222000000405 },
              { x: -1.324483000000214, y: -1.5238222000000405 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.3245337999999265, y: -1.5238222000000405 },
              { x: 1.5240254000000277, y: -1.5238222000000405 },
              { x: 1.5240254000000277, y: -0.6490207999999029 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.5240254000000277, y: -0.0007619999998951243 },
              { x: 1.5240254000000277, y: 0.0010413999999627777 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.5240254000000277, y: 0.6492494000000306 },
              { x: 1.5240254000000277, y: 1.5241777999999613 },
              { x: 1.3245337999999265, y: 1.5241777999999613 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.324483000000214, y: 1.5241777999999613 },
              { x: -1.523974599999974, y: 1.5241777999999613 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.523974599999974, y: 0.0010413999999627777 },
              { x: -1.523974599999974, y: -0.0007619999998951243 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.435023800000181, y: -1.8600419999999076 },
              { x: -1.4375769778362155, y: -1.8794353110494058 },
              { x: -1.445062516494545, y: -1.897506999999905 },
              { x: -1.456970288885941, y: -1.913025511114256 },
              { x: -1.4724888000000647, y: -1.9249332835055384 },
              { x: -1.4905604889506776, y: -1.9324188221638678 },
              { x: -1.5099538000001758, y: -1.9349720000000161 },
              { x: -1.529347111049674, y: -1.9324188221638678 },
              { x: -1.5474188000001732, y: -1.9249332835055384 },
              { x: -1.5629373111144105, y: -1.913025511114256 },
              { x: -1.5748450835055792, y: -1.897506999999905 },
              { x: -1.5823306221639086, y: -1.8794353110494058 },
              { x: -1.584883800000057, y: -1.8600419999999076 },
              { x: -1.5823306221639086, y: -1.8406486889504095 },
              { x: -1.5748450835055792, y: -1.8225770000000239 },
              { x: -1.5629373111144105, y: -1.8070584888856729 },
              { x: -1.5474188000001732, y: -1.7951507164943905 },
              { x: -1.529347111049674, y: -1.787665177836061 },
              { x: -1.5099538000001758, y: -1.7851119999999128 },
              { x: -1.4905604889506776, y: -1.787665177836061 },
              { x: -1.4724888000000647, y: -1.7951507164943905 },
              { x: -1.456970288885941, y: -1.8070584888856729 },
              { x: -1.445062516494545, y: -1.8225770000000239 },
              { x: -1.4375769778362155, y: -1.8406486889504095 },
              { x: -1.435023800000181, y: -1.8600419999999076 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0.0097282mm"
            pcbY="2.888236mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.9547718000001169, y: 2.1382360000000062 },
              { x: 1.9742281999999705, y: 2.1382360000000062 },
              { x: 1.9742281999999705, y: -2.1971639999999297 },
              { x: -1.9547718000001169, y: -2.1971639999999297 },
              { x: -1.9547718000001169, y: 2.1382360000000062 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1849891.obj?uuid=398b5838886d4b48973dd3114bdbaf8b",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1849891.step?uuid=398b5838886d4b48973dd3114bdbaf8b",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000025399999913133797,
          y: -0.00010160000010728254,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default TVS1401DRBR;
