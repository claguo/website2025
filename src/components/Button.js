import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Button( props ) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link to={props.to}
      onMouseEnter={() => {setIsHovered(true);}}
      onMouseLeave={() => {setIsHovered(false);}}
      style={{
      }}>
      <div style={{
        transform: isHovered ? 'skewX(-11deg)' : '',
        borderRadius: '1.2rem',
        marginTop: '1rem',
        padding: '0.25rem 3rem',
        border: isHovered ? '1px solid #c2e772' : '1px solid #00D287',
        display: 'inline-block',
        backgroundColor: isHovered ? '#c2e772' : props.active ? '#00D287' : 'transparent',
      }}>
        <p style={ isHovered ? {transform: 'skewX(11deg)'} : {}}>{props.text}</p>
      </div>
    </Link>
  )
}

export default Button;