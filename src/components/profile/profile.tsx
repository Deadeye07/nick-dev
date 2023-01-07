import React from "react";
import { NewspaperIcon } from "@heroicons/react/20/solid";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as LinkedIcon } from "./icons/linkedin.svg";
import ProfilePic from "../../assets/profilepic.jpeg";

import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'

export default function Side() {
  return (
    <div className="rounded-xl bg-slate-200 dark:bg-slate-700 p-3 h-fit mb-4 mr-4 ml-4">
      <img className="rounded-xl" src={ProfilePic} height='200' width='200' alt="profile-pic"/>
      <div>
        <br></br>nhranitz@gmail.com <br></br>Highland, NY<br></br>
        <br></br> BA Economics <br></br>
        <span className="text-xs">SUNY New Paltz, 2008 - 2013</span>
        <br></br>
        <br></br> MS Computer Science <br></br>{" "}
        <span className="text-xs">SUNY New Paltz, 2014 - 2016</span>
      </div>
      <br></br>
      <div className="flex justify-between mx-4">
        <a id="github" href="https://github.com/Deadeye07" target="_blank" rel="noreferrer">
          <GithubIcon className="h-8 w-8 fill-slate-600 dark:fill-white"></GithubIcon>
        </a>
        <a
          id="linkedin"
          href="https://www.linkedin.com/in/nicholas-hranitz/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIcon className="h-8 w-8 fill-slate-600 dark:fill-white"></LinkedIcon>
        </a>
        <a
          id="resume"
          href="https://nick-resume-bucket.s3.amazonaws.com/2022HranitzResume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <NewspaperIcon className="h-8 w-8 fill-slate-600 dark:fill-white"></NewspaperIcon>
        </a>
      </div>
      <Tooltip anchorId="github" content="Github" />
      <Tooltip anchorId="linkedin" content="LinkedIn" />
      <Tooltip anchorId="resume" content="Resume" />
    </div>
  );
}
