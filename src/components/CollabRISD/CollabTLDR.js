import React from "react";
import roundtable from '../../assets/imgs/collabrisd/Roundtable-04.jpg';
import Figure from "../Figure";

function CollabTLDR() {
  return (
    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '3rem'}}>
      <Figure
        src={roundtable}
        alt='Roundtable event'
        color = '#D1E84D'
        caption = '1. A series of 3 events @ RISD to help students connect and collaborate locally.'
      />
      <Figure
        src = { roundtable }
        alt = 'Notion archive'
        color = '#EBB2FC'
        caption = '2. A digital archive as a platform for outreach and information sharing globally.'
      />
    </div>
  )
}

export default CollabTLDR;