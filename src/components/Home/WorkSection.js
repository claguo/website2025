import React, { useState } from "react";
import ProjectCard from "../custom/ProjectCard.js";
import { useProjectContext } from "../../context/ProjectContext.js";
import ContentWrapper from "../general/ContentWrapper.js";
import Button from "../buttons/Button.js";
import { IoMdArrowForward } from "react-icons/io";
import mochi from "../../assets/imgs/mochi/mochi-cover.png";

function WorkSection() {
  const projects = useProjectContext();
  // const [filters, setFilters] = useState([
  //   "ui/ux design",
  //   "web development",
  //   "design strategy",
  //   "game development",
  //   "graphic design",
  //   "illustration",
  // ]);
  // const [filtered, setFiltered] = useState(projects);
  const filtered = useState(projects);

  const [hovered, setHovered] = useState(false);

  return (
    <>
      {/* <div className="lg:-mb-32 lg:mt-36 mt-16 flex flex-wrap items-center">
        <h2 className="mr-[1rem] my-0">work</h2>
        <CategoryButton
          text={"ui/ux design"}
          projects={projects}
          filtered={filtered}
          setFiltered={setFiltered}
          setFilters={setFilters}
          filters={filters}
        />
        <CategoryButton
          text={"web development"}
          projects={projects}
          filtered={filtered}
          setFiltered={setFiltered}
          setFilters={setFilters}
          filters={filters}
        />
        <CategoryButton
          text={"design strategy"}
          projects={projects}
          filtered={filtered}
          setFiltered={setFiltered}
          setFilters={setFilters}
          filters={filters}
        />
        <CategoryButton
          text={"game development"}
          projects={projects}
          filtered={filtered}
          setFiltered={setFiltered}
          setFilters={setFilters}
          filters={filters}
        />
        <CategoryButton
          text={"graphic design"}
          projects={projects}
          filtered={filtered}
          setFiltered={setFiltered}
          setFilters={setFilters}
          filters={filters}
        />
        <CategoryButton
          text={"illustration"}
          projects={projects}
          filtered={filtered}
          setFiltered={setFiltered}
          setFilters={setFilters}
          filters={filters}
        />
      </div> */}
      <div
        className="flex justify-center
        lg:bg-bg-white lg:rounded-[16px] lg:border-[1px] lg:border-border-default mx-xs lg:mx-sm lg:py-3xl"
      >
        <ContentWrapper>
          <div
            className={`flex flex-col-reverse gap-sm lg:items-center lg:flex-row lg:gap-md lg:flex-1 ${
              hovered ? "cursor-pointer" : ""
            }`}
            onClick={() => window.open("https://joinmochi.com/", "_blank")}
            onMouseEnter={() => {
              setHovered(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
            }}
          >
            <div className="flex flex-col gap-3xs items-end">
              <h3
                className={`w-full text-sm font-mono italic lg:text-md lg:spacing-tight ${
                  hovered ? "text-pink" : ""
                }`}
              >
                Mochi Health: Humanizing Telemedicine
              </h3>
              <p className="text-sm font-sans">
                {" "}
                "Designing healthcare products for patients and doctors,
                rebranding the Mochi marketing website, and building Bento
                Design System. Coming soon!",
              </p>
              <Button
                className="lg:hidden px-0"
                text=""
                icon={<IoMdArrowForward className="text-[20px]" />}
              />
            </div>

            <img
              src={mochi}
              alt="Screenshot of joinmochi.com, which I designed."
              className={`w-full lg:w-[328px] object-contain lg:px-md py-xs lg:py-sm bg-bg-white lg:bg-bg-gray border-[1px] border-border-default rounded-[12px]`}
            />
          </div>

          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ContentWrapper>
      </div>
    </>
  );
}

export default WorkSection;
