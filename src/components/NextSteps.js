import React from "react";

function NextSteps(props) {
  return (
    <div className='section-gray'>
      <div className='horizSection'>
        <h2 className='twoColumns'> {props.section}. next steps </h2>   
        <div className='threeColumns paragraphContainer'>
          {props.steps.map((step, index) =>
            <p key={ index }> { step } </p>
          )}  
        </div> 
      </div> 
    </div>
  )
}

export default NextSteps;