import React from "react";

function TwoThreeFigure(props) {
  return (
    <figure className='horizSection' style={{ alignItems: 'center' }}>
    <div>
      <h2> { props.heading } </h2>
      <div className='twoColumns paragraphContainer'>
        {props.content.map((p, index) =>
          <p key={ index }> { p } </p>
        )}  
      </div>
    </div>
    <img className='threeColumns' src={ props.src } alt={ props.alt } />
  </figure>
  )
}

export default TwoThreeFigure;