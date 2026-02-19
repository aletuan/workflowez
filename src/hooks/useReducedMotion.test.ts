import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useReducedMotion } from "./useReducedMotion";

describe("useReducedMotion", () => {
  let addEventListener: ReturnType<typeof vi.fn>;
  let removeEventListener: ReturnType<typeof vi.fn>;
  let changeHandler: ((e: MediaQueryListEvent) => void) | null;

  beforeEach(() => {
    addEventListener = vi.fn((event: string, handler: (e: MediaQueryListEvent) => void) => {
      if (event === "change") changeHandler = handler;
    });
    removeEventListener = vi.fn();
    changeHandler = null;
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns false when prefers-reduced-motion is not set", () => {
    vi.stubGlobal("matchMedia", vi.fn().mockReturnValue({
      matches: false,
      addEventListener,
      removeEventListener,
    }));

    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(false);
  });

  it("returns true when prefers-reduced-motion: reduce", () => {
    vi.stubGlobal("matchMedia", vi.fn().mockReturnValue({
      matches: true,
      addEventListener,
      removeEventListener,
    }));

    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(true);
  });

  it("updates when media query change fires", () => {
    const mockMediaQuery = {
      matches: false,
      addEventListener,
      removeEventListener,
    };
    vi.stubGlobal("matchMedia", vi.fn().mockReturnValue(mockMediaQuery));

    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(false);

    act(() => {
      expect(changeHandler).not.toBeNull();
      changeHandler!({ matches: true } as MediaQueryListEvent);
    });
    expect(result.current).toBe(true);

    act(() => {
      changeHandler!({ matches: false } as MediaQueryListEvent);
    });
    expect(result.current).toBe(false);
  });
});
