import React from 'react';
import { Link } from 'react-router-dom';
import ExternalURLButton from "./ExternalURLButton";
import SplitHover from './SplitHoverEffects';

function Hero() {

  return (
    // <div style={{ display: 'flex', paddingTop: '36vh', justifyContent: 'space-between' }}>
    <div className='horizSection' style={{padding: '48vh 0 8vh', justifyContent: 'space-between'}}>
      {/* <h1 className='bigHeader'>✽</h1> */}
      <div className='paragraphContainer'>
        <SplitHover text='claire' conditionalStyle={{fontStyle: 'italic'}} />
        <div>
          <p className='twoColumns'>Previously @ the&nbsp;
            <ExternalURLButton url='https://www.mlb.com/astros' text='Houston Astros' isButton={false} />
            &nbsp;and&nbsp;
            <ExternalURLButton url='https://www.ridehitch.com' text='Hitch' isButton={false} />
            .
          </p>
          <p className='twoColumns'>
            Currently pursuing a BFA in Industrial Design with a concentration in Computation, Technology, and Culture @&nbsp;
            <ExternalURLButton url='https://www.risd.edu/' text='Rhode Island School of Design' isButton={false} />
            .
          </p>
        </div>
      </div>
      {/* <div className='horizSection' style={{marginTop: '18vh'}}> */}
      <SplitHover className='flower-symbol hero-row-two' conditionalStyle={{color: '#c2e772'}} text='✿✿' />
      <SplitHover className='hero-row-two' text='guo' conditionalStyle={{fontStyle: 'italic'}} />
        
      {/* <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginTop: '2rem'}}>
        <SplitHover className='bigHeader' text='guo' />
        <p className='twoColumns'>Previously @ the&nbsp;
          <ExternalURLButton url='https://www.mlb.com/astros' text='Houston Astros' isButton={false} />
          &nbsp;and&nbsp;
          <ExternalURLButton url='https://www.ridehitch.com' text='Hitch' isButton={false} />
          .
        </p>
        <p className='twoColumns'>
          Currently pursuing a BFA in Industrial Design with a concentration in Computation, Technology, and Culture @&nbsp;
          <ExternalURLButton url='https://www.risd.edu/' text='Rhode Island School of Design' isButton={false} />
          .
        </p>
      </div> */}
  </div>
  )
}

export default Hero;
