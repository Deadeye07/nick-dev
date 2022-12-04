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
        "w-1/4 h-fit my-6 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
      )}
    >
      <UserIcon className=""></UserIcon>
      <div>
        845-325-5779 <br></br>nhranitz@gmail.com <br></br>Highland, NY
        <br></br> Education BA Economics SUNY New Paltz, 2008 - 2013
        <br></br> MS Computer Science SUNY New Paltz, 2014 - 2016
      </div>
      D<GitHub className="github-icon"></GitHub>
    </div>
  );
}
