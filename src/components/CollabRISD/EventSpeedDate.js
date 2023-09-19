import React from "react";
import EventHeader from "./EventHeader";
import TwoThreeFigure from "../TwoThreeFigure";
import proto1 from '../../assets/imgs/collabrisd/sdproto1.jpg';
import proto2 from '../../assets/imgs/collabrisd/sdproto2.jpg';

function EventSpeedDate() {
  return (
    <div className='section' style={{gap: '3rem'}}>
      <EventHeader
        name='meet: speed date'
        date='sunday, apr 16 @ 4pm!'
        intro='The first event, Collaborative Project Speed Date, is a fun and casual meetup for students to meet others, chat about what they’re currently working on, or brainstorm new ideas!'
      />
      <img src='/imgs/collab-risd-thumb.png' alt='' style={{ width: '100%' }}/>
      <TwoThreeFigure
        heading='prototyping'
        content={[
          'We invited (xx) RISD students to attend a mock, minimum viable product Speed Date event to test our ideas and receive feedback before the real deal!',
          'We received overwhelmingly positive feedback for this event as attendees successfully connected with students from other majors. Although it was only a mock event, one attendee even expressed that bouncing ideas off of the other attendees helped her with a project she was currently working on.',
          'We noticed that the logistics of the event needed heavy improvement. The timing, organization, and the process of pairing attendees and switching partners was messy, inefficient, and rushed.'
        ]}
        src={proto1}
        alt='sth'
      />
      {/* <figure className='horizSection' style={{ alignItems: 'center' }}>
        <div className='twoColumns paragraphContainer'>
          <h2> prototyping </h2>
          <p> We invited (xx) RISD students to attend a mock, minimum viable product Speed Date event to test our ideas and receive feedback before the real deal! </p>
          <p> We received overwhelmingly positive feedback for this event as attendees successfully connected with students from other majors. Although it was only a mock event, one attendee even expressed that bouncing ideas off of the other attendees helped her with a project she was currently working on. </p>
          <p> We noticed that the logistics of the event needed heavy improvement. The timing, organization, and the process of pairing attendees and switching partners was messy, inefficient, and rushed. </p>
        </div>
        <div className='oneColumn'></div>
        <img className='fourColumns' src='/imgs/collab-risd-thumb.png' alt='img' />
      </figure> */}
      <div>
        <h2> the event (CAROUSEL) </h2>
        <img src='/imgs/collab-risd-thumb.png' alt='' style={{ width: '100%' }}/>
      </div>
    </div>
  )
}

export default EventSpeedDate;