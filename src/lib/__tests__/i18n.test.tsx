import { describe, expect, it } from "vitest";
import { localeMeta, locales } from "../i18n";

describe("i18n", () => {
  it("exports supported locales", () => {
    expect(locales).toEqual(["pt", "en", "es"]);
  });

  it("has metadata for every locale", () => {
    for (const locale of locales) {
      const meta = localeMeta[locale];
      expect(meta).toBeDefined();
      expect(meta.label).toBeTruthy();
      expect(meta.short).toBeTruthy();
      expect(meta.htmlLang).toBeTruthy();
    }
  });

  it("pt is the default locale", () => {
    expect(locales[0]).toBe("pt");
  });
});
