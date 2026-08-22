import assert from "node:assert/strict";
import { describe, test } from "node:test";

import {
  fetchTiDocumentViewerPinout,
  findTiPackagePinMapSectionUrl,
  findTiPinConfigurationSectionUrl,
  findTiPinConfigurationSectionUrls,
  parseTiPinFunctionsSection,
  renderTiPinMetadataSource,
  sanitizeTiPinLabel,
  toTscircuitPinMetadata,
} from "./ti-document-viewer-pinout.ts";

const rootFixture = `
  <html><body>
    <a data-navtitle="Features" href="/irrelevant">Features</a>
    <a
      data-navtitle="Pin Configuration and Functions"
      href="//www.ti.com/document-viewer/TEST123/datasheet/GUID-PINS#TITLE-PINS"
    >5 Pin Configuration and Functions</a>
  </body></html>
`;

const legacyRowspanFixture = `
  <div class="pinoutdrawing">
    <div class="pinoutdesc">YZP Package</div>
    <div class="pincountdesc">8-Pin DSBGA</div>
  </div>
  <table class="termfunctions">
    <thead>
      <tr><th colspan="2">PIN</th><th rowspan="2">TYPE</th><th rowspan="2">DESCRIPTION</th></tr>
      <tr><th>NAME</th><th>NO.</th></tr>
    </thead>
    <tbody>
      <tr><td>GND</td><td>D1</td><td>GND</td><td>Ground</td></tr>
      <tr><td>ON</td><td>D2</td><td>I</td><td>Switch control input</td></tr>
      <tr><td rowspan="3">V<sub>IN</sub></td><td>A2</td><td rowspan="3">I</td><td rowspan="3">Switch input</td></tr>
      <tr><td>B2</td></tr>
      <tr><td>C2</td></tr>
      <tr><td rowspan="3">V<sub>OUT</sub></td><td>A1</td><td rowspan="3">O</td><td rowspan="3">Switch output</td></tr>
      <tr><td>B1</td></tr>
      <tr><td>C1</td></tr>
    </tbody>
  </table>
`;

const packageColumnsFixture = `
  <span class="pinoutdesc">D and P Package</span>
  <span class="pincountdesc">8-Pin SOIC and PDIP</span>
  <span class="table-label">Table 4-1 Pin Functions</span>
  <table class="table">
    <thead>
      <tr><th colspan="3">PIN</th><th rowspan="2">I/O</th><th rowspan="2">DESCRIPTION</th></tr>
      <tr><th>NAME</th><th>SOIC</th><th>PDIP</th></tr>
    </thead>
    <tbody>
      <tr><td>IN1−</td><td>2</td><td>3</td><td>I</td><td>Negative input</td></tr>
      <tr><td>OUT</td><td>1</td><td>1</td><td>O</td><td>Output</td></tr>
      <tr><td>NC</td><td>—</td><td>2, 4–5</td><td>—</td><td>No internal connection</td></tr>
    </tbody>
  </table>
`;

const duplicateNameColumnsFixture = `
  <table class="termfunctions">
    <thead>
      <tr><th colspan="3">PIN</th><th rowspan="2">TYPE</th><th rowspan="2">DESCRIPTION</th></tr>
      <tr><th colspan="2">NAME</th><th>NO.</th></tr>
    </thead>
    <tbody>
      <tr><td colspan="2">VIN</td><td>A2</td><td>Power</td><td>Input supply</td></tr>
      <tr><td colspan="2">GND</td><td>B2</td><td>Ground</td><td>Ground</td></tr>
    </tbody>
  </table>
`;

const blankDescriptionHeaderFixture = `
  <table class="table">
    <thead>
      <tr><th colspan="3">PIN</th><th rowspan="2">TYPE</th><th rowspan="2"></th></tr>
      <tr><th>NAME</th><th>DGS</th><th>RHB</th></tr>
    </thead>
    <tbody>
      <tr><td>VCC</td><td>1</td><td>2</td><td>Power</td><td>Supply input</td></tr>
      <tr><td>GND</td><td>8</td><td>16</td><td>Ground</td><td>Ground</td></tr>
    </tbody>
  </table>
`;

