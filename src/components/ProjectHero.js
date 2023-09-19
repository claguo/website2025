import React from "react";
import { useLocation } from 'react-router-dom';
import { useProjectContext } from '../context/ProjectContext';

function ProjectHero() {
  const path = useLocation().pathname.slice(1);
  const project = useProjectContext().find(( project ) => project.path === path );

  return (
    <>
      <img src={ `../imgs/${path}.png` } alt = { project.title } style = {{ width: '100vw', height: '70vh', margin: '0 -6rem 3rem' }} />
      <div style={{display: 'flex'}}>
        <h1 className = 'threeColumns'> { project.title } </h1>
        <div className='fourColumns' style = {{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <div className = 'oneColumn'>
            <h2> category </h2>
            <p style={{fontSize: '0.75rem'}}> {project.category} </p>
          </div>
          <div className = {project.team ? 'oneColumn' : 'twoColumns'} style={{ paddingRight: '1vw' }}>
            <h2> my role</h2>
            <p style={{fontSize: '0.75rem'}}> {project.type} </p>
          </div>
          {project.team != undefined
            ? <div className='oneColumn' style={{ paddingRight: '1vw' }}>
                <h2> team </h2>
                <p style={{fontSize: '0.75rem'}}> {project.team} </p>
              </div>
            : null }
          <div className = 'oneColumn'>
            <h2> duration </h2>
            <p style={{fontSize: '0.75rem'}}> {project.duration} </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectHero;