import React from "react";

function InterviewCard(props) {
  return (
    <div className='quote-box' style={{width: '24%', marginTop: '1rem'}}>
      <h1>{props.emoji}</h1>
      <p style={{fontWeight: 'bold'}}>{props.name}</p>
      <p className='caption'>@ {props.location}</p>
      <p style={{marginTop: '1rem'}}>{props.desc}</p>
    </div>
  )
}

export default InterviewCard;