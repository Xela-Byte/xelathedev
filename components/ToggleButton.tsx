"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`w-fit absolute right-20 top-8 md:top-2 md:right-5 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 z-20 dark:bg-[#212933]`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};

export default ToggleButton;
