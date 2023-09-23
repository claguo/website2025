import React, { useState } from 'react';

function ExternalURLButton(props) {
  const externalUrl = props.url; // Replace with your external URL
  const [isHovered, setIsHovered] = useState(false)

  const handleButtonClick = () => {
    // Open the external URL in a new tab
    window.open(externalUrl, '_blank');
  };

  return (
    <>
    { props.isButton === true
    ? <div 
      onMouseEnter={() => {setIsHovered(true);}}
      onMouseLeave={() => {setIsHovered(false);}}
      onClick={handleButtonClick}
      style={{
        cursor: 'pointer',
        transform: isHovered ? 'skewX(-11deg)' : '',
        borderRadius: '1.2rem',
        padding: '0.25rem 3rem',
        border: isHovered ? '1px solid #c2e772' : '1px solid #00D287',
        display: 'inline-block',
        width: 'auto',
        marginTop: '1rem',
        backgroundColor: isHovered ? '#c2e772' : 'transparent',
        // backgroundColor: props.active ? '#00D287' : 'transparent'
      }}>
      <p style={ isHovered ? {transform: 'skewX(11deg)', fontStyle: 'italic' } : {}}>{props.text}</p>
    </div>
    // ? <div
    //     onMouseEnter={() => {setIsHovered(true);}}
    //     onMouseLeave={() => {setIsHovered(false);}}
    //     style={{
    //       display: 'inline-block',
    //       borderRadius: '0.25rem',
    //       marginTop: '1rem',
    //       padding: '0.5rem 1rem',
    //       cursor: 'pointer',
    //       border: isHovered ? '2px solid #ff7edd' : '2px solid #00D287',
    //       backgroundColor: isHovered ? '#ff7edd' : 'transparent',
    //       transform: isHovered ? 'skewX(-11deg)' : '',
    //     }}
    //   >
    //     <h3 style={{ transform: isHovered ? 'skewX(11deg)' : '', fontStyle: isHovered ? 'italic' : '' }} onClick={handleButtonClick} >
    //       { props.text }
    //     </h3>
    //   </div>
    : props.heading === true
    ? <h1
      onMouseEnter={() => {setIsHovered(true);}}
      onMouseLeave={() => {setIsHovered(false);}}
      style={{
        display: 'inline-block',
        cursor: 'pointer',
        margin: '0',
        overflowWrap: 'anywhere',
        fontStyle: isHovered ? 'italic' : '',
        color: isHovered ? '#00D287' : '#00A56A'
      }}
      onClick={handleButtonClick}>
        { props.text }
      </h1>
    : <p
        onMouseEnter={() => {setIsHovered(true);}}
        onMouseLeave={() => {setIsHovered(false);}}
        style={{
          display: 'inline-block',
          cursor: 'pointer',
          margin: '0',
          overflowWrap: 'anywhere',
          fontStyle: isHovered ? 'italic' : '',
          color: isHovered ? '#2fa767' : '#00A56A',
        }}
        onClick={handleButtonClick}
      >
        { props.text }
      </p>
    }
    </>
  )
}

export default ExternalURLButton;