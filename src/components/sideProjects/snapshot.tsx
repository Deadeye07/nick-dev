import React from "react"
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Snapshot() {
    return (
        <Disclosure defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 dark:bg-gray-600 px-4 py-2 text-left text-md font-medium  hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Snapshot.org Progress Plugin</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-400`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md ">
                <div>
                  Conceived, designed, and developed add-on for the snapshot.org
                  web app that solved the issue of lack of information available
                  to DAO members after voting on proposals was completed.
                </div>
                <div className="">
                  <ul className="list-disc w-3/4 ml-8 mt-4 mb-4">
                    <li>
                      Designed and implemented responsive UI that blended with
                      existing application.
                    </li>
                    <li>
                      Utilized Web3 Ethereum Wallet Signature for HTTP Request
                      authentication within AWS HTTP Gateway Authorizer Lambda.
                    </li>
                  </ul>
                  <iframe
                    className="md:h-[570px]"
                    width="100%"
                    height="300"
                    src="https://www.youtube.com/embed/LNSURqggNGQ"
                    title="Snapshot.org Progress Plugin Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    )
    
}