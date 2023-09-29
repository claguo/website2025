import React from "react";
import SplitHover from "../SplitHoverEffects";
import H1 from '../H1';

function AboutHero() {
  return (
    <>
      <H1 className='text-green pt-[24vh] lg:pt-[40vh]'></H1>
      <div className='flex gap-4 lg:gap-8'>
        <SplitHover className='' text='claire' conditionalStyle={{fontStyle: 'italic'}} />
        <SplitHover className='flower-symbol' conditionalStyle={{color: '#c2e772'}} text='✿' />
      </div>
      <div className='flex flex-col items-end mt-4'>
        <H1 className='w-3/5 text-green text-right'> <b>ui/ux designer,</b></H1>
        <H1 className='w-3/5 text-green text-right'>risd bfa industrial design + computation '24</H1>
      </div>
    </>
  )
}

export default AboutHero;