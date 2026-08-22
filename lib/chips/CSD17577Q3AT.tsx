import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["S3"],
  pin2: ["S2"],
  pin3: ["S1"],
  pin4: ["G"],
  pin5: ["D2"],
  pin6: ["D3"],
  pin7: ["D4"],
  pin8: ["D5"],
  pin9: ["D1"],
} as const;

export const CSD17577Q3AT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2876538"],
      }}
      manufacturerPartNumber="CSD17577Q3AT"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin9"]}
            pcbX="0mm"
            pcbY="0.3143504mm"
            width="2.5500076mm"
            height="1.7999964mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.975106mm"
            pcbY="1.5129764mm"
            width="0.3999992mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.32512mm"
            pcbY="1.5129764mm"
            width="0.3999992mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.324866mm"
            pcbY="1.5129764mm"
            width="0.3999992mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.974852mm"
            pcbY="1.5129764mm"
            width="0.3999992mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.975106mm"
            pcbY="-1.4834616mm"
            width="0.3999992mm"
            height="0.6580124mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.32512mm"
            pcbY="-1.4839696mm"
            width="0.3999992mm"
            height="0.6580124mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.324866mm"
            pcbY="-1.4839696mm"
            width="0.3999992mm"
            height="0.6580124mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.974852mm"
            pcbY="-1.4839696mm"
            width="0.3999992mm"
            height="0.6580124mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.5499334000001, y: -1.7120869999999968 },
              { x: -1.5499334000001, y: 1.5379445999999461 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.5501619999998866, y: -1.7379187999999886 },
              { x: 1.5501619999998866, y: 1.5121127999999544 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.4239240000000564, y: -2.0176236000000927 },
              { x: -1.4273340070083123, y: -2.0435251747577468 },
              { x: -1.4373316416908892, y: -2.067661600000065 },
              { x: -1.4532355817659663, y: -2.0883880182340135 },
              { x: -1.4739620000000286, y: -2.1042919583090907 },
              { x: -1.4980984252423468, y: -2.1142895929916676 },
              { x: -1.524000000000001, y: -2.117699600000037 },
              { x: -1.549901574757655, y: -2.1142895929916676 },
              { x: -1.5740380000002006, y: -2.1042919583090907 },
              { x: -1.5947644182340355, y: -2.0883880182340135 },
              { x: -1.6106683583091126, y: -2.067661600000065 },
              { x: -1.6206659929916896, y: -2.0435251747577468 },
              { x: -1.6240759999999455, y: -2.0176236000000927 },
              { x: -1.6206659929916896, y: -1.9917220252424386 },
              { x: -1.6106683583091126, y: -1.9675856000001204 },
              { x: -1.5947644182340355, y: -1.946859181766058 },
              { x: -1.5740380000002006, y: -1.930955241690981 },
              { x: -1.549901574757655, y: -1.920957607008404 },
              { x: -1.524000000000001, y: -1.9175476000001481 },
              { x: -1.4980984252423468, y: -1.920957607008404 },
              { x: -1.4739620000000286, y: -1.930955241690981 },
              { x: -1.4532355817659663, y: -1.946859181766058 },
              { x: -1.4373316416908892, y: -1.9675856000001204 },
              { x: -1.4273340070083123, y: -1.9917220252424386 },
              { x: -1.4239240000000564, y: -2.0176236000000927 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.023114mm"
            pcbY="2.8132044mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.8733140000000503, y: 2.063204399999904 },
              { x: 1.8270859999998947, y: 2.063204399999904 },
              { x: 1.8270859999998947, y: -2.3737956000001077 },
              { x: -1.8733140000000503, y: -2.3737956000001077 },
              { x: -1.8733140000000503, y: 2.063204399999904 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default CSD17577Q3AT;
