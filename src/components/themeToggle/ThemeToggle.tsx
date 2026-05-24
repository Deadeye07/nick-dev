import React from "react";

interface Props {
  updateTheme: Function;
  checked: boolean;
}

export default function ThemeToggle({ updateTheme, checked }: Props) {
  return (
    <button
      onClick={() => updateTheme(!checked)}
      aria-label="Toggle light/dark mode"
      className="w-full flex items-center justify-between px-3 py-3 rounded-xl bg-slate-300/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-300 dark:hover:bg-white/10 transition-colors cursor-pointer"
    >
      <span className="text-[11px] font-medium tracking-widest text-slate-400 dark:text-slate-500 uppercase">
        {checked ? "Dark mode" : "Light mode"}
      </span>

      <div className="relative w-7 h-7">
        {/* Sun */}
        <svg
          className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.25,0.64,1)] ${
            checked
              ? "opacity-0 -rotate-[60deg] scale-50"
              : "opacity-100 rotate-0 scale-100"
          }`}
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="none"
        >
          <circle cx="12" cy="12" r="4.5" fill="#fbbf24" />
          <g stroke="#fbbf24" strokeWidth="2" strokeLinecap="round">
            <line x1="12"   y1="2"     x2="12"   y2="4.5"  />
            <line x1="12"   y1="19.5"  x2="12"   y2="22"   />
            <line x1="2"    y1="12"    x2="4.5"  y2="12"   />
            <line x1="19.5" y1="12"    x2="22"   y2="12"   />
            <line x1="4.93" y1="4.93"  x2="6.76" y2="6.76" />
            <line x1="17.24" y1="17.24" x2="19.07" y2="19.07" />
            <line x1="19.07" y1="4.93"  x2="17.24" y2="6.76" />
            <line x1="6.76"  y1="17.24" x2="4.93"  y2="19.07" />
          </g>
        </svg>

        {/* Moon */}
        <svg
          className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.25,0.64,1)] ${
            checked
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-[60deg] scale-50"
          }`}
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="none"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#c4b5fd" />
        </svg>
      </div>
    </button>
  );
}
