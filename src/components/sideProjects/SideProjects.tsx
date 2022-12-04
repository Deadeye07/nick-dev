import React from "react";
import { Tab } from "@headlessui/react";

export default function SideProjects() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Tab.Panel
      className={classNames(
        "rounded-xl bg-white p-3",
        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
      )}
    >
      <ul>
        <li className="relative rounded-md p-3 hover:bg-gray-100">
          <h3 className="text-sm font-medium leading-5">Title 3</h3>

          <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
            Body 3
          </ul>
        </li>
      </ul>
    </Tab.Panel>
  );
}
