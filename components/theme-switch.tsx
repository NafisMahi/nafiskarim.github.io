"use client";

import { useTheme } from "@/lib/hooks";
import { BsMoon, BsSun } from "react-icons/bs";

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-rule bg-card text-ink shadow-md hover:border-accent hover:text-accent transition-colors"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
}

export default ThemeSwitch;
