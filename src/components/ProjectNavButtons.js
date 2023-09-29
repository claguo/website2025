import React, { useState, useEffect } from "react";
import Button from "./Button";
import { useLocation } from 'react-router-dom';
import { useProjectContext } from '../context/ProjectContext';

function ProjectNavButtons() {
  const path = useLocation().pathname.slice(1);
  const currentProject = useProjectContext().find(( project ) => project.path === path );
  const nextProject = useProjectContext().find(( project ) => project.id === currentProject.id+1 );
  const prevProject = useProjectContext().find(( project ) => project.id === currentProject.id-1 );
  let isFirstProj = false;
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;

  if (prevProject === undefined || prevProject.path === 'astros') {
    isFirstProj = true;
  }

  return (
    <div className='flex flex-col lg:flex-row items-center justify-between mt-16'>
    {isFirstProj === false ? (
      <Button to={`/${prevProject.path}`} text='view previous project' />
    ) : isMobile === false ? (
      <Button to='/' text='home' />
    ) : null}
    {nextProject !== undefined ? (
      <Button to={`/${nextProject.path}`} text='view next project' />
    ) : (
      <Button to='/' text='home' />
    )}
  </div>
  )
}

export default ProjectNavButtons;