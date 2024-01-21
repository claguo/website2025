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
  let isFirstProj = false;
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

  if (prevProject === undefined) {
    isFirstProj = true;
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mt-16">
      {isMobile === true ? (
        <Link to="/">
          <Button
            className={`pl-[1.25rem] pr-[1rem] ${
              isLHovered
                ? "bg-light-green border-light-green px-[3rem]"
                : "border-green px-[3rem]"
            }`}
            text="home"
          />
        </Link>
      ) : isFirstProj === false ? (
        <>
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
                  ? "bg-light-green border-light-green px-[3rem]"
                  : "border-green px-[3rem]"
              }`}
            />
          </Link>
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
                  ? "bg-light-green border-light-green px-[3rem]"
                  : "border-green px-[3rem]"
              }`}
            />
          </Link>
        </>
      ) : (
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
                ? "bg-light-green border-light-green px-[3rem]"
                : "border-green px-[3rem]"
            }`}
          />
        </Link>
      )}
    </div>
  );
}

export default ProjectNavButtons;
