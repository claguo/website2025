import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";

function ProjectCard({ project, size, className }) {
  const [isHovered, setIsHovered] = useState(false);
  const src = `./imgs/${project.project}-cover.png`;

  return (
    <>
      <Link
        to={project.protected ? "/login" : `/${project.path}`}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className={`flex flex-col-reverse gap-sm lg:items-center lg:flex-row lg:gap-md lg:flex-1 ${className}`}
      >
        {size === "sm" ? (
          <div
            className={`flex flex-col items-end gap-3xs lg:gap-2xs w-[216px] ${
              isHovered ? "text-pink" : ""
            }`}
          >
            <img
              src={src}
              alt={project.alt}
              className="w-full object-contain p-3xs lg:px-sm py-3xs lg:py-sm bg-bg-white lg:bg-bg-gray border-[1px] border-border-default rounded-[8px]"
            />
            <span className="font-mono italic w-full h-[3em]">
              {project.title}
            </span>
            <IoMdArrowForward className="text-[20px]" />
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-3xs items-end">
              <h3
                className={`w-full text-sm font-mono italic lg:text-md lg:spacing-tight ${
                  isHovered ? "text-pink" : ""
                }`}
              >
                {project.title}
              </h3>
              <p className="text-sm font-sans">{project.description}</p>
              <IoMdArrowForward className="text-[20px] lg:hidden" />
            </div>

            <img
              src={src}
              alt={project.alt}
              className={`w-full lg:w-[328px] object-contain lg:px-md py-xs lg:py-sm bg-bg-white lg:bg-bg-gray border-[1px] border-border-default rounded-[12px]`}
            />
          </>
        )}
      </Link>
    </>
  );
}

export default ProjectCard;
