export type Pmp11282TraceConnection = {
  from: string;
  to: string;
  schDisplayLabel?: string;
};

/**
 * Electrical trace pairs reconstructed from PMP11064_BlankSheet.SchDoc.
 *
 * The source contains 112 components, 278 visible pins, 219 wire records,
 * and 115 junction records. Pin terminals are joined through the native wire
 * geometry; local pin groups are reduced to deterministic spanning trees while
 * TI sheet ports and power ports retain their displayed net labels.
 *
 * MOSFET selectors are mapped from Altium's G/D/S pin numbering to tscircuit's
 * semantic gate/drain/source selectors.
 */
export const pmp11282TraceConnections: Pmp11282TraceConnection[] = [
  {
    from: "U504.pin3",
    to: "R541.pin2",
  },
  {
    from: "R541.pin2",
    to: "C533.pin1",
  },
  {
    from: "C533.pin1",
    to: "D505.pin2",
  },
  {
    from: "R510.pin1",
    to: "D503.pin1",
  },
  {
    from: "D503.pin1",
    to: "U502.pin12",
  },
  {
    from: "R510.pin2",
    to: "D503.pin2",
  },
  {
    from: "D503.pin2",
    to: "R511.pin1",
  },
  {
    from: "R511.pin1",
    to: "Q503.gate",
  },
  {
    from: "R511.pin2",
    to: "Q503.source",
  },
  {
    from: "Q503.source",
    to: "L500.pin1",
  },
  {
    from: "L500.pin1",
    to: "L500.pin2",
  },
  {
    from: "Q503.source",
    to: "Q504.drain",
  },
  {
    from: "R511.pin2",
    to: "U502.pin11",
  },
  {
    from: "U502.pin11",
    to: "C505.pin2",
  },
  {
    from: "R521.pin2",
    to: "Q504.source",
  },
  {
    from: "Q504.source",
    to: "C519.pin2",
  },
  {
    from: "Q504.source",
    to: "net.GND1",
    schDisplayLabel: "GND1",
  },
  {
    from: "R518.pin1",
    to: "D504.pin1",
  },
  {
    from: "R518.pin1",
    to: "U502.pin6",
  },
  {
    from: "R518.pin2",
    to: "D504.pin2",
  },
  {
    from: "R518.pin2",
    to: "Q504.gate",
  },
  {
    from: "Q504.gate",
    to: "R521.pin1",
  },
  {
    from: "C500.pin1",
    to: "net.V20V1",
    schDisplayLabel: "20V1",
  },
  {
    from: "U504.pin6",
    to: "C532.pin2",
  },
  {
    from: "U504.pin6",
    to: "net.GND1",
    schDisplayLabel: "GND1",
  },
  {
    from: "U504.pin7",
    to: "C532.pin1",
  },
  {
    from: "U504.pin1",
    to: "R542.pin2",
  },
  {
    from: "U504.pin2",
    to: "R531.pin1",
  },
  {
    from: "R531.pin1",
    to: "R543.pin2",
  },
  {
    from: "R543.pin2",
    to: "U507.pin4",
  },
  {
    from: "U504.pin4",
    to: "C527.pin1",
  },
  {
    from: "C527.pin1",
    to: "Q506.source",
  },
  {
    from: "R543.pin1",
    to: "net.GND1",
    schDisplayLabel: "GND1",
  },
  {
    from: "R542.pin1",
    to: "net.GND1",
    schDisplayLabel: "GND1",
  },
  {
    from: "R541.pin1",
    to: "net.GND1",
    schDisplayLabel: "GND1",
  },
  {
    from: "D505.pin3",
    to: "C526.pin1",
  },
  {
    from: "D505.pin1",
    to: "net.GND1",
    schDisplayLabel: "GND1",
  },
  {
    from: "C533.pin2",
    to: "net.GND1",
    schDisplayLabel: "GND1",
  },
  {
    from: "C527.pin2",
    to: "net.GND1",
    schDisplayLabel: "GND1",
  },
  {
    from: "C528.pin2",
    to: "U503.pin3",
  },
  {
    from: "C528.pin2",
    to: "net.GND1",
    schDisplayLabel: "GND1",
  },
  {
    from: "C500.pin2",
    to: "net.GND1",
    schDisplayLabel: "GND1",
  },
  {
    from: "C526.pin2",
    to: "C519.pin1",
  },
  {
    from: "C519.pin1",
    to: "T500.pin1",
  },
  {
    from: "Q503.drain",
    to: "C503.pin1",
  },
  {
    from: "Q506.gate",
    to: "R525.pin2",
  },
  {
    from: "Q506.gate",
    to: "R523.pin1",
  },
  {
    from: "Q506.drain",
    to: "net.GND1",
    schDisplayLabel: "GND1",
  },
  {
    from: "H501.pin1",
    to: "H501.pin2",
  },
  {
    from: "H501.pin2",
    to: "net.GND1",
    schDisplayLabel: "GND1",
  },
  {
    from: "R528.pin1",
    to: "C529.pin2",
  },
  {
    from: "C529.pin2",
    to: "C530.pin2",
  },
  {
    from: "C530.pin2",
    to: "U506.pin1",
  },
  {
    from: "R528.pin1",
    to: "R530.pin2",
  },
  {
    from: "R530.pin2",
    to: "TP503.pin1",
  },
  {
    from: "R530.pin2",
    to: "D506.pin1",
  },
  {
    from: "R530.pin1",
    to: "TP502.pin1",
  },
  {
    from: "TP502.pin1",
    to: "U503.pin2",
  },
  {
    from: "R528.pin2",
    to: "C512.pin1",
  },
  {
    from: "R528.pin2",
    to: "R526.pin2",
  },
  {
    from: "R526.pin2",
    to: "D506.pin2",
  },
  {
    from: "D506.pin2",
    to: "R539.pin1",
  },
  {
    from: "C512.pin1",
    to: "net.V12Vs",
    schDisplayLabel: "12Vs",
  },
  {
    from: "C536.pin1",
    to: "TP506.pin1",
  },
  {
    from: "C536.pin1",
    to: "net.SGND",
    schDisplayLabel: "SGND",
  },
  {
    from: "R545.pin1",
    to: "net.SGND",
    schDisplayLabel: "SGND",
  },
  {
    from: "R539.pin2",
    to: "C536.pin2",
  },
  {
    from: "C536.pin2",
    to: "D506.pin3",
  },
  {
    from: "U503.pin1",
    to: "R526.pin1",
  },
  {
    from: "R534.pin1",
    to: "C530.pin1",
  },
  {
    from: "U506.pin3",
    to: "net.SGND",
    schDisplayLabel: "SGND",
  },
  {
    from: "C529.pin1",
    to: "R534.pin2",
  },
  {
    from: "R534.pin2",
    to: "R540.pin1",
  },
  {
    from: "R540.pin1",
    to: "U506.pin2",
  },
  {
    from: "C528.pin1",
    to: "R531.pin2",
  },
  {
    from: "R531.pin2",
    to: "U503.pin4",
  },
  {
    from: "U507.pin3",
    to: "net.GND1",
    schDisplayLabel: "GND1",
  },
  {
    from: "U507.pin1",
    to: "R547.pin2",
  },
  {
    from: "R547.pin2",
    to: "R546.pin1",
  },
  {
    from: "U507.pin2",
    to: "R547.pin1",
  },
  {
    from: "R547.pin1",
    to: "net.SGND",
    schDisplayLabel: "SGND",
  },
  {
    from: "U502.pin3",
    to: "U502.pin5",
  },
  {
    from: "U502.pin3",
    to: "net.GND1",
    schDisplayLabel: "GND1",
  },
  {
    from: "U502.pin2",
    to: "C515.pin1",
  },
  {
    from: "C515.pin1",
    to: "R527.pin2",
  },
  {
    from: "U502.pin1",
    to: "C514.pin1",
  },
  {
    from: "C514.pin1",
    to: "R524.pin2",
  },
  {
    from: "U502.pin7",
    to: "C509.pin1",
  },
  {
    from: "C509.pin1",
    to: "C508.pin1",
  },
  {
    from: "U502.pin7",
    to: "R507.pin1",
  },
  {
    from: "C514.pin2",
    to: "net.GND1",
    schDisplayLabel: "GND1",
  },
  {
    from: "C515.pin2",
    to: "net.GND1",
    schDisplayLabel: "GND1",
  },
  {
    from: "R507.pin2",
    to: "D502.pin2",
  },
  {
    from: "U502.pin13",
    to: "C505.pin1",
  },
  {
    from: "C505.pin1",
    to: "D502.pin1",
  },
  {
    from: "R513.pin1",
    to: "R514.pin1",
  },
  {
    from: "R514.pin1",
    to: "R517.pin1",
  },
  {
    from: "R517.pin1",
    to: "R520.pin1",
  },
  {
    from: "R514.pin1",
    to: "C518.pin1",
  },
  {
    from: "C518.pin1",
    to: "C517.pin1",
  },
  {
    from: "C517.pin1",
    to: "C510.pin1",
  },
  {
    from: "C510.pin1",
    to: "C511.pin1",
  },
  {
    from: "C510.pin1",
    to: "T500.pin5",
  },
  {
    from: "T500.pin5",
    to: "T500.pin6",
  },
  {
    from: "T500.pin6",
    to: "T500.pin7",
  },
  {
    from: "T500.pin7",
    to: "T500.pin8",
  },
  {
    from: "C504.pin1",
    to: "Q502.source",
  },
  {
    from: "C504.pin1",
    to: "H500.pin1",
  },
  {
    from: "H500.pin1",
    to: "H500.pin2",
  },
  {
    from: "H500.pin2",
    to: "H500.pin3",
  },
  {
    from: "H500.pin3",
    to: "C510.pin2",
  },
  {
    from: "C510.pin2",
    to: "C511.pin2",
  },
  {
    from: "C511.pin2",
    to: "net.SGND",
    schDisplayLabel: "SGND",
  },
  {
    from: "C504.pin2",
    to: "R504.pin1",
  },
  {
    from: "R504.pin2",
    to: "Q502.drain",
  },
  {
    from: "Q502.drain",
    to: "T500.pin3",
  },
  {
    from: "T500.pin3",
    to: "T500.pin4",
  },
  {
    from: "Q502.drain",
    to: "net.VD_SR2",
    schDisplayLabel: "VD_SR2",
  },
  {
    from: "Q502.gate",
    to: "R512.pin1",
  },
  {
    from: "C525.pin2",
    to: "R522.pin1",
  },
  {
    from: "R522.pin2",
    to: "Q505.drain",
  },
  {
    from: "Q505.drain",
    to: "T500.pin10",
  },
  {
    from: "T500.pin10",
    to: "T500.pin9",
  },
  {
    from: "Q505.drain",
    to: "net.VD_SR1",
    schDisplayLabel: "VD_SR1",
  },
  {
    from: "C525.pin1",
    to: "Q505.source",
  },
  {
    from: "Q505.source",
    to: "C517.pin2",
  },
  {
    from: "C517.pin2",
    to: "C518.pin2",
  },
  {
    from: "C518.pin2",
    to: "net.SGND",
    schDisplayLabel: "SGND",
  },
  {
    from: "TP501.pin1",
    to: "J500.pin4",
  },
  {
    from: "J500.pin4",
    to: "J500.pin3",
  },
  {
    from: "J500.pin4",
    to: "C523.pin2",
  },
  {
    from: "C523.pin2",
    to: "C516.pin2",
  },
  {
    from: "C516.pin2",
    to: "C513.pin2",
  },
  {
    from: "C513.pin2",
    to: "net.SGND",
    schDisplayLabel: "SGND",
  },
  {
    from: "TP500.pin1",
    to: "J500.pin1",
  },
  {
    from: "J500.pin1",
    to: "J500.pin2",
  },
  {
    from: "J500.pin2",
    to: "C523.pin1",
  },
  {
    from: "C523.pin1",
    to: "C516.pin1",
  },
  {
    from: "C516.pin1",
    to: "C513.pin1",
  },
  {
    from: "C513.pin1",
    to: "R514.pin2",
  },
  {
    from: "R514.pin2",
    to: "R513.pin2",
  },
  {
    from: "R514.pin2",
    to: "R517.pin2",
  },
  {
    from: "R517.pin2",
    to: "R520.pin2",
  },
  {
    from: "C513.pin1",
    to: "net.V20V2",
    schDisplayLabel: "20V2",
  },
  {
    from: "R545.pin2",
    to: "R540.pin2",
  },
  {
    from: "R540.pin2",
    to: "R535.pin1",
  },
  {
    from: "R535.pin1",
    to: "R515.pin1",
  },
  {
    from: "R515.pin2",
    to: "net.V20V2",
    schDisplayLabel: "20V2",
  },
  {
    from: "U500.pin2",
    to: "R508.pin2",
  },
  {
    from: "U500.pin3",
    to: "R505.pin2",
  },
  {
    from: "U500.pin4",
    to: "C506.pin1",
  },
  {
    from: "U500.pin4",
    to: "net.V5Vs",
    schDisplayLabel: "5Vs",
  },
  {
    from: "U500.pin6",
    to: "C506.pin2",
  },
  {
    from: "U500.pin6",
    to: "R508.pin1",
  },
  {
    from: "R508.pin1",
    to: "R505.pin1",
  },
  {
    from: "R508.pin1",
    to: "net.SGND",
    schDisplayLabel: "SGND",
  },
  {
    from: "R512.pin2",
    to: "net.VG_SR2",
    schDisplayLabel: "VG_SR2",
  },
  {
    from: "R516.pin2",
    to: "net.VG_SR1",
    schDisplayLabel: "VG_SR1",
  },
  {
    from: "U500.pin7",
    to: "C501.pin2",
  },
  {
    from: "C501.pin2",
    to: "R502.pin1",
  },
  {
    from: "U500.pin8",
    to: "C501.pin1",
  },
  {
    from: "C501.pin1",
    to: "R500.pin1",
  },
  {
    from: "Q500.drain",
    to: "R500.pin2",
  },
  {
    from: "R500.pin2",
    to: "D500.pin2",
  },
  {
    from: "Q500.gate",
    to: "D500.pin1",
  },
  {
    from: "D500.pin1",
    to: "net.V5Vs",
    schDisplayLabel: "5Vs",
  },
  {
    from: "R502.pin2",
    to: "net.SGND",
    schDisplayLabel: "SGND",
  },
  {
    from: "U501.pin2",
    to: "R509.pin2",
  },
  {
    from: "U501.pin3",
    to: "R506.pin2",
  },
  {
    from: "U501.pin4",
    to: "C507.pin1",
  },
  {
    from: "U501.pin4",
    to: "net.V5Vs",
    schDisplayLabel: "5Vs",
  },
  {
    from: "U501.pin6",
    to: "C507.pin2",
  },
  {
    from: "U501.pin6",
    to: "R509.pin1",
  },
  {
    from: "R509.pin1",
    to: "R506.pin1",
  },
  {
    from: "R509.pin1",
    to: "net.SGND",
    schDisplayLabel: "SGND",
  },
  {
    from: "U501.pin7",
    to: "C502.pin2",
  },
  {
    from: "C502.pin2",
    to: "R503.pin1",
  },
  {
    from: "U501.pin8",
    to: "C502.pin1",
  },
  {
    from: "C502.pin1",
    to: "R501.pin1",
  },
  {
    from: "Q501.drain",
    to: "R501.pin2",
  },
  {
    from: "R501.pin2",
    to: "D501.pin2",
  },
  {
    from: "Q501.gate",
    to: "D501.pin1",
  },
  {
    from: "D501.pin1",
    to: "net.V5Vs",
    schDisplayLabel: "5Vs",
  },
  {
    from: "R503.pin2",
    to: "net.SGND",
    schDisplayLabel: "SGND",
  },
  {
    from: "D507.pin1",
    to: "net.V20V2",
    schDisplayLabel: "20V2",
  },
  {
    from: "U505.pin2",
    to: "U505.pin1",
  },
  {
    from: "U505.pin2",
    to: "net.SGND",
    schDisplayLabel: "SGND",
  },
  {
    from: "U505.pin3",
    to: "C535.pin1",
  },
  {
    from: "U505.pin6",
    to: "R537.pin2",
  },
  {
    from: "R537.pin2",
    to: "TP505.pin1",
  },
  {
    from: "TP504.pin1",
    to: "R536.pin2",
  },
  {
    from: "R536.pin2",
    to: "R537.pin1",
  },
  {
    from: "C535.pin2",
    to: "net.SGND",
    schDisplayLabel: "SGND",
  },
  {
    from: "U505.pin5",
    to: "C531.pin1",
  },
  {
    from: "C531.pin1",
    to: "R538.pin1",
  },
  {
    from: "U505.pin4",
    to: "C531.pin2",
  },
  {
    from: "C531.pin2",
    to: "R544.pin1",
  },
  {
    from: "R538.pin2",
    to: "net.V20V2",
    schDisplayLabel: "20V2",
  },
  {
    from: "R544.pin2",
    to: "net.V20V1",
    schDisplayLabel: "20V1",
  },
  {
    from: "C534.pin1",
    to: "R536.pin1",
  },
  {
    from: "R536.pin1",
    to: "R535.pin2",
  },
  {
    from: "C534.pin2",
    to: "net.SGND",
    schDisplayLabel: "SGND",
  },
  {
    from: "L500.pin3",
    to: "L500.pin4",
  },
  {
    from: "L500.pin4",
    to: "T500.pin2",
  },
  {
    from: "U504.pin8",
    to: "R527.pin1",
  },
  {
    from: "U504.pin5",
    to: "R524.pin1",
  },
  {
    from: "C512.pin2",
    to: "net.SGND",
    schDisplayLabel: "SGND",
  },
  {
    from: "R525.pin1",
    to: "net.GND1",
    schDisplayLabel: "GND1",
  },
  {
    from: "R546.pin2",
    to: "D507.pin2",
  },
  {
    from: "C509.pin2",
    to: "net.GND1",
    schDisplayLabel: "GND1",
  },
  {
    from: "C508.pin2",
    to: "net.GND1",
    schDisplayLabel: "GND1",
  },
  {
    from: "Q505.gate",
    to: "R516.pin1",
  },
  {
    from: "C503.pin2",
    to: "net.GND1",
    schDisplayLabel: "GND1",
  },
];
