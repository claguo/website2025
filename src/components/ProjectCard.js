import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        className='
        flex flex-col gap-4 mb-28
        lg:flex-row lg:justify-between lg:gap-12 lg:items-end lg:mb-36'
        >
            <img src={src} alt={project.title} 
                className={`${isHovered ? "lg:-skew-x-[7deg]" : ''} w-100 lg:w-[52%] aspect-video rounded-lg`}/>
            <div>
                <h1 className='lg:text-lg'>{project.title}</h1>
                <h2 className='text-sm lg:text-base'> {project.type}</h2>
                <p>{project.description}</p>
            </div>
        </Link>

    </>
  )
}

export default ProjectCard
