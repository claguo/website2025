import React from "react";
import SplitHover from "../SplitHoverEffects";

function AboutHero() {
  return (
    <>
      <h1 className='green-text' style={{paddingTop: '38vh'}}>nice to meet you; i'm</h1>
      <div style={{display: 'flex', gap: '1.5rem'}}>
        <SplitHover className='' text='claire' conditionalStyle={{fontStyle: 'italic'}} />
        <SplitHover className='flower-symbol' conditionalStyle={{color: '#c2e772'}} text='✿' />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', margin: '2rem 0 10rem'}}>
        <h1 className='threeColumns green-text' style={{textAlign: 'right'}}> <b>ui/ux designer,</b></h1>
        <h1 className='threeColumns green-text' style={{textAlign: 'right'}}>risd bfa industrial design + computation '24</h1>
      </div>
    </>
  )
}

export default AboutHero;