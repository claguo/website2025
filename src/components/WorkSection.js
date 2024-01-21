import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useProjectContext } from "../context/ProjectContext";
import ContainerGray from "./ContainerGray";
import CategoryButton from "./buttons/CategoryButton.js";

function WorkSection() {
  const projects = useProjectContext();
  const [filters, setFilters] = useState([
    "ui/ux design",
    "web development",
    "design strategy",
    "game development",
    "graphic design",
    "illustration",
  ]);
  const [filtered, setFiltered] = useState(projects);

  return (
    <>
      <div className="lg:-mb-32 lg:mt-36 mt-16 flex flex-wrap items-center">
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
      </div>
      <ContainerGray>
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ContainerGray>
    </>
  );
}

export default WorkSection;
