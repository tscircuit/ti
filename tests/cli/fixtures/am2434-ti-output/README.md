# AM2434 TI output fixtures

The A7 and B7 header and pinmux files are outputs of TI SysConfig
1.14.0+2667 with MCU+ SDK `MCU_PLUS_SDK@07.03.01`. They were generated on
2026-09-29 from the merged `circuit-json-to-sysconfig` converter's A7/B7
validation cases and retained in the local real-TI validation run. Only trailing
whitespace was removed for this repository. The CLI tests
check both real outputs, then change pin, direction, mode, and reservation data
to confirm the checker rejects an incorrect result.
