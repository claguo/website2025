import React from "react";
import EventHeader from "./EventHeader";
import roundtable from '../../assets/imgs/collabrisd/Roundtable-04.jpg';
import poster from '../../assets/imgs/collabrisd/rtposter.png';
import ig1 from '../../assets/imgs/collabrisd/rtig1.png';
import ig2 from '../../assets/imgs/collabrisd/rdig2.png';
import ig3 from '../../assets/imgs/collabrisd/rdig3.png';
import ig4 from '../../assets/imgs/collabrisd/rtig4.png';
import ig5 from '../../assets/imgs/collabrisd/rtig5.png';
import InstagramPosts from "./InstagramPosts";

function EventRoundtable() {
  return (
    <div className='flex flex-col gap-8 mt-16 lg:mt-36'>
      <EventHeader
        name='Learn: Roundtable'
        date='sunday, apr 23 @ 7pm!'
        intro='We invited student club leaders, and others who have worked on collaborative projects in the past to speak about their experiences to other students. Attendees learn about the challenges they faced, how they found collborators, and other insights about their collaborative experience. Speakers get the opportunity to gain exposure for their projects and potentially recruit new collaborators or club members.'
      />
      <img src={ roundtable } alt='Roundtable event in progress'/>
      <div>
        <h3 className='text-sm lg:text-base font-bold mb-[0.25rem] font-sans'>event poster</h3>
        <img className='lg:w-3/5' src = {poster} alt = 'Roundtable poster' />
      </div>
      <InstagramPosts posts={[ig1, ig2, ig3, ig4, ig5]} />
    </div>
  )
}

export default EventRoundtable;