const deviceColumnsFixture = `
  <table class="termfunctions">
    <thead>
      <tr><th colspan="3">PIN</th><th rowspan="2">TYPE</th><th rowspan="2">DESCRIPTION</th></tr>
      <tr>
        <th>NAME</th>
        <th>ISO6440-Q1, ISO6440F-Q1</th>
        <th>ISO6441-Q1, ISO6441F-Q1</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>OUTA</td><td>3</td><td>4</td><td>O</td><td>Channel output</td></tr>
      <tr><td>GND</td><td>8</td><td>8</td><td>Ground</td><td>Ground</td></tr>
    </tbody>
  </table>
`;

const packageSpecificTablesFixture = `
  <p>Table 6-1 Connector Pins for FQE</p>
  <table class="table">
    <thead><tr><th>NAME</th><th>PIN NO.</th><th>TYPE</th><th>DESCRIPTION</th></tr></thead>
    <tbody><tr><td>FQE_ONLY</td><td>A1</td><td>I</td><td>FQE input</td></tr></tbody>
  </table>
  <p>Table 6-2 Connector Pins for FQD</p>
  <table class="table">
    <thead><tr><th>NAME</th><th>PIN NO.</th><th>TYPE</th><th>DESCRIPTION</th></tr></thead>
    <tbody><tr><td>FQD_ONLY</td><td>B2</td><td>O</td><td>FQD output</td></tr></tbody>
  </table>
  <p>Table 6-3 Test Pads for FQD Package</p>
  <table class="table">
    <thead><tr><th>NAME</th><th>PIN</th><th>DESCRIPTION</th></tr></thead>
    <tbody><tr><td>FQD_TEST</td><td>C3</td><td>FQD test pad</td></tr></tbody>
  </table>
`;

const noTypeFixture = `
  <table class="table">
    <thead>
      <tr><th colspan="2">PIN</th><th rowspan="2">DESCRIPTION</th></tr>
      <tr><th>NAME</th><th>YZP</th></tr>
    </thead>
    <tbody><tr><td>Y</td><td>A1</td><td>Logic output</td></tr></tbody>
  </table>
`;

const blankThermalPadNameFixture = `
  <table class="termfunctions">
    <thead>
      <tr><th colspan="2">PIN</th><th rowspan="2">TYPE</th><th rowspan="2">DESCRIPTION</th></tr>
      <tr><th>NAME</th><th>NO.</th></tr>
    </thead>
    <tbody>
      <tr><td>VDD</td><td>1</td><td>P</td><td>Supply</td></tr>
      <tr><td></td><td>Thermal Pad</td><td>—</td><td>Connect to GND through a large copper plane.</td></tr>
    </tbody>
  </table>
`;

const packagePinMapRootFixture = `
  <a
    data-navtitle="ZCE Package Pin Maps (Top View)"
    href="//www.ti.com/document-viewer/AM3352/datasheet/zce-package-pin-maps"
  >ZCE Package Pin Maps (Top View)</a>
  <a
    data-navtitle="ZCZ Package Pin Maps (Top View)"
    href="//www.ti.com/document-viewer/AM3352/datasheet/zcz-package-pin-maps#zcz"
  >ZCZ Package Pin Maps (Top View)</a>
  <a
    data-navtitle="ZCZ Pin Map [Section Left - Top View]"
    href="//www.ti.com/document-viewer/AM3352/datasheet/zcz-package-pin-maps#left"
  >ZCZ Pin Map [Section Left - Top View]</a>
`;

const packagePinMapFixture = `
  <table class="termfunctions"><tbody><tr>
    <td><a id="pm_15x15_A18"></a><span class="crossreference"><a href="pin-attributes.html#bc_VSS">VSS</a></span></td>
    <td><a id="pm_15x15_A17"></a><span class="crossreference"><a href="pin-attributes.html#bc_GPMC_AD0">GPMC_AD0</a></span></td>
  </tr></tbody></table>
  <table class="termfunctions"><tbody><tr>
    <td><a id="pm_15x15_N1"></a><span class="crossreference"><a href="pin-attributes.html#bc_DDR_D2">DDR_D2</a></span></td>
  </tr></tbody></table>
  <table class="termfunctions"><tbody><tr>
    <td><a id="pm_15x15_V1"></a><span class="crossreference"><a href="pin-attributes.html#bc_VSS">VSS</a></span></td>
  </tr></tbody></table>
`;

