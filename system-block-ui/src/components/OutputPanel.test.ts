import { describe, expect, test } from "bun:test";
import {
  getNextDownloadMenuIndex,
  isDownloadOptionAvailable,
} from "./OutputPanel";

describe("download menu keyboard navigation", () => {
  test("opens at the first item with ArrowDown and the last with ArrowUp", () => {
    expect(getNextDownloadMenuIndex("ArrowDown", -1, 5)).toBe(0);
    expect(getNextDownloadMenuIndex("ArrowUp", -1, 5)).toBe(4);
  });

  test("wraps in both directions", () => {
    expect(getNextDownloadMenuIndex("ArrowDown", 4, 5)).toBe(0);
    expect(getNextDownloadMenuIndex("ArrowUp", 0, 5)).toBe(4);
  });

  test("supports Home and End", () => {
    expect(getNextDownloadMenuIndex("Home", 2, 5)).toBe(0);
    expect(getNextDownloadMenuIndex("End", 2, 5)).toBe(4);
  });

  test("ignores unsupported keys and empty menus", () => {
    expect(getNextDownloadMenuIndex("Escape", 1, 3)).toBeUndefined();
    expect(getNextDownloadMenuIndex("ArrowDown", -1, 0)).toBeUndefined();
  });
});

describe("download option availability", () => {
  test("keeps every format available before the project is built", () => {
    expect(
      isDownloadOptionAvailable("tscircuit-tsx", {
        isBusy: false,
      }),
    ).toBe(true);
    expect(
      isDownloadOptionAvailable("pdf", {
        isBusy: false,
      }),
    ).toBe(true);
    expect(
      isDownloadOptionAvailable("kicad", {
        isBusy: false,
      }),
    ).toBe(true);
  });

  test("blocks every format while another download is active", () => {
    expect(
      isDownloadOptionAvailable("tscircuit-tsx", {
        isBusy: true,
      }),
    ).toBe(false);
    expect(
      isDownloadOptionAvailable("kicad", {
        isBusy: true,
      }),
    ).toBe(false);
  });
});
