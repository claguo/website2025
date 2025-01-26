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
import InstagramPosts from "./InstagramPosts";
import ContentWrapper from "../general/ContentWrapper";
import Content from "../Content";

function EventSpeedDate() {
  return (
    <ContentWrapper className="bg-[#FAFFE0]">
      <div className="flex flex-col gap-[0.5rem] items-center">
        <div className="font-mono font-bold">1</div>
        <h3>Meet: Speed Date</h3>
        <p className="text-center lg:px-[6rem]">A fun, casual meetup for students to find collaborators or brainstorm new ideas!</p>
        <p className="font-mono text-xs">Sunday, April 16, 4PM @ Upper Quad MET Room B</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-[1rem]">
        <figure>
          <img src={sd1} alt="The door to the Speed Date event with our bright green poster."/>
          <p className="bg-[#D1E84D] p-[0.5rem]">Speed Date event entrance.</p>
        </figure>
        <figure>
          <img src={sd2} alt="Students using our prompt cards, brainstorming around a table."/>
          <p className="bg-[#D1E84D] p-[0.5rem]">Collaborative brainstoming session.</p>
        </figure>
        <figure>
          <img src={sd3} alt="The event in progress: students paired up and discussing their ideas."/>
          <p className="bg-[#D1E84D] p-[0.5rem]">Pair up, exchange ideas, and rotate!</p>
        </figure>
      </div>
      <Content
        summary="Materials designed by me!"
        paragraph="Event posters, prompt cards to spark conversations, and attendee profile cards to exchange contact information at the end."
      />
      <div className='flex flex-col lg:flex-row justify-between gap-4'>
        <img src={poster} alt='Speed Date poster' className='object-contain lg:w-[48%]'/>
        <div className='lg:w-[44%] flex flex-col gap-4'>
          <img src={namecards} alt='Speed Date name cards'/>
          <img src={ideastarters} alt='Speed Date idea starters'/>
        </div>
      </div>
      <InstagramPosts posts={[ig1, ig2, ig3, ig4, ig5]} />

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
    </ContentWrapper>
  )
}

export default EventSpeedDate;