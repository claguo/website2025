import React from "react";
import { useLocation } from 'react-router-dom';
import { useProjectContext } from '../context/ProjectContext';

function ProjectHero() {
  const path = useLocation().pathname.slice(1);
  const project = useProjectContext().find(( project ) => project.path === path );

  return (
    <>
      <img src={ `../imgs/${path}.png` } alt = { project.title } style = {{objectPosition: '0% 0%', width: '100vw', height: '72vh', margin: '0 -6rem 3rem' }} />
      <div className='horizSection' style={{justifyContent: 'space-between'}}>
        <h1> { project.title } </h1>
        <div style = {{ width: '57.1428571429%', display: 'flex', justifyContent: 'space-between', margin: '1rem 0 4rem' }}>
          <div style={{width: '24%', marginLeft: '0.5rem'}}>
            <h2> category </h2>
            <p className='caption'> {project.category} </p>
          </div>
          <div style={{ width: '24%'}}>
            <h2> my role</h2>
            <p className='caption'> {project.type} </p>
          </div>
          {project.team !== undefined
            ? <div style={{width: '24%'}}>
                <h2> team </h2>
                <p className='caption'> {project.team} </p>
              </div>
            : null }
          <div style={{width: '24%'}}>
            <h2> duration </h2>
            <p className='caption'> {project.duration} </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectHero;