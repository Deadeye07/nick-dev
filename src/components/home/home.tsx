import { TabGroup, TabPanels } from "@headlessui/react";
import React from "react";
import "./home.css";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Side from "../profile/profile";
import TabList from "../tabList/TabList";
import Experience from "../experience/experience";
import Skills from "../skills/skills";
import SideProjects from "../sideProjects/SideProjects";
export default function Home({ enabled, setEnabled }) {
  return (
    <div className="bg-white dark:bg-slate-800 py-4">
        <div className=" dark:text-white max-w-7xl m-auto">
          <div className="flex justify-end mb-2">
              <ThemeToggle
                updateTheme={setEnabled}
                checked={enabled}
              ></ThemeToggle>
          </div>
          <div className="flex flex-col md:flex-row">
            <Side></Side>
            <div className="w-full md:w-3/4 mr-4 px-2">
              <TabGroup>
                <TabList></TabList>
                <TabPanels className="mt-2">
                  <Experience></Experience>
                  <Skills></Skills>
                  <SideProjects></SideProjects>
                </TabPanels>
              </TabGroup>
            </div>
          </div>
        </div>
    </div>
  );
}
