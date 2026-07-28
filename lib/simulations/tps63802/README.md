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
coarser output step. All fixtures therefore use a 5 ns SPICE timestep. Long
plots delay their visible capture window until startup has completed, but
retain the same plotted duration, operating point, and transition timing as
the datasheet.

Figure 10-2 is a three-dimensional operating-point sweep. The RFC deliberately
keeps selection and aggregation outside `<analog.measurement />`, so use
`reduceTPS63802OutputCurrentCapabilityResult` after rendering to convert the
settled-voltage grid into the datasheet's maximum-current envelope:

```ts
const plottedCircuitJson =
  reduceTPS63802OutputCurrentCapabilityResult(circuit.getCircuitJson());
```

The published TI model states that it does not model temperature effects or
quiescent current. Switching behavior, regulation, load/line response, and
heavy-load efficiency can therefore be compared directly. The very-light-load
efficiency curves cannot numerically match bench data because the loss term
that dominates that region is absent from the model.
