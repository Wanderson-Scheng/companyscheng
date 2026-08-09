import { describe, expect, it, vi } from "vitest";

vi.mock("@sentry/react", () => ({
  init: vi.fn(),
  browserTracingIntegration: vi.fn(() => ({})),
  replayIntegration: vi.fn(() => ({})),
  captureException: vi.fn(),
}));

describe("sentry", () => {
  it("does not init without DSN", async () => {
    const { initSentry } = await import("../sentry");
    const Sentry = await import("@sentry/react");
    initSentry();
    expect(Sentry.init).not.toHaveBeenCalled();
  });
});
