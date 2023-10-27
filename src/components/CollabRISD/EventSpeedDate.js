import React from "react";
import EventHeader from "./EventHeader";
import ig1 from '../../assets/imgs/collabrisd/sdinstagram.png';
import ig2 from '../../assets/imgs/collabrisd/sdinstagram2.png';
import ig3 from '../../assets/imgs/collabrisd/sdinstagram3.png';
import ig4 from '../../assets/imgs/collabrisd/sdinstagram4.png';
import ig5 from '../../assets/imgs/collabrisd/sdinstagram5.png';
import ideastarters from '../../assets/imgs/collabrisd/sdideastarters.png';
import namecards from '../../assets/imgs/collabrisd/sdnamecards.png';
import poster from '../../assets/imgs/collabrisd/sdposter.png';
import sd1 from '../../assets/imgs/collabrisd/speeddate2.jpg';
import sd3 from '../../assets/imgs/collabrisd/speeddate3.jpg';
import sd2 from '../../assets/imgs/collabrisd/speeddate1.jpg';
import Figure from "../Figure";
import InstagramPosts from "./InstagramPosts";

function EventSpeedDate() {
  return (
    <div className='flex flex-col gap-8 mt-16 lg:mt-36'>
      <EventHeader
        name='Meet: Speed Date'
        date='sunday, apr 16 @ 4pm!'
        intro='The first event, Collaborative Project Speed Date, is a fun and casual meetup for students to meet others, chat about what they’re currently working on, or brainstorm new ideas!'
      />
      <div className='flex flex-col lg:flex-row gap-4'>
        <Figure
          className='lg:w-[32.3%]'
          src = { sd1 }
          alt = 'The door to the Speed Date event with our bright green poster.'
          color = 'bg-[#D1E84D]'
          caption = 'Speed Date entrance!'
        />
        <Figure
          className='lg:w-[32.3%]'
          src = { sd2 }
          alt = 'Students using our prompt cards, brainstorming around a table.'
          color = 'bg-[#D1E84D]'
          caption = 'Brainstorm!'
        />
        <Figure
          className='lg:w-[32.3%]'
          src = { sd3 }
          alt = 'The event in progress: students paired up and discussing their ideas.'
          color = 'bg-[#D1E84D]'
          caption = 'Pair up, exchange ideas, and rotate!'
        />
      </div>
      {/* PROTOYPING SECTION
      <figure className='horizSection' style={{ alignItems: 'center' }}>
        <img className='threeColumns' src={proto1} alt='' />
        <div>
          <h2>prototyping</h2>
          <div className='paragraphContainer'>
            <p>We invited (xx) RISD students to attend a mock, minimum viable product Speed Date event to test our ideas and receive feedback before the real deal!</p>
            <p>We received overwhelmingly positive feedback for this event as attendees successfully connected with students from other majors. Although it was only a mock event, one attendee even expressed that bouncing ideas off of the other attendees helped her with a project she was currently working on.</p>
            <p>We noticed that the logistics of the event needed heavy improvement. The timing, organization, and the process of pairing attendees and switching partners was messy, inefficient, and rushed.</p>
          </div>
        </div>
      </figure> */}
      <div>
        <h3 className='text-sm lg:text-base font-bold mb-[0.25rem] font-sans'> designed materials </h3>
        <p className='text-sm lg:text-base lg:mr-[40%]'>Posters and Instagram posts to spread the word, prompt cards to spark conversations, and profile cards to exchange contact information at the end.</p>
        <div className='flex flex-col lg:flex-row justify-between mt-4 gap-4'>
          <img src={poster} alt='Speed Date poster' className='object-contain lg:w-[48%]'/>
          <div className='lg:w-[44%] flex flex-col gap-4'>
            <img src={namecards} alt='Speed Date name cards'/>
            <img src={ideastarters} alt='Speed Date idea starters'/>
          </div>
        </div>
      </div>
      <InstagramPosts posts={[ig1, ig2, ig3, ig4, ig5]} />
    </div>
  )
}

export default EventSpeedDate;