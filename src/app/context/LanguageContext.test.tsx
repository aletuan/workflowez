import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import React from "react";
import { LanguageProvider, useLanguage } from "./LanguageContext";

function wrapper({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}

describe("LanguageContext", () => {
  it("useLanguage returns t, language, setLanguage when inside provider", () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });

    expect(result.current).toHaveProperty("t");
    expect(result.current).toHaveProperty("language");
    expect(result.current).toHaveProperty("setLanguage");
    expect(typeof result.current.setLanguage).toBe("function");
    expect(["vi", "en"]).toContain(result.current.language);
    expect(result.current.t).toBeDefined();
    expect(typeof result.current.t).toBe("object");
  });

  it("setLanguage('en') updates t to English translations", () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });

    expect(result.current.language).toBe("vi");
    expect(result.current.t.header.features).toBe("Tính năng");

    act(() => {
      result.current.setLanguage("en");
    });

    expect(result.current.language).toBe("en");
    expect(result.current.t.header.features).toBe("Features");
  });

  it("useLanguage throws when used outside LanguageProvider", () => {
    expect(() => renderHook(() => useLanguage())).toThrow(
      "useLanguage must be used within a LanguageProvider"
    );
  });
});
