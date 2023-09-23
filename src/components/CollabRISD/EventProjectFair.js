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
    <div className='section' style={{gap: '3rem'}}>
      <EventHeader
        name='Collab: Project Fair'
        date='sunday, apr 30 @ 4pm!'
        intro='The Project Fair is a decentralized event: we built five standing boards to that display projects submitted by students. These boards were then distributed to five different locations around RISD and Brown campus as a way to advertise ongoing projects and new developing ideas.'
      />
      <img src={ cover } alt='Project Fair event'/>
      {/* <figure style={{ display: 'flex', justifyContent: 'flex-end'}}>
        <img src='/imgs/collab-risd-thumb.png' alt='roundtable img' className='fourColumns' />
      </figure> */}
      <figure className='horizSection'>
        <h2 className='twoColumns'>posters</h2>
        <div className='threeColumns horizSection'>
          <img src={poster} style={{width: '50%'}} alt='Project Fair main poster' />
          <img src={boarddesign} style={{width: '50%'}} alt='Project Fair board poster' />
        </div>
      </figure>
      <div>
        <h2>collab boards around campus</h2>
        <div className='horizSection' style={{justifyContent: 'space-between'}}>
          <Figure className='oneColumn caption' src = {bdw} alt = 'Project fair at Brown Design Workshop' color = '#FC7247' caption = '@Brown Design Workshop' />
          <Figure className='oneColumn caption' src = {cs} alt = 'Project fair at Brown Computer Science Building' color = '#FC7247' caption = '@Brown CS Building' />
          <Figure className='oneColumn caption' src = {ch} alt = 'Project fair at Carr Haus' color = '#FC7247' caption = '@RISD Carr Haus Cafe' />
          <Figure className='oneColumn caption' src = {cb} alt = 'Project fair at RISD College Building' color = '#FC7247' caption = '@RISD College Building' />
          <Figure className='oneColumn caption' src = {met} alt = 'Project fair at the Met' color = '#FC7247' caption = '@The Met Dining Hall' />
        </div>
      </div>
    </div>
  )
}

export default EventProjectFair;