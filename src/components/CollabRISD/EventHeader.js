import React from "react";

function EventHeader(props) {
  return (
    <div>
      <h2 style={{ color: '#00D287', transform: 'rotate(-2.247deg)' }}> { props.date } </h2>
      <h1> { props.name } </h1>
      <p className='right-p'> {props.intro } </p>
    </div>
  )
}

export default EventHeader;