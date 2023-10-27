import React, { useState } from 'react'
import '../assets/Footer.css'
import ExternalURLButton from './ExternalURLButton';

function Footer() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <footer>
    <div className='text-dark-green flex flex-col lg:flex-row justify-between lg:mt-48 mt-24'>
      <div className='flex flex-col'>
        <span className='text-md lg:text-lg text-light-green'>✿✿</span>
        <span className='text-md lg:text-lg text-green'>thank you for visiting!<br/>designed and coded by claire guo.</span>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'right'
      }}>
        <span
          onClick={() => window.location = 'mailto:cguo02@risd.edu'}
          onMouseEnter={() => {setIsHovered(true);}}
          onMouseLeave={() => {setIsHovered(false);}}
          className={`${isHovered ? 'text-light-green italic' : 'text-green'} inline-block cursor-pointer lg:text-lg text-md mt-4 lg:mt-0`}>
          cguo02@risd.edu
        </span>
        <ExternalURLButton text='github' url='https://github.com/claguo' big={true}/>
        <ExternalURLButton text='linkedin' url='https://www.linkedin.com/in/claguo/' big={true}/>
      </div>
    </div>
    <p className='caption' style={{textAlign: 'right', margin: '1rem 0'}}>© Claire Guo 2023</p>
    </footer>
  )
}

export default Footer;
