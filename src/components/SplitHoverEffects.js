import React, { useState } from 'react';
import { SplitText } from '@cyriacbr/react-split-text';

function SplitHover( props ) {
  const split = props.text.split('');
  const [italicStates, setItalicStates] = useState(split.map(() => true));

  const handleMouseEnter = (index) => {
    const newItalicStates = [...italicStates];
    newItalicStates[index] = !newItalicStates[index];
    setItalicStates(newItalicStates);
  };

  return (
    <div className={props.className} style={{display: 'flex'}} >
    {split.map((char, index) => (
      <div key={index}
        className='bigHeader'
        onMouseEnter={() => handleMouseEnter(index)}
        style={
          italicStates[index] ? {...props.conditionalStyle} : {}
      }>
        {char === ' ' ? '\u00A0' : char}
      </div>
    ))}
    </div>
  )
}

export default SplitHover;