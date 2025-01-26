import React from "react";
import EventSpeedDate from './EventSpeedDate.js'
import EventRoundtable from "./EventRoundtable.js";
import EventProjectFair from "./EventProjectFair.js";
import ContentWrapper from "../general/ContentWrapper.js";
import { IoStarSharp } from "react-icons/io5";

function CollabLocalEvents() {
  return (
    <>
    <ContentWrapper>
      <div className="flex flex-col gap-[0.5rem] items-center">
        <IoStarSharp />
        <h2>Solution 1: Three Local Events</h2>
      </div>
      <div className="flex flex-col gap-[1rem] lg:px-[6rem]">
        <p className='text-center'>We hosted a series of three events with different purposes to help students gain a better understanding of how to collaborate at RISD and facilitate the beginning of potential collaborative projects.</p>
        <p className='text-center'>These projects, we imagine, would be held annually near the end of Spring semester to help kickstart summer projects and RISD Collaborative Study Projects for the next Fall semester.</p>
      </div>
    </ContentWrapper>
    <EventSpeedDate />
    <EventRoundtable />
    <EventProjectFair />
    </>
  )
}

export default CollabLocalEvents;