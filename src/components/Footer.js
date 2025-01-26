import React from "react";
import { useLocation } from "react-router-dom";

import SplitHover from "./custom/SplitHoverEffects";
import Button from "./buttons/Button";
import ExternalURLButton from "./buttons/ExternalURLButton";
import ProjectCard from "./custom/ProjectCard";

import { useProjectContext } from "../context/ProjectContext";

function Footer(props) {
  const projects = useProjectContext();
  const path = useLocation().pathname;
  const currentProject = useProjectContext().find(
    (project) => project.path === path.slice(1),
  );

  return (
    <footer className="flex flex-col lg:items-center w-screen gap-lg lg:gap-2xl py-md lg:py-3xl">
      <div className="flex justify-center">
        <SplitHover text="✶" styling="color" />
      </div>

      {currentProject && (
        <div className="flex flex-col items-center gap-2xs lg:gap-xs px-xs">
          <span className="font-mono italic">Other projects</span>
          <div className="flex gap-sm overflow-x-scroll w-full snap-x">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                size="sm"
                className={`snap-center ${
                  project.id === currentProject.id ? "hidden" : ""
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-sm items-center">
        <div className="flex flex-col items-center">
          <span>Thank you for visiting!</span>
          <span>Designed and built by me :)</span>
        </div>
        <div className="flex flex-col text-md lg:text-lg font-mono italic items-center">
          <Button
            text="claireguo@gmail.com"
            onClick={() => (window.location = "mailto:claireguo@gmail.com")}
          />
          <ExternalURLButton text="github" url="https://github.com/claguo" />
          <ExternalURLButton
            text="linkedin"
            url="https://www.linkedin.com/in/claguo"
          />
        </div>
      </div>

      {/* 
      <p className="caption" style={{ textAlign: "right", margin: "1rem 0" }}>
        © Claire Guo 2025
      </p> */}
    </footer>
  );
}

export default Footer;
