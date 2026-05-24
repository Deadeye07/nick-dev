import React from "react";

const groups = [
  {
    label: "Frontend",
    chips: [
      { name: "Angular",       color: "bg-red-500/10 text-red-400" },
      { name: "TypeScript",    color: "bg-blue-500/10 text-blue-400" },
      { name: "JavaScript",    color: "bg-yellow-400/10 text-yellow-500" },
      { name: "Tailwind",      color: "bg-cyan-500/10 text-cyan-400" },
      { name: "PrimeNG",       color: "bg-emerald-500/10 text-emerald-400" },
      { name: "Material",      color: "bg-red-400/10 text-red-300" },
      { name: "Sencha ExtJS",  color: "bg-lime-500/10 text-lime-400" },
    ],
  },
  {
    label: "Backend & Cloud",
    chips: [
      { name: "NestJS",      color: "bg-pink-500/10 text-pink-400" },
      { name: "Express.js",  color: "bg-slate-400/10 text-slate-400" },
      { name: "AWS",         color: "bg-orange-500/10 text-orange-400" },
    ],
  },
  {
    label: "Tooling",
    chips: [
      { name: "Git",    color: "bg-orange-600/10 text-red-400" },
      { name: "Figma",  color: "bg-purple-500/10 text-purple-400" },
      { name: "Postman",  color: "bg-purple-500/10 text-orange-400" },
      { name: "Claude Code",  color: "bg-purple-500/10 text-orange-400" },
    ],
  },
];

export default function StackChips() {
  return (
    <div className="flex flex-col gap-3">
      {groups.map(({ label, chips }) => (
        <div key={label}>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1.5 font-medium">
            {label}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {chips.map(({ name, color }) => (
              <span
                key={name}
                className={`text-[11px] font-medium px-2 py-0.5 rounded-md ${color}`}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
