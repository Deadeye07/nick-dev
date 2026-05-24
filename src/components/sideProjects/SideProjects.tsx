import React from "react";
import { TabPanel } from "@headlessui/react";
import Snapshot from "./snapshot";

export default function SideProjects() {
  return (
    <TabPanel className="rounded-xl bg-white dark:bg-slate-700 p-3">
      <div>
        <Snapshot></Snapshot>
      </div>
    </TabPanel>
  );
}
