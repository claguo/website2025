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

function EventSpeedDate() {
  return (
    <div className='section' style={{gap: '3rem'}}>
      <EventHeader
        name='Meet: Speed Date'
        date='sunday, apr 16 @ 4pm!'
        intro='The first event, Collaborative Project Speed Date, is a fun and casual meetup for students to meet others, chat about what they’re currently working on, or brainstorm new ideas!'
      />
      <div className='horizSection'>
      <Figure
        className='third-width'
        src = { sd1 }
        alt = 'Speed Date entrance'
        color = '#D1E84D'
        caption = 'Speed Date entrance!'
      />
      <Figure
        className='third-width'
        src = { sd2 }
        alt = 'Speed Date event'
        color = '#D1E84D'
        caption = 'Brainstorm!'
      />
      <Figure
        className='third-width'
        src = { sd3 }
        alt = 'Prompt-writing table'
        color = '#D1E84D'
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
        <h2> designed materials </h2>
        <p style={{marginRight: '42%'}}>Posters and Instagram posts to spread the word, prompt cards to spark conversations, and profile cards to exchange contact information at the end.</p>
        <div className='horizSection' style={{justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '2rem'}}>
          <img src={poster} alt='Speed Date poster' className='twoColumns' style={{objectFit: 'contain'}}/>
          <div className='twoColumns' style={{paddingRight: '6rem'}}>
            <img src={namecards} alt='Speed Date name cards' style={{ width: '95%' }}/>
            <img src={ideastarters} alt='Speed Date idea starters' style={{ width: '95%' }}/>
          </div>
        </div>
      </div>
      <div>
        <h2>instagram posts</h2>
        <div className='horizSection' style={{justifyContent: 'space-between'}}>
          <img src={ig1} alt='Speed Date Instagram post 1' style={{width: '19%'}} />
          <img src={ig2} alt='Speed Date Instagram post 2' style={{width: '19%'}} />
          <img src={ig3} alt='Speed Date Instagram post 3' style={{width: '19%'}} />
          <img src={ig4} alt='Speed Date Instagram post 4' style={{width: '19%'}} />
          <img src={ig5} alt='Speed Date Instagram post 5' style={{width: '19%'}} />
        </div>
      </div>
    </div>
  )
}

export default EventSpeedDate;