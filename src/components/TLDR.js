import React from 'react';
import { useLocation } from 'react-router-dom';
import { useProjectContext } from '../context/ProjectContext';
import ExternalURLButton from "./ExternalURLButton";
import CollabTLDR from '../components/CollabRISD/CollabTLDR';


function TLDR() {
  const path = useLocation().pathname.slice(1);
  const project = useProjectContext().find(( project ) => project.path === path );

  return (
    <div className='section section-gray'>
      <div className = 'horizSection'>
        <h2 className = 'twoColumns'> 0. tl;dr </h2>
        <div className= 'threeColumns'>
          <p> { project.tldr } </p>
          {project.button &&
            <ExternalURLButton url='https://openprocessing.org/user/383894?view=sketches&o=6' text='view full work on OpenProcessing!' isButton={true} />
          }
        </div>
      </div>
      {useLocation().pathname === '/collab-risd'
      ? <CollabTLDR />
      : null}
    </div>
  )
}

export default TLDR;