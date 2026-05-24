import { TabGroup, TabPanels } from "@headlessui/react";
import React from "react";
import "./home.css";
import Side from "../profile/profile";
import TabList from "../tabList/TabList";
import Experience from "../experience/experience";
import SideProjects from "../sideProjects/SideProjects";
export default function Home({ enabled, setEnabled }) {
  return (
    <div className="bg-white dark:bg-slate-800 py-4">
        <div className=" dark:text-white max-w-7xl m-auto">
          <div className="flex flex-col md:flex-row">
            <div className="shrink-0 md:w-64">
              <Side updateTheme={setEnabled} checked={enabled}></Side>
            </div>
            <div className="w-full mr-4 px-2">
              {/* Summary card */}
              <div className="mb-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800/40 px-4 py-3">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  I'm a <span className="font-semibold text-slate-800 dark:text-white">senior frontend engineer</span> with 10+ years of experience. As a long-term consultant at Kogent Systems I embedded across multiple client teams — leading projects in freight logistics, telecom, and order management.
                </p>
              </div>
              <TabGroup>
                <TabList></TabList>
                <TabPanels className="mt-2">
                  <Experience></Experience>
                  <SideProjects></SideProjects>
                </TabPanels>
              </TabGroup>
            </div>
          </div>
        </div>
    </div>
  );
}
