import React from "react";
import EventHeader from "./EventHeader";
import cover from '../../assets/imgs/collabrisd/projfair.jpg';
import bdw from '../../assets/imgs/collabrisd/pfbdw.jpg';
import cs from '../../assets/imgs/collabrisd/pfcs.jpg';
import ch from '../../assets/imgs/collabrisd/pfcarrhaus.jpg';
import cb from '../../assets/imgs/collabrisd/pfcb.JPG';
import met from '../../assets/imgs/collabrisd/pfmet.JPG';
import Figure from '../Figure';
import poster from '../../assets/imgs/collabrisd/pfposter.png';
import boarddesign from '../../assets/imgs/collabrisd/pfboard.png';

function EventProjectFair() {
  return (
    <div className='flex flex-col gap-8 mt-16 lg:mt-36'>
      <EventHeader
        name='Collab: Project Fair'
        date='sunday, apr 30 @ 4pm!'
        intro='The Project Fair is a decentralized event: we built five standing boards to that display projects submitted by students. These boards were then distributed to five different locations around RISD and Brown campus as a way to advertise ongoing projects and new developing ideas.'
      />
      <img src={ cover } alt='Project Fair event'/>

      <figure className='flex flex-col'>
        <h3 className='text-sm lg:text-base font-bold mb-[0.25rem] font-sans'>posters</h3>
        <div className='flex lg:w-3/5 justify-between'>
          <img src={poster} className='w-[49%]' alt='Project Fair advertising poster' />
          <img src={boarddesign} className='w-[49%]' alt='Project Fair board poster' />
        </div>
      </figure>
      
      <div>
        <h3 className='text-sm lg:text-base font-bold mb-[0.25rem] font-sans'>collab boards around campus</h3>
        <div className='flex flex-wrap lg:justify-between gap-1'>
          <Figure className='w-[32.3%] lg:w-[19%]' src = {bdw} alt = 'Project fair set up at Brown Design Workshop' color = 'bg-[#FC7247]' caption = '@Brown Design Workshop' />
          <Figure className='w-[32.3%] lg:w-[19%]' src = {cs} alt = 'Project fair set up at Brown Computer Science Building' color = 'bg-[#FC7247]' caption = '@Brown Comp Sci Building' />
          <Figure className='w-[32.3%] lg:w-[19%]' src = {ch} alt = 'Project fair set up at Carr Haus' color = 'bg-[#FC7247]' caption = '@RISD Carr Haus Cafe' />
          <Figure className='w-[32.3%] lg:w-[19%]' src = {cb} alt = 'Project fair set up at RISD College Building' color = 'bg-[#FC7247]' caption = '@RISD College Building' />
          <Figure className='w-[32.3%] lg:w-[19%]' src = {met} alt = 'Project fair set up at the Met' color = 'bg-[#FC7247]' caption = '@The Met Dining Hall' />
        </div>
      </div>
    </div>
  )
}

export default EventProjectFair;