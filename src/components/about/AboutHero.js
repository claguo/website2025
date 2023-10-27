import React from "react";
import SplitHover from "../SplitHoverEffects";
import LargeP from '../LargeP';

function AboutHero() {
  return (
    <section className='pt=[24vh] lg:pt-[40vh] flex'>
      {/* <LargeP className='text-green pt-[24vh] lg:pt-[40vh]'></LargeP> */}
      <div className='flex gap-4 lg:gap-8'>
        <SplitHover text='claire' conditionalStyle={{fontStyle: 'italic'}} />
        <SplitHover conditionalStyle={{color: '#00D287'}} text='✿' />
      </div>
      <div className='flex flex-col items-end mt-4'>
        <p className='text-7xl lg:text-[12rem]'>&nbsp;</p>
        <LargeP className='text-green text-right'> <b>ui/ux designer,</b></LargeP>
        <LargeP className='text-green text-right'>risd bfa industrial design + computation '24</LargeP>
      </div>
    </section>
  )
}

export default AboutHero;