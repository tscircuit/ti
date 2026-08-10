# Bluetooth speaker architecture and fabrication gate

This document applies to
`examples/BluetoothSpeaker_CC2564C_TAS2505.circuit.tsx`.

## Gate result

**Status: NOT PASSED — do not order the PCB yet.**

The hardware HCI UART, shutdown, PCM audio and power interfaces are feasible,
but the repository does not contain an MSP430F5229 firmware project or a
CC2564C-compatible MSP430 Bluetopia package. Therefore service-pack download,
HCI initialization and A2DP Sink operation cannot be built or demonstrated
from this repository.

TI's current published CC2564C stack is for MSP432. It includes A2DP and the
assisted audio path, but is not an MSP430F5229 binary-compatible SDK:

- <https://www.ti.com/tool/CC2564CMSP432BTBLESW>

TI's legacy MSP430 stack and service-pack page covers CC256x/CC256xB devices.
The service pack is mandatory after every controller power cycle, but that page
does not provide a CC2564C + MSP430F5229 supported combination:

- <https://www.ti.com/tool/CC256XMSPBTBLESW>
- <https://www.ti.com/tool/CC256XB-BT-SP>

The BT-MSP-AUDSINK reference remains the hardware baseline, but its BOM uses
CC2560B rather than CC2564C:

- block diagram: <https://www.ti.com/lit/df/tidr322/tidr322.pdf>
- schematic: <https://www.ti.com/lit/df/tidr278/tidr278.pdf>
- BOM: <https://www.ti.com/lit/df/tidr279a/tidr279a.pdf>

The CC2564B-to-CC2564C migration guide supports a B-to-C hardware migration; it
must not be treated as proof of a CC2560B-to-CC2564C software migration:

- <https://www.ti.com/lit/ug/swru496b/swru496b.pdf>

## Required firmware proof

All of the following evidence is required to pass the gate:

1. Identify a legally distributable host stack with A2DP Sink and AVRCP for
   MSP430F5229, or complete and review the host-porting plan.
2. Convert and embed the CC2564C-specific service-pack BTS file. Do not reuse a
   CC2560B or CC2564B init script.
3. On target hardware, hold `N_SHUTD` low through rail/clock startup, release it,
   download the service pack over four-wire HCI UART and receive a valid HCI
   Command Complete event.
4. Initialize an A2DP Sink, pair with a phone and receive an SBC audio stream.
5. Configure assisted audio routing to the CC2564C PCM output and verify BCLK,
   WCLK and audio data on the board connector or oscilloscope.
6. Configure TAS2505 over I2C and produce clean audio through a 4-ohm load.

If this proof cannot be completed, choose one of these architecture changes
before fabrication:

- use the reference-compatible legacy CC256x(B) + MSP430 software/hardware
  combination, or
- retain CC2564C and move the host to an officially supported MSP432/STM32/Linux
  platform.

## Clock plan

- CC2564C uses the local 32.768-kHz oscillator in
  `BluetoothController_CC2564C`; the optional MSP430 slow-clock divider must not
  drive the same input.
- TAS2505 `MCLK` is intentionally not connected in the top-level prototype.
  Firmware must select `BCLK` as the PLL/codec clock input before enabling the
  audio path. If the selected firmware cannot do this, route a valid MCLK and
  update the circuit before fabrication.

## Electrical gates implemented in hardware

- LM3880 Sequence 1 enables 1.8 V, then 2.8 V, then the radio/audio battery rail
  at 10-ms intervals; shutdown uses the reverse order.
- The master switch drives LM3880 EN through a 47-kΩ/100-nF network. This
  avoids tying EN directly to a slowly rising input when power is attached with
  the switch already ON; OFF actively pulls the network to ground.
- The sequencer-driven TPS22919 provides a real system load disconnect and
  quick output discharge while leaving BQ24074 charging operational.
- BQ24074 uses USB500 mode, a nominal 400-mA fast-charge setting, a nominal
  500-mA programmable ILIM fallback and a 6.25-hour safety timer.
- The MSP-FET connector senses target voltage but cannot power the target VCC
  rail and bypass sequencing.
- TAS2505 and BQ24074 exposed pads include ground-connected thermal-via arrays.
- CC2564C RF series element defaults to the TI reference value of 0 ohms; any
  different matching value requires assembled-board RF measurement.

These circuit changes reduce electrical risk but do not replace oscilloscope,
thermal, RF, DRC, BOM/CPL and physical audio validation.
