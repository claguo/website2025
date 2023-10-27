import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function ProjectCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  const { project } = props;
  const src = `./imgs/${project.path}.png`;

  return (
    <>
        <Link
        to={`/${project.path}`}
        onMouseEnter={() => {setIsHovered(true);}}
        onMouseLeave={() => {setIsHovered(false);}}
        className={`flex flex-col gap-4 mb-28 lg:flex-row lg:justify-between lg:gap-12 lg:items-end lg:mb-36
        ${isHovered ? 'italic text-light-green' : ''}`}>
          <img src={src} alt={project.alt} 
              className={`${isHovered ? "lg:-skew-x-[7deg]" : ''} w-100 lg:w-[52%] aspect-video rounded-lg`}/>
          <div className='flex flex-col gap-[0.5rem]'>
              <h1 className='lg:text-lg'>{project.title}</h1>
              <p className='text-sm lg:text-base font-bold'> {project.type}</p>
              <p>{project.description}</p>
              <Button className='lg:hidden' to={`${project.path}`} text='View Project'/>
          </div>
        </Link>

    </>
  )
}

export default ProjectCard
