import { useState } from "react";
import { Tab } from "@headlessui/react";
import React from "react";
import "./home.css";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Side from "../profile/Side";
import TabList from "../tabList/TabList";
import Experience from "../experience/Experience";
import Skills from "../skills/Skills";
import SideProjects from "../sideProjects/SideProjects";

export default function Home() {
  const [enabled, setEnabled] = useState(true);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className={`${enabled ? "dark" : ""} h-full`}>
      <div className="bg-white dark:bg-slate-800 dark:text-white h-full">
        <div className=" max-w-7xl m-auto">
        <div className="w-full">
          <div className="ml-auto w-fit mr-6 pt-6">
            <ThemeToggle
              updateTheme={setEnabled}
              checked={enabled}
            ></ThemeToggle>
          </div>
        </div>
        <div className="flex flex-col md:flex-row h-full">
          <Side></Side>
          <div className="w-full md:w-3/4 ml-auto mr-4 px-2 py-6">
            <Tab.Group>
              <TabList></TabList>
              <Tab.Panels className="mt-2">
                <Experience></Experience>
                <Skills></Skills>
                <SideProjects></SideProjects>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  );
}
