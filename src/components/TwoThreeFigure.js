import React from "react";

function TwoThreeFigure(props) {
  return (
    <figure className='horizSection' style={{ alignItems: 'center' }}>
    <div className='twoColumns paragraphContainer'>
      <h2> { props.heading } </h2>
      {props.content.map((p, index) =>
        <p key={ index }> { p } </p>
      )}  
    </div>
    <img className='threeColumns' src={ props.src } alt={ props.alt } />
  </figure>
  )
}

export default TwoThreeFigure;