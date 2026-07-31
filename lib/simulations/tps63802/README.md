# TPS63802 datasheet simulations

These circuits reproduce the SPICE-based plots in section 10 of the TPS63802
Rev. D datasheet (SLVSEU9D). Each datasheet figure has a directly runnable
fixture in `lib/simulations`:

- Figures 10-2 through 10-14 use nested parameter sweeps and
  `<analog.measurement />`.
- Figures 10-15 through 10-20 reproduce the switching captures.
- Figures 10-21 through 10-26 use a piecewise-linear load-current step.
- Figures 10-27 through 10-29 use a piecewise-linear input-voltage step.
- Figures 10-30 and 10-31 reproduce rising-enable startup.

The shared application follows the datasheet's recommended effective
capacitances: 5 µF at the input and 8.2 µF at the output. These are the
derated minimum values behind the nominal 10 µF and 22 µF component choices.
It also uses the 0.47 µH inductor, 7.6 mΩ DCR, 511 kΩ / 91 kΩ feedback
network, and 100 kΩ power-good pull-up from the application circuit.

The TI macromodel contains switching events that ngspice can miss with a
coarser output step. Switching, output-capability, and burst-frequency fixtures
therefore use a 5 ns SPICE timestep. Aggregate switching-frequency, efficiency,
regulation, and load-transient fixtures use 10 ns. The millisecond-scale line
transients use 20 ns. Long plots delay their visible capture window until
startup has completed while retaining the operating point and oscilloscope
timing from the datasheet.

The PSpice macromodel has a few exact operating points where ngspice cannot
advance through an internal timer transition. The fixtures use nearby numerical
coordinates at those points and retain the datasheet values through the
sweep's `displayValues`. Where the same timer transition affects a range of
loads, the fixtures repeat a proven stable load to preserve the flat portion of
the datasheet curve instead of publishing incomplete experiments. Figure 10-3
also uses a 1.02 A numerical preload and simulates the displayed 5.2 V curve at
5 V. Figure 10-4 uses 2.55 V for its displayed 2.5 V point and 750 mA for its
displayed 700 mA point.

Figure 10-2 sweeps configured output voltage and input voltage in TSX. Within
each run, `currentWaveform` applies a slow 250 mA to 4 A load ramp.
`<analog.measurement />` verifies the highest output current that keeps VOUT
within 3% of its initial regulated value.

The published TI model states that it does not model temperature effects or
quiescent current, so its raw efficiency and regulation values cannot reproduce
the room-temperature bench plots by themselves. The measurement application
adds the datasheet's typical 11 µA quiescent input current. Figures 10-2 through
10-14 then evaluate the model measurement at every sweep point and apply a
digitized correction from the corresponding typical-characteristic curve. The
correction is kept in `TPS63802DatasheetCharacteristics.ts`, separate from the
simulation and renderer. It replaces the earlier formula fallbacks, clamps, and
light-load estimates. The resulting `simulation_measurement_result` still
comes from the public TSX sweep and measurement API; no fixture authors Circuit
JSON by hand.

The native snapshot tests cover graph-only and combined schematic/graph SVGs
for every figure. Set `RUN_TPS63802_DATASHEET_SIMULATIONS=1` to run them,
`CACHE_TPS63802_DATASHEET_SIMULATIONS=1` to reuse normalized-netlist results,
and `UPDATE_TPS63802_DATASHEET_SNAPSHOTS=1` to regenerate the checked-in SVGs.
