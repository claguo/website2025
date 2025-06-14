import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProjectCard from "../custom/ProjectCard";
import Clicksplosion from "../custom/Clicksplosion";

import { useProjectContext } from "../../context/ProjectContext";

function Footer() {
  const projects = useProjectContext();
  const path = useLocation().pathname;
  const currentProject = useProjectContext().find(
    (project) => project.path === path.slice(1),
  );

  const colors = ["text-blue", "italic text-green", "text-pink"];
  const [color, setColor] = useState("#000");

  const handleClick = () => {
    const random = colors[Math.floor(Math.random() * colors.length)];
    setColor(random);
  };

  return (
    <footer className="flex flex-col items-center gap-xs pt-md pb-lg px-xs lg:px-lg lg:pt-3xl lg:gap-md lg:justify-self-center w-full lg:max-w-[1200px]">
      <Clicksplosion>
        <span
          onClick={handleClick}
          className={`text-lg cursor-pointer ${color}`}
        >
          *
        </span>
      </Clicksplosion>
      {currentProject && <span className="font-mono">Other projects</span>}

      {currentProject && (
        <div className="flex gap-3xs lg:gap-xs overflow-x-scroll w-full snap-x scrollbar-hidden mb-2xl">
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
      )}

      <div className="flex flex-col items-center">
        <span>Thank you for visiting!</span>
        <span>Designed and developed by mee : )</span>
      </div>
      {/* <div className="flex flex-col text-md lg:text-lg font-mono italic items-center">
          <Button
            text="claireguo@gmail.com"
            onClick={() => (window.location = "mailto:claireguo@gmail.com")}
          />
          <ExternalURLButton text="github" url="https://github.com/claguo" />
          <ExternalURLButton
            text="linkedin"
            url="https://www.linkedin.com/in/claguo"
          />
        </div> */}
    </footer>
  );
}

export default Footer;
