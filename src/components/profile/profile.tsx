import React from "react";
import { UserIcon } from "@heroicons/react/20/solid";
export default function Side() {
  return (
    <div
      className="rounded-xl bg-slate-200 dark:bg-slate-700 p-3">
      <UserIcon></UserIcon>
      <div>
        845-325-5779 <br></br>nhranitz@gmail.com <br></br>Highland, NY<br></br>
        <br></br> Education BA Economics <br></br><span className="text-xs">SUNY New Paltz, 2008 - 2013</span><br></br>
        <br></br> MS Computer Science <br></br> <span className="text-xs">SUNY New Paltz, 2014 - 2016</span>
      </div>
      <a href="https://github.com/Deadeye07" target="_blank" rel="noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/nicholas-hranitz/" target="_blank" rel="noreferrer">LinkedIn</a>
    </div>
  );
}
