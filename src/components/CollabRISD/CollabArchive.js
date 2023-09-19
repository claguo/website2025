import React from "react";
import ExternalURLButton from "../ExternalURLButton";

function CollabArchive() {
  return (
    <div className='section-gray'>
      <div className='horizSection'>
        <h2 className='twoColumns'> 3. digital archive </h2>    
        <div>  
          <p className='threeColumns' style={{ marginBottom: '0.5rem' }}> In addition to our local events, we created a digital archive of projects looking for collaborators and collaboration resources. This transition into the digital realm enhances accessibility, as the digital archive is free from the constraints of time and location that events typically entail. This means that our resources remain accessible to anyone, around the clock. </p>
          <ExternalURLButton url='https://www.mlb.com/astros' text='View Our Notion Page!' isButton={true} />
        </div>
      </div>
    </div>
  )
}

export default CollabArchive;