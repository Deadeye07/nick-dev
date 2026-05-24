import React from "react";

const iconModules = import.meta.glob<{ default: string }>('./*.png', { eager: true });

interface TechItem {
  name: string;
  description: string;
  href: string;
  icon: string;
}

interface Props {
  options: TechItem[];
}

export default function TechStack({ options }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {options.map((item) => (
        <div
          key={item.name}
          className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600/40 rounded-lg px-2.5 py-1.5"
        >
          <img
            src={iconModules[`./${item.icon}.png`]?.default}
            alt={item.icon}
            width={18}
            height={18}
            className="shrink-0 rounded-sm"
          />
          <div className="flex items-baseline gap-1.5">
            <span className="text-xs font-medium text-slate-700 dark:text-slate-200 whitespace-nowrap">
              {item.name}
            </span>
            {item.description && (
              <span className="text-xs text-slate-400 dark:text-slate-400 whitespace-nowrap">
                {item.description}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
