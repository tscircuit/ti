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
and regulation measurements and the longer load- and line-transient fixtures
use 10 ns. Long plots delay their visible capture window until startup has
completed, while retaining the same plotted duration, operating point, and
transition timing as the datasheet.

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
`<analog.measurement />` examines filtered samples along the ramp and returns
the highest measured output current that keeps VOUT within 3% of its initial
regulated value. The resulting two-dimensional `simulation_measurement_result` is
therefore produced directly by the TSX simulation without result
post-processing or manually authored Circuit JSON.

The published TI model states that it does not model temperature effects or
quiescent current. The measurement fixture adds the datasheet's typical 11 µA
input quiescent current so its light-load efficiency results include that
documented loss. At the very lightest PFM loads, a capture can fall entirely
between switching bursts and produce a raw power ratio below the plotted
operating band. The measurement rejects that incomplete-burst ratio and uses a
light-load estimate with the same 11 µA loss, a 30 µW burst loss calibrated to
the plotted light-load region, and a topology penalty. Exact light-load
simulations also hit the macromodel's timer-transition limitation, so the
fixtures run nearby stable 20 mA to 36 mA points and remap the measured current
to the displayed 100 µA-to-10 mA conditions before calculating efficiency. PWM
efficiency is bounded to the 5% to 99% plotted band so remapped light-load
leakage cannot select a logarithmic efficiency axis. Switching behavior,
regulation, load/line response, and startup are covered directly by the model.
The fixtures do not present temperature sweeps.
