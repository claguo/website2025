import React from "react";
import roundtable from '../../assets/imgs/collabrisd/Roundtable-04.jpg';
import Figure from "../Figure";
import notion from '../../assets/imgs/collabrisd/notion.png'
import ContainerGray from "../ContainerGray";
import H1 from '../H1';
import LargeP from "../LargeP";
import PBlurb from '../PBlurb';

function CollabTLDR() {
  return (
    <ContainerGray>
      <H1>0. tl;dr</H1>
      <LargeP className='lg:mr-[40%]'>Fostering interdisciplinary collaboration @ RISD and Brown.</LargeP>
      <PBlurb>This project was a semester-long Collaborative Study Project, during which a group of 4 other industrial and graphic designers and I sought to increase interdisciplinary collaboration at RISD. Over the course of four months, we designed, tested, and implemented two solutions:</PBlurb>
      <div className='flex flex-col lg:flex-row gap-4 mt-8'>
        <Figure
        className='lg:w-1/2'
        src={roundtable}
        alt='The Roundtable event: a presenter presenting to an audience of 18 people.'
        color = '#D1E84D'
        caption = '1. A series of 3 events @ RISD to help students connect and collaborate locally.'
        />
        <Figure
        className='lg:w-1/2'
        src = { notion }
        alt = 'Screenshot of our Notion archive with a fun, illustrated banner, a link to project submission, and links to resources.'
        color = '#EBB2FC'
        caption = '2. A digital archive as a platform for outreach and information sharing globally.'
        />
      </div>
    </ContainerGray>
  )
}

export default CollabTLDR;