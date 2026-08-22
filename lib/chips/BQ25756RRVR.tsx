import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SCL"],
  pin2: ["SDA"],
  pin3: ["INT"],
  pin4: ["STAT1"],
  pin5: ["STAT2"],
  pin6: ["PG"],
  pin7: ["CE"],
  pin8: ["TS"],
  pin9: ["ICHG"],
  pin10: ["ILIM_HIZ"],
  pin11: ["FBG"],
  pin12: ["FB"],
  pin13: ["SRN"],
  pin14: ["SRP"],
  pin15: ["NC3"],
  pin16: ["NC2"],
  pin17: ["PGND3"],
  pin18: ["SW2"],
  pin19: ["HIDRV2"],
  pin20: ["BTST2"],
  pin21: ["LODRV2"],
  pin22: ["PGND2"],
  pin23: ["DRV_SUP"],
  pin24: ["REGN"],
  pin25: ["LODRV1"],
  pin26: ["BTST1"],
  pin27: ["HIDRV1"],
  pin28: ["SW1"],
  pin29: ["ACN"],
  pin30: ["ACP"],
  pin31: ["NC1"],
  pin32: ["VAC2"],
  pin33: ["VAC1"],
  pin34: ["ACUV"],
  pin35: ["ACOV"],
  pin36: ["FSW_SYNC"],
  pin37: ["PGND1"],
} as const;

const pinAttributes = {
  pin15: { doNotConnect: true },
  pin16: { doNotConnect: true },
  pin17: { requiresGround: true },
  pin22: { requiresGround: true },
  pin31: { doNotConnect: true },
  pin37: { requiresGround: true },
} as const;

