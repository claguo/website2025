import React, { useState } from 'react'
import '../assets/Footer.css'
import ExternalURLButton from './ExternalURLButton';

function Footer() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
    <div className='text-dark-green flex flex-col lg:flex-row justify-between lg:mt-48 mt-24'>
      <h1 className='text-md lg:text-lg'>✿✿<br/>thank you for visiting!<br/>designed and coded by claire guo.</h1>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'right'
      }}>
        <h1
          onClick={() => window.location = 'mailto:cguo02@risd.edu'}
          onMouseEnter={() => {setIsHovered(true);}}
          onMouseLeave={() => {setIsHovered(false);}}
          className={`${isHovered ? 'text-mid-green italic' : 'text-dark-green'} inline-block cursor-pointer lg:text-lg text-md mt-4 lg:mt-0`}>
          cguo02@risd.edu
        </h1>
        <ExternalURLButton text='github' url='https://github.com/claguo' heading={true}/>
        <ExternalURLButton text='linkedin' url='https://www.linkedin.com/in/claguo/' heading={true}/>
      </div>
    </div>
    <p className='caption' style={{textAlign: 'right', margin: '1rem 0'}}>© Claire Guo 2023</p>
    </>
  )
}

export default Footer;
