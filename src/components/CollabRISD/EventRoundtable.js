import React from "react";
import EventHeader from "./EventHeader";
import roundtable from '../../assets/imgs/collabrisd/Roundtable-04.jpg';

function EventRoundtable() {
  return (
    <div className='section' style={{gap: '3rem'}}>
      <EventHeader
        name='learn: roundtable'
        date='sunday, apr 23 @ 7pm!'
        intro='For the second event, Roundtable, we invited student club leaders, etc etc etc to speak about their collaborative experiences to other students. Attendees learn from past collaborators about the challenges they faced, how theyand other insights about their collaborative experience. Speakers get the opportunity to gain exposure for their projects and potentially recruit new collaborators or club members.'
      />
    {/* <figure style={{ display: 'flex', justifyContent: 'flex-end'}}>
      <img src='/imgs/collab-risd-thumb.png' alt='roundtable img' className='fourColumns' />
    </figure> */}
      <img src={ roundtable } alt='Roundtable event' style={{ width: '100%' }}/>
    </div>
  )
}

export default EventRoundtable;