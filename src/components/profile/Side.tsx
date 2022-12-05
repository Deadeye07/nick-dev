import React from "react";
import { UserIcon } from "@heroicons/react/20/solid";
import { ReactComponent as GitHub } from "./github.svg";
import './Side.css'
export default function Side() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div
      className={classNames(
        "rounded-xl bg-slate-200 dark:bg-slate-700 p-3",
        "w-full md:w-1/4 h-fit my-6 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
      )}
    >
      <UserIcon></UserIcon>
      <div>
        845-325-5779 <br></br>nhranitz@gmail.com <br></br>Highland, NY<br></br>
        <br></br> Education BA Economics <br></br><span className="text-xs">SUNY New Paltz, 2008 - 2013</span><br></br>
        <br></br> MS Computer Science <br></br> <span className="text-xs">SUNY New Paltz, 2014 - 2016</span>
      </div>
      <a href="https://github.com/Deadeye07" target="_blank"><GitHub className="github-icon"></GitHub></a>
      <a href="https://www.linkedin.com/in/nicholas-hranitz/">LinkedIn</a>
      


    </div>
  );
}
