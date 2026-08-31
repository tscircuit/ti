import { PowerSupply_WindowModule } from "@tsci/tscircuit.ti";
import "tscircuit";

export default () => (
  <board routingDisabled>
    <PowerSupply_WindowModule name="powerSupply" />
  </board>
);
