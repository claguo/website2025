import React from "react";
import EventHeader from "./EventHeader";
import TwoFourFigure from "../TwoThreeFigure";
import cover from '../../assets/imgs/collabrisd/projfair.jpg';
import bdw from '../../assets/imgs/collabrisd/pfbdw.jpg';
import cs from '../../assets/imgs/collabrisd/pfcs.jpg';
import ch from '../../assets/imgs/collabrisd/pfcarrhaus.jpg';
import cb from '../../assets/imgs/collabrisd/pfcb.JPG';
import met from '../../assets/imgs/collabrisd/pfmet.JPG';
import Figure from '../Figure';

function EventProjectFair() {
  return (
    <div className='section' style={{gap: '3rem'}}>
      <EventHeader
        name='collab: project fair'
        date='sunday, apr 30 @ 4pm!'
        intro='The Project Fair is a decentralized event: we built five standing boards to that display projects submitted by students. These boards were then distributed to five different locations around RISD and Brown campus as a way to advertise ongoing projects and new developing ideas.'
      />
      <img src={ cover } alt='Roundtable event' style={{ width: '100%' }}/>
      {/* <figure style={{ display: 'flex', justifyContent: 'flex-end'}}>
        <img src='/imgs/collab-risd-thumb.png' alt='roundtable img' className='fourColumns' />
      </figure> */}
      <div>
        <h2 className='twoColumns'>collab boards around campus</h2>
        <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
          <Figure className='twoColumns' src = {bdw} alt = 'Project fair at Brown Design Workshop' color = '#EBB2FC' caption = '@Brown Design Workshop' />
          <Figure className='threeColumns' src = {cs} alt = 'Project fair at Brown Computer Science Building' color = '#EBB2FC' caption = '@Brown Computer Science Building' />
          <Figure className='oneColumn' src = {ch} alt = 'Project fair at Carr Haus' color = '#EBB2FC' caption = '@RISD Carr Haus' />
          <Figure className='twoColumns' src = {cb} alt = 'Project fair at RISD College Building' color = '#EBB2FC' caption = '@RISD College Building' />
          <Figure className='twoColumns' src = {met} alt = 'Project fair at the Met' color = '#EBB2FC' caption = '@The Met Dining Hall' />
        </div>
      </div>
    </div>
  )
}

export default EventProjectFair;