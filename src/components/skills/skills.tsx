import React from "react";
import { Tab } from "@headlessui/react";
import SkillsText from "./skills.json";
export default function Skills() {
  const data = SkillsText;
  return (
    <Tab.Panel className="rounded-xl bg-white dark:bg-slate-700 ">
      <ul>
        <li className="relative rounded-md pt-3 px-3">
          {data.map(({ id, title, items }) => (
            <div className="mb-6" key={id}>
              <div className="text-lg font-bold leading-5 mb-2">{title}</div>
              <div className="border-2 rounded-xl border-purple-500/20 font-bold flex flex-row text-center flex-wrap justify-center">
                {items.map((text) => (
                  <div key={text} className="mx-2 my-2">
                    <div className="bg-slate-200 dark:bg-slate-600 w-fit m-auto rounded-xl p-3">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </li>
      </ul>
    </Tab.Panel>
  );
}
