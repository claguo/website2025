import React from "react";
import EventHeader from "./EventHeader";
import roundtable from '../../assets/imgs/collabrisd/Roundtable-04.jpg';
import poster from '../../assets/imgs/collabrisd/rtposter.png';
import ig1 from '../../assets/imgs/collabrisd/rtig1.png';
import ig2 from '../../assets/imgs/collabrisd/rdig2.png';
import ig3 from '../../assets/imgs/collabrisd/rdig3.png';
import ig4 from '../../assets/imgs/collabrisd/rtig4.png';
import ig5 from '../../assets/imgs/collabrisd/rtig5.png';

function EventRoundtable() {
  return (
    <div className='section' style={{gap: '3rem'}}>
      <EventHeader
        name='Learn: Roundtable'
        date='sunday, apr 23 @ 7pm!'
        intro='We invited student club leaders, and others who have worked on collaborative projects in the past to speak about their experiences to other students. Attendees learn about the challenges they faced, how they found collborators, and other insights about their collaborative experience. Speakers get the opportunity to gain exposure for their projects and potentially recruit new collaborators or club members.'
      />
    {/* <figure style={{ display: 'flex', justifyContent: 'flex-end'}}>
      <img src='/imgs/collab-risd-thumb.png' alt='roundtable img' className='fourColumns' />
    </figure> */}
      <img src={ roundtable } alt='Roundtable event'/>
      <div className='horizSection'>
        <h2 className='twoColumns'>event poster</h2>
        <img className='threeColumns' src = {poster} alt = 'Roundtable poster' />
      </div>
      <div>
        <h2>instagram posts</h2>
        <div className='horizSection' style={{justifyContent: 'space-between'}}>
          <img src={ig1} alt='Roundtable Instagram post 1' style={{width: '19%'}} />
          <img src={ig2} alt='Roundtable Instagram post 2' style={{width: '19%'}} />
          <img src={ig3} alt='Roundtable Instagram post 3' style={{width: '19%'}} />
          <img src={ig4} alt='Roundtable Instagram post 4' style={{width: '19%'}} />
          <img src={ig5} alt='Roundtable Instagram post 5' style={{width: '19%'}} />
        </div>
      </div>
    </div>
  )
}

export default EventRoundtable;