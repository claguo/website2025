import React from "react";
import ExternalURLButton from "../ExternalURLButton";
import projects from '../../assets/imgs/collabrisd/archiveprojects.png';
import taxidermy from '../../assets/imgs/collabrisd/taxidermynotion.png';

function CollabArchive() {
  return (
    <div className='section-gray'>
      <h2 className='twoColumns'>3. digital archive</h2>
      <div style={{marginLeft: '40%'}}>
        <p style={{ marginTop: '0.5rem' }}>In addition to our local events, we created a digital archive of projects looking for collaborators and collaboration resources. This transition into the digital realm enhances accessibility, as the digital archive is free from the constraints of time and location that events typically entail. This means that our resources remain accessible to anyone, around the clock.</p>
        <ExternalURLButton url='https://www.notion.so/Cabinet-of-Collaboration-634ebe90250b40f5a04e9c2cf380bdf9?pvs=4' text='View Our Notion Page!' isButton={true} />
      </div>
      <h1 style={{margin: '3rem 0 1rem'}}>An archive of projects searching for collaborators with filters and sorting.</h1>
      <img src={projects} alt='Projects archive' />

      <h1 style={{margin: '3rem 0 1rem'}}>Project pages written by project owners to showcase their ideas.</h1>
      <img style={{marginLeft: '40%'}} className='threeColumns' src={taxidermy} alt='Project submission form' />

    </div>
    // </div>
  )
}

export default CollabArchive;