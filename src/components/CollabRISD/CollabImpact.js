import React from "react";
import ImpactCard from "./ImpactCard";
import taxidermynotion from '../../assets/imgs/collabrisd/taxidermynotion.png'
import taxidermy from '../../assets/imgs/collabrisd/taxidermy.jpg'
import earthling from '../../assets/imgs/collabrisd/earthling.png'
import jenny from '../../assets/imgs/collabrisd/jennytoys.png'
import yue from '../../assets/imgs/collabrisd/speeddate3.jpg'
import collab from '../../assets/imgs/collabrisd/collabcampusnotion.png'
import ContentWrapper from "../general/ContentWrapper";
import LargeP from "../LargeP";
import { IoStarSharp } from "react-icons/io5";

function CollabImpact() {
  return ( 
    <ContentWrapper>
      <div className="flex flex-col gap-[0.5rem] items-center">
        <IoStarSharp />
        <h2>Impact</h2>
        <p>Connections created; projects launched!</p>
      </div>
      <div className='flex flex-col lg:flex-row gap-[8rem]'>
        <div className='flex flex-col gap-[6rem] flex-1'>
          <ImpactCard 
            color='bg-[#EBB2FC]'
            content="Wendy launched RISD's first Taxidermy Club with collaborators!"
            src={[taxidermy]}
            caption={['Here, Taxidermy Club is recruiting members at their first RISD Club Fair.']}/>
          <ImpactCard 
            color='bg-[#D1E84D]'
            content='Jenny, a product designer, partnered with an engineer at Brown to bring technical expertise to her personal project.'
            src={[jenny]}
            caption={["This is Jenny's toy design project on our Notion page, in the ideation phase."]}/>          
          <ImpactCard 
            color='bg-[#FC7247]'
            content='Yue is planning a CSP with people she met through our events.'
            src={[yue]}
            caption={['Yue met collaborators at our Speed Date event!']}/>
        </div>
        <div className='flex flex-col gap-[6rem] justify-center flex-1'>
        <ImpactCard
            color='bg-[#EBB2FC]'
            content='Yuqing recruited Earthling Lab members.'
            src={[earthling]}
            caption={['Yuqing and collaborators touring the Earthing Lab! This group included both Brown and RISD students and grad and undergrad students, in varying majors, but with a common interest in sustainability research.']}/>
          <ImpactCard 
            color='bg-[#FC7247]'
            content='6 people are interested in carrying on THIS project (Collab @ RISD) next year!'
            src={[collab]}
            caption={['Our own Notion project page, where we recruited collaborators!']}/>
        </div>
      </div>
    </ContentWrapper>
  )
}

export default CollabImpact;