export const BQ25756RRVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C19272232"],
      }}
      manufacturerPartNumber="BQ25756RRVR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin37"]}
            pcbX="0mm"
            pcbY="-0.000127mm"
            width="4.499991mm"
            height="3.499993mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="-2.999994mm"
            pcbY="-1.750187mm"
            width="0.6999986mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="-2.999994mm"
            pcbY="-1.250061mm"
            width="0.6999986mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="-2.999994mm"
            pcbY="-0.750189mm"
            width="0.6999986mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="-2.999994mm"
            pcbY="-0.250063mm"
            width="0.6999986mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="-2.999994mm"
            pcbY="0.249809mm"
            width="0.6999986mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="-2.999994mm"
            pcbY="0.749935mm"
            width="0.6999986mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="-2.999994mm"
            pcbY="1.249807mm"
            width="0.6999986mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="-2.999994mm"
            pcbY="1.749933mm"
            width="0.6999986mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="-2.249932mm"
            pcbY="2.499995mm"
            width="0.2999994mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="-1.75006mm"
            pcbY="2.499995mm"
            width="0.2999994mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="-1.249934mm"
            pcbY="2.499995mm"
            width="0.2999994mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="-0.750062mm"
            pcbY="2.499995mm"
            width="0.2999994mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-0.249936mm"
            pcbY="2.499995mm"
            width="0.2999994mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="0.249936mm"
            pcbY="2.499995mm"
            width="0.2999994mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="0.750062mm"
            pcbY="2.499995mm"
            width="0.2999994mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="1.249934mm"
            pcbY="2.499995mm"
            width="0.2999994mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="1.749806mm"
            pcbY="2.499995mm"
            width="0.2999994mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="2.249932mm"
            pcbY="2.499995mm"
            width="0.2999994mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="2.999994mm"
            pcbY="1.749933mm"
            width="0.6999986mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="2.999994mm"
            pcbY="1.249807mm"
            width="0.6999986mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="2.999994mm"
            pcbY="0.749935mm"
            width="0.6999986mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="2.999994mm"
            pcbY="0.249809mm"
            width="0.6999986mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="2.999994mm"
            pcbY="-0.250063mm"
            width="0.6999986mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="2.999994mm"
            pcbY="-0.750189mm"
            width="0.6999986mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="2.999994mm"
            pcbY="-1.250061mm"
            width="0.6999986mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="2.999994mm"
            pcbY="-1.750187mm"
            width="0.6999986mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="2.249932mm"
            pcbY="-2.499995mm"
            width="0.2999994mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.75006mm"
            pcbY="-2.499995mm"
            width="0.2999994mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.249934mm"
            pcbY="-2.499995mm"
            width="0.2999994mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.750062mm"
            pcbY="-2.499995mm"
            width="0.2999994mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.249936mm"
            pcbY="-2.499995mm"
            width="0.2999994mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.249936mm"
            pcbY="-2.499995mm"
            width="0.2999994mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.750062mm"
            pcbY="-2.499995mm"
            width="0.2999994mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.249934mm"
            pcbY="-2.499995mm"
            width="0.2999994mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.75006mm"
            pcbY="-2.499995mm"
            width="0.2999994mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.249932mm"
            pcbY="-2.499995mm"
            width="0.2999994mm"
            height="0.6999986mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -3.000070199999982, y: 2.499944199999959 },
              { x: -2.6312114000000975, y: 2.499944199999959 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.6310336000000234, y: 2.499944199999959 },
              { x: 2.9999431999999615, y: 2.499944199999959 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.000070199999982, y: -2.5000711999998657 },
              { x: -2.6312114000000975, y: -2.5000711999998657 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.6310843999999634, y: -2.5000711999998657 },
              { x: 2.9999431999999615, y: -2.5000711999998657 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.000070199999982, y: 2.499944199999959 },
              { x: -3.000070199999982, y: 2.1310854000000745 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.000070199999982, y: -2.1312123999999812 },
              { x: -3.000070199999982, y: -2.5000711999998657 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.9999431999999615, y: -2.5000711999998657 },
              { x: 2.9999431999999615, y: -2.1312123999999812 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.9999431999999615, y: 2.1310854000000745 },
              { x: 2.9999431999999615, y: 2.499944199999959 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.8498800000000983, y: -3.0001210000000356 },
              { x: -2.8549950105126527, y: -3.038973362136403 },
              { x: -2.8699914625364045, y: -3.075177999999937 },
              { x: -2.89384737264902, y: -3.1062676273510306 },
              { x: -2.9249370000001136, y: -3.1301235374636462 },
              { x: -2.961141637863534, y: -3.145119989487398 },
              { x: -2.999994000000015, y: -3.1502349999998387 },
              { x: -3.0388463621367237, y: -3.145119989487398 },
              { x: -3.075051000000144, y: -3.1301235374636462 },
              { x: -3.106140627351124, y: -3.1062676273510306 },
              { x: -3.1299965374637395, y: -3.075177999999937 },
              { x: -3.144992989487605, y: -3.038973362136403 },
              { x: -3.1501080000001593, y: -3.0001210000000356 },
              { x: -3.144992989487605, y: -2.961268637863327 },
              { x: -3.1299965374637395, y: -2.9250639999999066 },
              { x: -3.106140627351124, y: -2.893974372648927 },
              { x: -3.075051000000144, y: -2.870118462536311 },
              { x: -3.0388463621367237, y: -2.8551220105124457 },
              { x: -2.999994000000015, y: -2.8500069999998914 },
              { x: -2.961141637863534, y: -2.8551220105124457 },
              { x: -2.9249370000001136, y: -2.870118462536311 },
              { x: -2.89384737264902, y: -2.893974372648927 },
              { x: -2.8699914625364045, y: -2.9250639999999066 },
              { x: -2.8549950105126527, y: -2.961268637863327 },
              { x: -2.8498800000000983, y: -3.0001210000000356 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0mm"
            pcbY="3.844673mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -3.602800000000002, y: 3.094673000000057 },
              { x: 3.602800000000002, y: 3.094673000000057 },
              { x: 3.602800000000002, y: -3.3997269999999844 },
              { x: -3.602800000000002, y: -3.3997269999999844 },
              { x: -3.602800000000002, y: 3.094673000000057 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C19272232.obj?uuid=3050ce87e30e41f7be9da0b2df247c01",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C19272232.step?uuid=3050ce87e30e41f7be9da0b2df247c01",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.000012699999956566899, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default BQ25756RRVR;