describe("TI document-viewer pinout parser", () => {
  test("locates the official Pin Configuration and Functions section", () => {
    assert.equal(
      findTiPinConfigurationSectionUrl(
        rootFixture,
        "https://www.ti.com/document-viewer/TEST123/datasheet",
      ),
      "https://www.ti.com/document-viewer/TEST123/datasheet/GUID-PINS",
    );
  });

  test("recognizes plural, terminal, and direct Pin Functions TOC titles", () => {
    const root = `
      <a data-navtitle="Pin Configurations and Functions" href="plural.html">plural</a>
      <a data-navtitle="Terminal Configuration and Functions" href="terminal.html">terminal</a>
      <a data-navtitle="Pin Functions" href="functions.html">functions</a>
    `;
    assert.deepEqual(
      findTiPinConfigurationSectionUrls(
        root,
        "https://www.ti.com/document-viewer/TEST123/datasheet",
      ),
      [
        "https://www.ti.com/document-viewer/TEST123/plural.html",
        "https://www.ti.com/document-viewer/TEST123/terminal.html",
        "https://www.ti.com/document-viewer/TEST123/functions.html",
      ],
    );
  });

  test("locates the selected package-code pin-map leaf", () => {
    assert.equal(
      findTiPackagePinMapSectionUrl(
        packagePinMapRootFixture,
        "https://www.ti.com/document-viewer/AM3352/datasheet",
        "zcz",
      ),
      "https://www.ti.com/document-viewer/AM3352/datasheet/zcz-package-pin-maps",
    );
  });

  test("expands rowspans and keeps alphanumeric BGA balls", () => {
    const result = parseTiPinFunctionsSection(legacyRowspanFixture, "YZP");
    assert.equal(result.status, "ok");
    if (result.status !== "ok") return;
    assert.equal(result.table.tableClass, "termfunctions");
    assert.equal(result.table.pins.length, 8);
    assert.deepEqual(result.table.pins[2], {
      number: "A2",
      name: "VIN",
      type: "I",
      description: "Switch input",
    });
    assert.deepEqual(result.table.pins[4], {
      number: "C2",
      name: "VIN",
      type: "I",
      description: "Switch input",
    });
  });

  test("selects a package-specific column and expands pin lists/ranges", () => {
    const result = parseTiPinFunctionsSection(packageColumnsFixture, "P");
    assert.equal(result.status, "ok");
    if (result.status !== "ok") return;
    assert.match(result.table.packageColumn, /PDIP/);
    assert.deepEqual(
      result.table.pins.map(({ number, name }) => [number, name]),
      [
        ["3", "IN1−"],
        ["1", "OUT"],
        ["2", "NC"],
        ["4", "NC"],
        ["5", "NC"],
      ],
    );
  });

  test("uses the expected pin count when TI labels columns by package type", () => {
    const result = parseTiPinFunctionsSection(
      packageColumnsFixture,
      "UNKNOWN",
      undefined,
      { expectedPinCount: 5 },
    );
    assert.equal(result.status, "ok");
    if (result.status !== "ok") return;
    assert.match(result.table.packageColumn, /PDIP/);
    assert.equal(result.table.pins.length, 5);
  });

  test("prefers an explicit package code over a misleading count match", () => {
    const result = parseTiPinFunctionsSection(
      `<table><thead>
        <tr><th colspan="3">PIN</th><th rowspan="2">TYPE</th><th rowspan="2">DESCRIPTION</th></tr>
        <tr><th>NAME</th><th>RGE</th><th>YQW</th></tr>
      </thead><tbody>
        <tr><td>IO</td><td>1</td><td>A1</td><td>I/O</td><td>Signal</td></tr>
        <tr><td>PAD</td><td>2</td><td>—</td><td>Ground</td><td>Pad</td></tr>
      </tbody></table>`,
      "RGE",
      undefined,
      { expectedPinCount: 1 },
    );
    assert.equal(result.status, "ok");
    if (result.status !== "ok") return;
    assert.match(result.table.packageColumn, /RGE/);
    assert.deepEqual(
      result.table.pins.map((pin) => pin.number),
      ["1", "2"],
    );
  });

  test("excludes every duplicated NAME column created by colspan", () => {
    const result = parseTiPinFunctionsSection(
      duplicateNameColumnsFixture,
      "YBG",
    );
    assert.equal(result.status, "ok");
    if (result.status !== "ok") return;
    assert.deepEqual(
      result.table.pins.map(({ number, name }) => [number, name]),
      [
        ["A2", "VIN"],
        ["B2", "GND"],
      ],
    );
  });

  test("uses a blank final header as TI's description column", () => {
    const result = parseTiPinFunctionsSection(
      blankDescriptionHeaderFixture,
      "DGS",
      "TXE8124",
    );
    assert.equal(result.status, "ok");
    if (result.status !== "ok") return;
    assert.match(result.table.packageColumn, /DGS/);
    assert.equal(result.table.pins[0].description, "Supply input");
  });

  test("selects device-specific columns when TI omits package codes", () => {
    const result = parseTiPinFunctionsSection(
      deviceColumnsFixture,
      "DBQ",
      "ISO6440-Q1",
    );
    assert.equal(result.status, "ok");
    if (result.status !== "ok") return;
    assert.match(result.table.packageColumn, /ISO6440-Q1/);
    assert.equal(result.table.pins[0].number, "3");
  });

  test("uses nearby package captions to choose among multiple tables", () => {
    const result = parseTiPinFunctionsSection(
      packageSpecificTablesFixture,
      "FQD",
      "DLP4500",
    );
    assert.equal(result.status, "ok");
    if (result.status !== "ok") return;
    assert.deepEqual(result.table.pins[0], {
      number: "B2",
      name: "FQD_ONLY",
      type: "O",
      description: "FQD output",
    });
    assert.deepEqual(result.table.pins[1], {
      number: "C3",
      name: "FQD_TEST",
      type: "",
      description: "FQD test pad",
    });
    assert.match(result.table.warnings[0], /Combined 2/);
  });

  test("keeps useful pin tables that omit an electrical type column", () => {
    const result = parseTiPinFunctionsSection(noTypeFixture, "YZP");
    assert.equal(result.status, "ok");
    if (result.status !== "ok") return;
    assert.equal(result.table.pins[0].type, "");
    assert.match(result.table.warnings[0], /no electrical pin-type column/);
  });

  test("normalizes a blank exposed-pad name without changing physical identity", () => {
    const result = parseTiPinFunctionsSection(
      blankThermalPadNameFixture,
      "DGN",
    );
    assert.equal(result.status, "ok");
    if (result.status !== "ok") return;
    assert.deepEqual(result.table.pins[1], {
      number: "Thermal Pad",
      name: "THERMAL_PAD",
      type: "—",
      description: "Connect to GND through a large copper plane.",
    });
  });

  test("combines TI BGA package-pin-map grids using pm_*_<ball> anchors", () => {
    const result = parseTiPinFunctionsSection(packagePinMapFixture, "ZCZ");
    assert.equal(result.status, "ok");
    if (result.status !== "ok") return;
    assert.deepEqual(
      result.table.pins.map(({ number, name, type }) => [number, name, type]),
      [
        ["A18", "VSS", ""],
        ["A17", "GPMC_AD0", ""],
        ["N1", "DDR_D2", ""],
        ["V1", "VSS", ""],
      ],
    );
    assert.deepEqual(result.table.warnings, [
      "TI's package pin-map grid provides ball/function data but not electrical pin type or description.",
    ]);
  });

  test("reports a missing HTML pin table without throwing", () => {
    assert.deepEqual(
      parseTiPinFunctionsSection(
        "<h1>Pin Configuration and Functions</h1><img src='pins.gif'>",
        "RGE",
      ),
      {
        status: "unavailable",
        reason: "pin-table-not-found",
        message:
          "TI's Pin Configuration and Functions section has no parseable HTML pin-function table.",
      },
    );
  });

  test("fetches only the TI root and located section", async () => {
    const requests: string[] = [];
    const fakeFetch = async (input: string | URL) => {
      const url = String(input);
      requests.push(url);
      if (url.endsWith("/datasheet")) return new Response(rootFixture);
      if (url.endsWith("/GUID-PINS")) return new Response(legacyRowspanFixture);
      return new Response("not found", { status: 404 });
    };
    const result = await fetchTiDocumentViewerPinout("test123", "yzp", {
      fetch: fakeFetch,
    });
    assert.equal(result.status, "ok");
    assert.deepEqual(requests, [
      "https://www.ti.com/document-viewer/TEST123/datasheet",
      "https://www.ti.com/document-viewer/TEST123/datasheet/GUID-PINS",
    ]);
  });

  test("follows and device-sorts nested Pin Functions leaves", async () => {
    const requests: string[] = [];
    const nestedRoot = `
      <a data-navtitle="Terminal Configuration and Functions" href="/document-viewer/TLV3212/datasheet/wrapper">wrapper</a>
    `;
    const nestedWrapper = `
      <a data-navtitle="Pin Configurations: TLV3211" data-chaptertitle="Pin Configuration and Functions" href="/document-viewer/TLV3212/datasheet/wrong">wrong</a>
      <a data-navtitle="Pin Configurations: TLV3212" data-chaptertitle="Pin Configuration and Functions" href="/document-viewer/TLV3212/datasheet/correct">correct</a>
    `;
    const fakeFetch = async (input: string | URL) => {
      const url = String(input);
      requests.push(url);
      if (url.endsWith("/datasheet")) return new Response(nestedRoot);
      if (url.endsWith("/wrapper")) return new Response(nestedWrapper);
      if (url.endsWith("/correct")) return new Response(packageColumnsFixture);
      return new Response("not found", { status: 404 });
    };
    const result = await fetchTiDocumentViewerPinout("TLV3212", "P", {
      fetch: fakeFetch,
    });
    assert.equal(result.status, "ok");
    assert.deepEqual(requests, [
      "https://www.ti.com/document-viewer/TLV3212/datasheet",
      "https://www.ti.com/document-viewer/TLV3212/datasheet/wrapper",
      "https://www.ti.com/document-viewer/TLV3212/datasheet/correct",
    ]);
  });

  test("classifies a transient root response as retryable HTTP failure", async () => {
    const result = await fetchTiDocumentViewerPinout("test123", "D", {
      fetch: async () => new Response("busy", { status: 503 }),
    });
    assert.equal(result.status, "unavailable");
    if (result.status !== "unavailable") return;
    assert.equal(result.reason, "http-error");
  });

  test("fetches the package-code leaf when TI uses BGA pin-map grids", async () => {
    const requests: string[] = [];
    const fakeFetch = async (input: string | URL) => {
      const url = String(input);
      requests.push(url);
      if (url.endsWith("/datasheet"))
        return new Response(packagePinMapRootFixture);
      if (url.endsWith("/zcz-package-pin-maps")) {
        return new Response(packagePinMapFixture);
      }
      return new Response("not found", { status: 404 });
    };
    const result = await fetchTiDocumentViewerPinout("am3352", "zcz", {
      fetch: fakeFetch,
    });
    assert.equal(result.status, "ok");
    if (result.status !== "ok") return;
    assert.equal(result.table.pins.length, 4);
    assert.deepEqual(requests, [
      "https://www.ti.com/document-viewer/AM3352/datasheet",
      "https://www.ti.com/document-viewer/AM3352/datasheet/zcz-package-pin-maps",
    ]);
  });

  test("normalizes pins for the shared schematic-layout helper", () => {
    const result = parseTiPinFunctionsSection(legacyRowspanFixture, "YZP");
    assert.equal(result.status, "ok");
    if (result.status !== "ok") return;
    const metadata = toTscircuitPinMetadata(result.table.pins);
    assert.deepEqual(metadata.physicalPinToKey, {
      A1: "pin1",
      A2: "pin2",
      B1: "pin3",
      B2: "pin4",
      C1: "pin5",
      C2: "pin6",
      D1: "pin7",
      D2: "pin8",
    });
    assert.deepEqual(metadata.pinLabels.pin1, ["VOUT", "A1"]);
    assert.equal(metadata.pinRoles.pin7, "ground");
    assert.equal(metadata.pinRoles.pin8, "input");

    const numericMetadata = toTscircuitPinMetadata([
      { number: "1", name: "OUT", type: "O", description: "Output" },
      { number: "2", name: "GND", type: "GND", description: "Ground" },
    ]);
    assert.deepEqual(numericMetadata.physicalPinToKey, {
      "1": "pin1",
      "2": "pin2",
    });
    assert.equal(
      toTscircuitPinMetadata([
        {
          number: "8",
          name: "V+",
          type: "I",
          description: "Positive (high) supply",
        },
      ]).pinRoles.pin8,
      "power",
    );
    assert.match(
      renderTiPinMetadataSource(result.table.pins),
      /getTiSchematicLayout\(pinLabels, \{ pinRoles \}\)/,
    );
    assert.equal(sanitizeTiPinLabel("IN1−", "PIN"), "IN1_N");
    assert.equal(sanitizeTiPinLabel("V+", "PIN"), "V_P");
  });
});
