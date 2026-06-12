/**
 * Behavioral ngspice model for the TI TPS7A02 (TPS7A0230, 3.0 V fixed output)
 * ultra-low-Iq LDO.
 *
 * TI's official PSPICE models use Cadence-only/encrypted features that ngspice
 * cannot run, so this is a hand-written first-order behavioral equivalent:
 *  - regulates OUT to 3.0 V when EN is high and VIN is above dropout
 *  - tracks VIN minus dropout (~100 mV) when VIN sags (dropout operation)
 *  - output is 0 V when EN is low
 *  - small output resistance models load regulation
 *
 * It does not model PSRR, noise, transient recovery time or current limit.
 */
export const TPS7A02_SPICE_MODEL = `
* TI TPS7A02 (3.0V fixed) behavioral model - ngspice compatible
.subckt TPS7A02_3V0 IN OUT GND EN
Bpass INT GND V = (V(EN,GND) > 0.5) ? min(3.0, max(V(IN,GND) - 0.1, 0)) : 0
Rout INT OUT 0.2
Rin IN GND 10Meg
Ren EN GND 10Meg
.ends TPS7A02_3V0
`.trim()
