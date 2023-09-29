import React from "react";
import { useLocation } from 'react-router-dom';
import { useProjectContext } from '../context/ProjectContext';

function ProjectHero() {
  const path = useLocation().pathname.slice(1);
  const project = useProjectContext().find(( project ) => project.path === path );

  return (
    <>
      <div className='w-[100vw] -ml-[6vw] lg:h-[72vh] overflow-hidden mb-4 lg:mb-16'>
        <img src={ `../imgs/${path}.png` } alt = { project.title } className='object-cover object-top' />
      </div>
      <div className='flex lg:flex-row flex-col lg:justify-between'>
        <h1 className='text-md lg:text-lg'> { project.title } </h1>
        <div className='flex lg:w-4/7 justify-between gap-2 flex-wrap' style = {{ margin: '1rem 0 4rem' }}>
          <div className='w-[48%] lg:w-[24%]'>
            <h2 className='text-sm lg:text-base'> category </h2>
            <p className='caption'> {project.category} </p>
          </div>
          <div className='w-[48%] lg:w-[24%]'>
            <h2 className='text-sm lg:text-base'> my role</h2>
            <p className='caption'> {project.type} </p>
          </div>
          {project.team !== undefined
            ? <div className='w-[48%] lg:w-[24%]'>
                <h2 className='text-sm lg:text-base'> team </h2>
                <p className='caption'> {project.team} </p>
              </div>
            : null }
          <div className='w-[48%] lg:w-[24%]'>
            <h2 className='text-sm lg:text-base'> duration </h2>
            <p className='caption'> {project.duration} </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectHero;