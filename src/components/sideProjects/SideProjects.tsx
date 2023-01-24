import React from "react";
import { Tab } from "@headlessui/react";
import Snapshot from "./snapshot";
import Pokedex from "./pokedex";

export default function SideProjects() {
  return (
    <Tab.Panel className="rounded-xl bg-white dark:bg-slate-700 p-3">
      <div>
        <Snapshot></Snapshot>
      </div>
      <div className="mt-4">
        <Pokedex></Pokedex>
      </div>
    </Tab.Panel>
  );
}
