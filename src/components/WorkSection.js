import React from 'react'
import ProjectCard from './ProjectCard'
import { useProjectContext } from '../context/ProjectContext';
import ContainerGray from './ContainerGray';

function WorkSection() {
  const project = useProjectContext();

  return (
      <ContainerGray>
        {project.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ContainerGray>
  )
}

export default WorkSection
