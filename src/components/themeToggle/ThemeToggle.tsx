import React from "react";
import { Switch } from "@headlessui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";
interface Props {
  updateTheme: any;
  checked: boolean;
}
export default function ThemeToggle({ updateTheme, checked }: Props) {
  return (
    <div>
      <Switch
        checked={checked}
        onChange={(event) => updateTheme(event)}
        className={`${checked ? "bg-gray-500" : "bg-gray-300"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${
            checked ? "translate-x-9 bg-slate-600" : "translate-x-0 bg-white"
          }
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full  shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
          {checked ? (
            <MoonIcon className="fade-in"></MoonIcon>
          ) : (
            <SunIcon className="fade-in text-yellow-500"></SunIcon>
          )}
        </span>
      </Switch>
    </div>
  );
}
