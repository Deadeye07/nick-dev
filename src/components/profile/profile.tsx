import React from "react";
import { UserIcon } from "@heroicons/react/20/solid";
import GitHub from "./icons/github.svg"

export default function Side() {
  return (
    <div
      className="rounded-xl bg-slate-200 dark:bg-slate-700 p-3 h-fit mb-4">
      <UserIcon></UserIcon>
      <div>
         <br></br>nhranitz@gmail.com <br></br>Highland, NY<br></br>
        <br></br> BA Economics <br></br><span className="text-xs">SUNY New Paltz, 2008 - 2013</span><br></br>
        <br></br> MS Computer Science <br></br> <span className="text-xs">SUNY New Paltz, 2014 - 2016</span>
      </div><br></br>
      <a href="https://github.com/Deadeye07" target="_blank" rel="noreferrer"><GitHub></GitHub></a><br></br>
      <a href="https://www.linkedin.com/in/nicholas-hranitz/" target="_blank" rel="noreferrer">LinkedIn</a><br></br>
      <a href="https://nick-resume-bucket.s3.amazonaws.com/2022HranitzResume.pdf" target="_blank" rel="noreferrer">Resume</a>

    </div>
  );
}
