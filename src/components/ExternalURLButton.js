import React, { useState } from 'react';

function ExternalURLButton(props) {
  const externalUrl = props.url;
  const [isHovered, setIsHovered] = useState(false)

  const handleButtonClick = () => {
    // Open the external URL in a new tab
    window.open(externalUrl, '_blank');
  };

  return (
    <>
    { props.isButton === true
    ? <div 
      className={`cursor-pointer rounded-[1.2rem] py-[0.25rem] px-[3rem] inline-block w-auto mt-[1rem] self-start border-solid border-2 ${isHovered ? '-skew-x-[11deg] bg-lighter-green border-lighter-green' : 'border-gray'} ${props.className}`}
      onMouseEnter={() => {setIsHovered(true);}}
      onMouseLeave={() => {setIsHovered(false);}}
      onClick={handleButtonClick}
      >
        <p style={ isHovered ? {transform: 'skewX(11deg)', fontStyle: 'italic' } : {}}>{props.text}</p>
      </div>
    : props.big === true
      ? <span
        onMouseEnter={() => {setIsHovered(true);}}
        onMouseLeave={() => {setIsHovered(false);}}
        className={`${isHovered ? 'text-light-green italic' : 'text-green'} inline-block m-0 text-md lg:text-lg cursor-pointer`}
        onClick={handleButtonClick}>
          { props.text }
        </span>
      : <p
        onMouseEnter={() => {setIsHovered(true);}}
        onMouseLeave={() => {setIsHovered(false);}}
        className={`inline-block cursor-pointer m-0 ${isHovered ? 'italic text-green' : 'text-dark-green'}`}
        onClick={handleButtonClick}>
          { props.text }
        </p>
    }
    </>
  )
}

export default ExternalURLButton;