import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "./Button";
import { useLocation } from "react-router-dom";
import { useProjectContext } from "../../context/ProjectContext";

function ProjectNavButtons() {
  const path = useLocation().pathname.slice(1);
  const currentProject = useProjectContext().find(
    (project) => project.path === path,
  );
  const nextProject = useProjectContext().find(
    (project) => project.id === currentProject.id + 1,
  );
  const prevProject = useProjectContext().find(
    (project) => project.id === currentProject.id - 1,
  );
  const [width, setWidth] = useState(window.innerWidth);

  const [isLHovered, setIsLHovered] = useState(false);
  const [isRHovered, setIsRHovered] = useState(false);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <>
      {isMobile === true ? (
        <Link to="/" className="flex flex-col items-center mt-8">
          <Button
            className={`px-[3rem] ${
              isLHovered ? "bg-light-green border-light-green" : "border-green"
            }`}
            text="home"
          />
        </Link>
      ) : (
        <div
          className={`flex flex-col lg:flex-row mt-16 ${
            prevProject === undefined ? "justify-end" : "justify-between"
          }`}
        >
          {prevProject !== undefined ? (
            <Link to={`/${prevProject.path}`}>
              <Button
                onMouseEnter={() => {
                  setIsLHovered(true);
                }}
                onMouseLeave={() => {
                  setIsLHovered(false);
                }}
                text={`< ${prevProject.title}`}
                isHovered={isLHovered}
                className={`pl-[1.25rem] pr-[1rem] ${
                  isLHovered
                    ? "bg-light-green border-light-green"
                    : "border-green"
                }`}
              />
            </Link>
          ) : null}
          {nextProject !== undefined ? (
            <Link to={`/${nextProject.path}`}>
              <Button
                onMouseEnter={() => {
                  setIsRHovered(true);
                }}
                onMouseLeave={() => {
                  setIsRHovered(false);
                }}
                text={`${nextProject.title} >`}
                isHovered={isRHovered}
                className={`pl-[1.25rem] pr-[1rem] ${
                  isRHovered
                    ? "bg-light-green border-light-green"
                    : "border-green"
                }`}
              />
            </Link>
          ) : null}
        </div>
      )}
    </>
  );
}

export default ProjectNavButtons;
