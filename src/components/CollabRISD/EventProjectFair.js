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
import Content from "../Content";
import ContentWrapper from "../general/ContentWrapper";

function EventProjectFair() {
  return (
    <ContentWrapper className="bg-[#FFE4D5]">
      <div className="flex flex-col gap-[0.5rem] items-center">
        <div className="font-mono font-bold">3</div>
        <h3>Discover: Project Fair</h3>
        <p className="text-center lg:px-[6rem]">The Project Fair is a decentralized event: we built five free-standing boards to that display projects submitted by students. These boards were then distributed to five different locations around RISD and Brown campus as a way to advertise ongoing projects and new developing ideas.</p>
        <p className="font-mono text-xs">Sunday, April 30, 4PM @ 20 Washington Place Lobby</p>
      </div>
      <img src={ cover } alt='Roundtable event in progress'/>
      {/* <p className="text-center lg: px-[6rem]">Attendees learn about the challenges they faced, how they found collborators, and other insights about their collaborative experience. Speakers get the opportunity to gain exposure for their projects and potentially recruit new collaborators or club members.</p> */}
      <Content
        summary="Materials designed by me!"
        paragraph="Event poster and display boards."
      >
        <div className='flex justify-between'>
          <img src={poster} className='w-[49%]' alt='Project Fair advertising poster' />
          <img src={boarddesign} className='w-[49%]' alt='Project Fair board poster' />
        </div>
      </Content>
      <div className="w-[100%]">
        <h3 className='text-sm lg:text-base font-bold mb-[1rem] font-sans'>Collab boards around campus.</h3>
        <div className='flex gap-[0.5rem] lg:justify-between w-[100%]'>
          <figure className="flex-1">
            <img src={bdw} alt="Project fair set up at Brown Design Workshop."/>
            <p className="bg-[#FB7A52] p-[0.5rem]">Brown Design Workshop</p>
          </figure>
          <figure className="flex-1">
            <img src={cs} alt="Project fair set up at Brown Computer Science Building."/>
            <p className="bg-[#FB7A52] p-[0.5rem]">Brown Computer Science Building</p>
          </figure>
          <figure className="flex-1">
            <img src={ch} alt="Project fair set up at Carr Haus Cafe"/>
            <p className="bg-[#FB7A52] p-[0.5rem]">Carr Haus Cafe</p>
          </figure>
          <figure className="flex-1">
            <img src={cb} alt="Project fair set up at RISD College Building"/>
            <p className="bg-[#FB7A52] p-[0.5rem]">RISD College Building</p>
          </figure>
          <figure className="flex-1">
            <img src={met} alt="Project fair set up at the Met dining hall"/>
            <p className="bg-[#FB7A52] p-[0.5rem]">The MET dining hall</p>
          </figure>
        </div>
      </div>
    </ContentWrapper>
  )
}

export default EventProjectFair;