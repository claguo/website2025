import React from "react";
import roundtable from '../../assets/imgs/collabrisd/Roundtable-04.jpg';
import Figure from "../Figure";
import notion from '../../assets/imgs/collabrisd/notion.png'

function CollabTLDR() {
  return (
    <div className='section section-gray'>
      <h2> 0. tl;dr </h2>
      <h1 style={{marginRight: '20%'}}>Fostering interdisciplinary collaboration @ RISD and Brown.</h1>

        {/* <div className='threeColumns' style={{marginLeft: '40%'}}>
          <p> { project.tldr } </p>
        </div> */}
      <div className='right-p'>
        <p> This project was a semester-long Collaborative Study Project, during which a group of 4 other industrial and graphic designers and I sought to increase interdisciplinary collaboration at RISD. Over the course of four months, we designed, tested, and implemented two solutions: </p>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '2rem'}}>
        <Figure
        className='half-width'
        src={roundtable}
        alt='Roundtable event'
        color = '#D1E84D'
        caption = '1. A series of 3 events @ RISD to help students connect and collaborate locally.'
        />
        <Figure
        className='half-width'
        src = { notion }
        alt = 'Notion archive'
        color = '#EBB2FC'
        caption = '2. A digital archive as a platform for outreach and information sharing globally.'
        />
      </div>
    </div>
    
  )
}

export default CollabTLDR;