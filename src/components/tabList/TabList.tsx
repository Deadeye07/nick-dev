import { Tab } from "@headlessui/react";
import React from "react";
export default function TabList() {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Tab.List className="flex space-x-1 rounded-xl bg-purple-500/20 p-1">
      <Tab
        className={({ selected }) =>
          classNames(
            "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-purple-700",
            "ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-400 focus:outline-none focus:ring-2",
            selected
              ? "bg-white shadow"
              : "dark:text-purple-100 text-purple-400  hover:bg-white/[0.12]"
          )
        }
      >
        Experience
      </Tab>
      <Tab
        className={({ selected }) =>
          classNames(
            "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-purple-700",
            "ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-400 focus:outline-none focus:ring-2",
            selected
              ? "bg-white shadow"
              : "dark:text-purple-100 text-purple-400 hover:bg-white/[0.12]"
          )
        }
      >
        Skills
      </Tab>
      <Tab
        className={({ selected }) =>
          classNames(
            "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-purple-700",
            "ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-400 focus:outline-none focus:ring-2",
            selected
              ? "bg-white shadow"
              : "dark:text-purple-100 text-purple-400 hover:bg-white/[0.12]"
          )
        }
      >
        Side Projects
      </Tab>
    </Tab.List>
  );
}
