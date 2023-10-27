import React from "react";
import EventSpeedDate from './EventSpeedDate.js'
import EventRoundtable from "./EventRoundtable.js";
import EventProjectFair from "./EventProjectFair.js";
import ContainerGray from "../ContainerGray.js";
import H1 from "../H1.js";

function CollabLocalEvents() {
  return (
    <ContainerGray>
        <H1> 3. three local events </H1>      
        <p className='lg:mr-[20%] text-sm lg:text-base'> We hosted a series of three events with different purposes to help students gain a better understanding of how to collaborate at RISD and facilitate the beginning of potential collaborative projects. These projects, we imagine, would be held annually near the end of Spring semester to help kickstart summer projects and RISD Collaborative Study Projects for the next Fall semester. </p>
      <EventSpeedDate />
      <EventRoundtable />
      <EventProjectFair />
    </ContainerGray>
  )
}

export default CollabLocalEvents;