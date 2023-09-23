import React, { useLayoutEffect } from "react";
import Button from "./Button";
import { useLocation } from 'react-router-dom';
import { useProjectContext } from '../context/ProjectContext';

function ProjectNavButtons() {
  const path = useLocation().pathname.slice(1);
  const currentProject = useProjectContext().find(( project ) => project.path === path );
  const nextProject = useProjectContext().find(( project ) => project.id === currentProject.id+1 );
  const prevProject = useProjectContext().find(( project ) => project.id === currentProject.id-1 );
  let isFirstProj = false;

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  if (prevProject === undefined || prevProject.path === 'astros') {
    isFirstProj = true;
  }

  return (
    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '6rem'}}>
      {isFirstProj === false
      ? (<Button to = {`/${prevProject.path}`} text='View Previous Project' />)
      : (<Button to = '/' text='Home' />)}
      {nextProject !== undefined
      ? (<Button to = {`/${nextProject.path}`} text='View Next Project' />)
      : (<Button to = '/' text='Home' />)}
    </div>
  )
}

export default ProjectNavButtons;