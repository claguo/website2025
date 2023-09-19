import React from 'react'
import ProjectCard from './ProjectCard'
import { useProjectContext } from '../context/ProjectContext';

function WorkSection() {
  const project = useProjectContext();

  return (
    <div className = 'section section-gray' >
      {project.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default WorkSection
