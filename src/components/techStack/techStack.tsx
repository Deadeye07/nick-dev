import { Popover, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import React from "react";

const solutions = [
  {
    name: "Angular 8-14",
    description: "+ NGRX, TailwindCSS, Material, Prettier",
    href: "##",
    icon:'angular'
  },
  {
    name: "ExpressJs",
    description: "+ Socket.io",
    href: "##",
    icon: 'express',
  },
  {
    name: "NestJs",
    description: "",
    href: "##",
    icon: 'nest',
  },
  {
    name: "MongoDB",
    description: "",
    href: "##",
    icon: 'mongo',
  }
];

export default function TechStack() {
  return (
    <div className="w-full px-4 mt-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md bg-purple-700 dark:bg-purple-800 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>Tech Stack</span>
              <ChevronUpIcon
                className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-white transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -top-[380px] left-[140px] z-10 mt-3 w-80  -translate-x-1/2 transform px-4">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white dark:bg-slate-600 p-7">
                    {solutions.map((item) => (
                      <div
                        key={item.name}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <img height='60' width='60' alt={ item.icon} src={require(`./${item.icon}.png`)}></img>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white">
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-white">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
