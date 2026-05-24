import React from "react";
import { TabPanel, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Employers from "./employers.json";
import TechStack from "../techStack/techStack";

export default function Experience() {
  return (
    <TabPanel className="rounded-xl bg-white dark:bg-slate-700">
      <ul className="flex flex-col gap-6 p-3">
        {Employers.map((employer, employerIndex) => (
          <li key={employer.id} className="relative rounded-md">

            {/* Employer header */}
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg font-bold leading-5">{employer.company}</h3>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-400">
                    {employer.badge}
                  </span>
                  {employer.endDate === "Present" && (
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-green-500/10 text-green-400">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5 font-mono">
                  {employer.role} · {employer.startDate} — {employer.endDate}
                </p>
              </div>
              {employer.engagements.length > 0 && (
                <span className="shrink-0 text-xs text-slate-400 dark:text-slate-500 mt-1">
                  {employer.engagements.length} engagements
                </span>
              )}
            </div>

            {/* Description */}
            <div className="mb-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {employer.description}
            </div>

            {/* Client engagements */}
            {employer.engagements.length > 0 && (
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-medium mb-3">
                  Client engagements
                </p>
                {employer.engagements.map(({ id, title, description, bullets, techStack }, index) => (
                  <div key={id} className="mb-2 mt-4">
                    <Disclosure defaultOpen={employerIndex === 0 && index === 0}>
                      <DisclosureButton className="group flex w-full justify-between rounded-lg bg-gray-100 dark:bg-gray-600 px-4 py-2 text-left text-md font-medium hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>{title}</span>
                        <ChevronUpIcon className="h-5 w-5 text-purple-400 transform group-data-[open]:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="px-4 pt-4 pb-2 text-md">
                        {description}
                        <ul className="list-disc ml-8 mt-2">
                          {bullets.map((text) => (
                            <li key={text} className="mt-1">{text}</li>
                          ))}
                        </ul>
                        {techStack.length > 0 && <TechStack options={techStack} />}
                      </DisclosurePanel>
                    </Disclosure>
                  </div>
                ))}
              </div>
            )}

            {/* Divider between employers */}
            {employerIndex < Employers.length - 1 && (
              <hr className="mt-6 border-slate-200 dark:border-slate-600" />
            )}
          </li>
        ))}
      </ul>
    </TabPanel>
  );
}
