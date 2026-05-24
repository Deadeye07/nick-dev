import React from "react";
import { NewspaperIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/20/solid";
import GithubIcon from "./icons/github.svg";
import LinkedIcon from "./icons/linkedin.svg";
import profilepic from "./profilepic.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import StackChips from "./StackChips";
import ThemeToggle from "../themeToggle/ThemeToggle";

interface Props {
  updateTheme: Function;
  checked: boolean;
}

export default function Side({ updateTheme, checked }: Props) {
  return (
    <div className="rounded-xl bg-slate-200 dark:bg-slate-700 p-4 h-fit mb-4 mr-4 ml-4 flex flex-col gap-4">

      {/* Avatar with availability dot */}
      <div className="flex justify-center md:justify-start">
        <div className="relative inline-block">
          <img
            className="rounded-xl"
            src={profilepic}
            height="200"
            width="200"
            alt="Nick Hranitz profile photo"
          />
        </div>
      </div>

      {/* Name + Title */}
      <div>
        <h1 className="text-xl font-semibold text-slate-800 dark:text-white leading-tight">
          Nick Hranitz
        </h1>
        <p className="text-sm text-purple-500 dark:text-purple-400 font-medium mt-0.5">
          Senior Frontend Engineer
        </p>
      </div>

      {/* Bio */}
      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-l-2 border-slate-400 dark:border-slate-500 pl-3">
        10+ years building scalable web apps across freight, telecom, and logistics. Led teams, managed clients, and shipped across the full dev lifecycle.
      </p>

      {/* Location + Contact */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <MapPinIcon className="h-4 w-4 shrink-0 text-slate-400 dark:text-slate-500" />
          <span>Highland, NY</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <EnvelopeIcon className="h-4 w-4 shrink-0 text-slate-400 dark:text-slate-500" />
          <a
            href="mailto:nhranitz@gmail.com"
            className="text-purple-500 dark:text-purple-400 hover:underline"
          >
            Contact me
          </a>
        </div>
      </div>

      <hr className="border-slate-300 dark:border-slate-600" />

      {/* Tech stack chips */}
      <StackChips />

      <hr className="border-slate-300 dark:border-slate-600" />

      {/* Theme toggle */}
      <ThemeToggle updateTheme={updateTheme} checked={checked} />

      <hr className="border-slate-300 dark:border-slate-600" />

      {/* Social links */}
      <div className="flex justify-between mx-4">
        <a
          id="github"
          data-tooltip-id="github-tip"
          href="https://github.com/Deadeye07"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon className="h-8 w-8 fill-slate-600 dark:fill-white" />
        </a>
        <a
          id="linkedin"
          data-tooltip-id="linkedin-tip"
          href="https://www.linkedin.com/in/nicholas-hranitz/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIcon className="h-8 w-8 fill-slate-600 dark:fill-white" />
        </a>
        <a
          id="resume"
          data-tooltip-id="resume-tip"
          href="https://nick-resume-bucket.s3.amazonaws.com/NickHranitzResume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <NewspaperIcon className="h-8 w-8 fill-slate-600 dark:fill-white" />
        </a>
      </div>
      <Tooltip id="github-tip" content="Github" />
      <Tooltip id="linkedin-tip" content="LinkedIn" />
      <Tooltip id="resume-tip" content="Resume" />

      {/* CTA */}
      <a
        href="mailto:nhranitz@gmail.com"
        className="w-full text-center bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
      >
        Open to opportunities
      </a>

    </div>
  );
}
