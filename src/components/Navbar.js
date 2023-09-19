import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import ExternalURLButton from "./ExternalURLButton";
import Button from './Button';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import resume from '../assets/Claire-Resume.pdf'

function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState(null);

  React.useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <div style={{
      margin: '1rem -2rem 0',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <Button to='/' active={active === '/'} text='home' />
      <div className='horizSection'>
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
