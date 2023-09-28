import React, { useState, useEffect } from 'react';
import ExternalURLButton from "./ExternalURLButton";
import Button from './Button';
import { useLocation } from 'react-router-dom';
import resume from '../assets/Claire-Resume.pdf'

function Navbar(isFooter) {
  const location = useLocation();
  const [active, setActive] = useState(null);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
          setShow(false); 
        } else { // if scroll up show the navbar
          setShow(true);  
        }
  
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div style={{
      // margin: isFooter ? '0' : '0 0 -6rem 0',
      marginLeft: '-2rem',
      display: 'flex',
      justifyContent: 'space-between',
      position: 'fixed',
      width: '100%',
      transition: '0.25s',
      opacity: show ? '100' : '0'
    }}>
      <Button to='/' active={active === '/'} text='home' />
      <div className='horizSection' style={{marginRight: '8rem'}}>
        {/* <Button to='/work' active={active === '/work'} text='work' /> */}
        <Button to='/about' active={active === '/about'} text='about' />
        <ExternalURLButton text='resume' url={resume} isButton={true}/>
      </div>
    </div>

    // <div style={{
    //   margin: '1.5rem -2rem 0',
    //   display: 'flex',
    //   justifyContent: 'center',
    // }}>
    //   <div className='horizSection' style={{gap: '1rem'}}>
    //     <Button to='/' active={active === '/'} text='home' />
    //     <Button to='/work' active={active === '/work'} text='work' />
    //     <Button to='/about' active={active === '/about'} text='about' />
    //     <Button to='/resume' active={active === '/resume'} text='resume' />
    //   </div>
    // </div>
  )
}
  
  export default Navbar

// import React, { useState } from 'react';
// import Button from './Button';

// function Navbar() {
//   const [activeButton, setActiveButton] = useState(null);

//   const handleButtonClick = (buttonName) => {
//     setActiveButton(buttonName);
//   };
// console.log(activeButton)
//   return (
//     <div>
//       <Button
//         className={activeButton === 'Button 1' ? 'active' : ''}
//         onClick={() => handleButtonClick('Button 1')}
//         text='hello'
//       >
//         Button 1
//       </Button>
//       <button
//         className={activeButton === 'Button 2' ? 'active' : ''}
//         onClick={() => handleButtonClick('Button 2')}
//       >
//         Button 2
//       </button>
//       <button
//         className={activeButton === 'Button 3' ? 'active' : ''}
//         onClick={() => handleButtonClick('Button 3')}
//       >
//         Button 3
//       </button>
//     </div>
//   );
// }

// export default Navbar;
