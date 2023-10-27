import React from 'react';
import ExternalURLButton from "./ExternalURLButton";
import SplitHover from './SplitHoverEffects';

function Hero() {

  return (
  <div className='flex justify-between pt-[36vh]'>
    <div className='flex flex-col'>
      <SplitHover text='claire' conditionalStyle={{fontStyle: 'italic'}} />
      <div className='flex self-end gap-4 lg:gap-[8vw]'>
      <SplitHover conditionalStyle={{color: '#00D287'}} text='✿✿' />
      <SplitHover text='guo' conditionalStyle={{fontStyle: 'italic'}} />
      </div>

      <p className='mt-12 lg:w-1/3 lg:-mt-28'>Previously @ the&nbsp;
        <ExternalURLButton url='https://www.mlb.com/astros' text='Houston Astros' isButton={false} />
        &nbsp;and&nbsp;
        <ExternalURLButton url='https://www.ridehitch.com' text='Hitch' isButton={false} />
        . Currently pursuing a BFA in Industrial Design with a concentration in Computation, Technology, and Culture @&nbsp;
        <ExternalURLButton url='https://www.risd.edu/' text='Rhode Island' isButton={false} />
        <ExternalURLButton url='https://www.risd.edu/' text=' School of Design' isButton={false} />
        .
      </p>
    </div>
</div>
  )
}

export default Hero;
