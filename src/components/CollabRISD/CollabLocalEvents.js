import React from "react";
import EventSpeedDate from './EventSpeedDate.js'
import EventRoundtable from "./EventRoundtable.js";
import EventProjectFair from "./EventProjectFair.js";

function CollabLocalEvents() {
  return (
    <div className='section-gray'>
      <div className='horizSection'>
        <h2 className='twoColumns'> 2. three local events </h2>      
        <p className='threeColumns'> We hosted a series of three events with different purposes to help students gain a better understanding of how to collaborate at RISD and facilitate the beginning of potential collaborative projects. These projects, we imagine, would be held annually near the end of Spring semester to help kickstart summer projects and RISD Collaborative Study Projects for the next Fall semester. </p>
      </div>
      <EventSpeedDate />
      <EventRoundtable />
      <EventProjectFair />
    </div>
  )
}

export default CollabLocalEvents;