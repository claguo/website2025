import React, { useState } from 'react'
import '../assets/Footer.css'
import ExternalURLButton from './ExternalURLButton';
import Navbar from './Navbar';

function Footer() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
    <div className='green-text' style={{display: 'flex', justifyContent: 'space-between', margin: '12rem 0 0rem'}}>
      {/* <h1 style={{textAlign: 'right', fontFamily: 'rubik'}}>♡</h1> */}
      <h1 className='twoColumns'>✿✿<br/>thank you for visiting; let's work together!</h1>
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
    <div style={{marginBottom: '0.5rem'}}>
    <Navbar />
    <p className='caption' style={{textAlign: 'center'}}>© Claire Guo 2023</p>
    </div>
    </>
  )
}

export default Footer;
