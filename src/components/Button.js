import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Button( props ) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link to={props.to}
      onMouseEnter={() => {setIsHovered(true);}}
      onMouseLeave={() => {setIsHovered(false);}}>
      <div className={`
      cursor-pointer rounded-[1.2rem] py-[0.25rem] px-[3rem] inline-block w-auto mt-[1rem] self-start border-solid border-2
      ${isHovered ? '-skew-x-[11deg] bg-lighter-green border-lighter-green' : props.active ? 'bg-lighter-green border-lighter-green' : 'border-gray'}
      ${props.className}`}>
        <p style={ isHovered ? {transform: 'skewX(11deg)'} : {}}>{props.text}</p>
      </div>
    </Link>
  )
}

export default Button;