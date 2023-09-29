import React from "react";

function Figure(props) {
  return (
    <figure className={`flex flex-col rounded overflow-hidden ${props.className}`}>
      <img src={ props.src } alt={ props.alt } style={{ height: '100%', borderRadius: '0' }}/>
      <b className={`text-sm lg:text-base px-4 py-2 lg:py-4 ${props.color}`}>
        {props.caption}
      </b>
    </figure>
  )
}

export default Figure;