import React from "react";
import { TabPanel, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import ExperienceText from "./experience.json";
import KogentText from "./kogentDescription.json";
import TechStack from "../techStack/techStack";
export default function Experience() {
  const data = ExperienceText;

  return (
    <TabPanel className="rounded-xl bg-white dark:bg-slate-700">
      <ul>
        <li className="relative rounded-md p-3">
          <h3 className="mb-4 text-lg font-bold leading-5">
            Senior Engineer, Kogent Systems — 2015 - Mar. 2023
          </h3>
          <div>
            <div className="mb-8">{KogentText.text}</div>
            {data.map(({ id, title, description, bullets, techStack }, index) => (
              <div key={id} className="mb-2 mt-4">
                <Disclosure defaultOpen={index === 0}>
                  <DisclosureButton className="group flex w-full justify-between rounded-lg bg-gray-100 dark:bg-gray-600 px-4 py-2 text-left text-md font-medium hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>{title}</span>
                    <ChevronUpIcon
                      className="h-5 w-5 text-purple-400 transform group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-md ">
                    {description}
                    <ul className="list-disc ml-8 mt-2">
                      {bullets.map((text) => (
                        <li key={text} className="mt-1">
                          {text}
                        </li>
                      ))}
                    </ul>
                    {techStack.length > 0 && <TechStack options={techStack} ></TechStack>}
                  </DisclosurePanel>
                </Disclosure>
              </div>
            ))}
          </div>
        </li>
      </ul>
    </TabPanel>
  );
}
