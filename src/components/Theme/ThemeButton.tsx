"use client";

import React from "react";
import { useTheme } from "./ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-hidden
      className="fixed bottom-10 right-10 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.05] active:scale-105 transition-all ease-in-out duration-200 dark:bg-gray-950 dark:text-white z-50"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
