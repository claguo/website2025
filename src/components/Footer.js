import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../assets/Footer.css'
import ExternalURLButton from './ExternalURLButton';
import ButtonMailto from './ButtonMailto';

function Footer() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className='green-text' style={{display: 'flex', justifyContent: 'space-between', margin: '12rem 0 6rem'}}>
      {/* <h1 style={{textAlign: 'right', fontFamily: 'rubik'}}>♡</h1> */}
      <h1 className='twoColumns'>thank you for visiting! let's<br/>work together!</h1>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'right'
    // margin-bottom: 11.5rem;
      }}>
        <h1
          onClick={() => window.location = 'mailto:cguo02@risd.edu'}
          onMouseEnter={() => {setIsHovered(true);}}
          onMouseLeave={() => {setIsHovered(false);}}
          style={{
          display: 'inline-block',
          cursor: 'pointer',
          margin: '0',
          overflowWrap: 'anywhere',
          fontStyle: isHovered ? 'italic' : '',
          color: isHovered ? '#00D287' : '#00A56A'
        }}>
          cguo02@risd.edu
        </h1>
        <ExternalURLButton text='github' url='https://github.com/claguo' heading={true}/>
        <ExternalURLButton text='linkedin' url='https://www.linkedin.com/in/claguo/' heading={true}/>
      </div>
    </div>
  )
}

export default Footer;
