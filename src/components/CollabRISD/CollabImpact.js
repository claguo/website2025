import React from "react";
import ImpactCard from "./ImpactCard";
import taxidermynotion from '../../assets/imgs/collabrisd/taxidermynotion.png'
import taxidermy from '../../assets/imgs/collabrisd/taxidermy.jpg'
import earthling from '../../assets/imgs/collabrisd/earthling.png'
import jenny from '../../assets/imgs/collabrisd/jennytoys.png'
import yue from '../../assets/imgs/collabrisd/speeddate3.jpg'
import collab from '../../assets/imgs/collabrisd/collabcampusnotion.png'
import H2 from "../H2";
import ContainerGray from "../ContainerGray";
import H1 from "../H1";

function CollabImpact() {
  return ( 
    <ContainerGray>
      <H2>1. impact</H2>
      <H1 className='lg:mr-[40%]'>Connections created, projects launched!</H1>
      <div className='flex flex-col lg:flex-row gap-4 mt-8'>
        <div className='flex flex-col gap-2 lg:w-1/2'>
          <ImpactCard 
            color='bg-[#EBB2FC]'
            content="Wendy found collaborators to found RISD's first Taxidermy Club with!"
            src={[taxidermynotion, taxidermy]}
            caption={['APR 2023: Taxidermy Club in the ideation phase; on our Notion page.', 'SEPT 2023: Taxidermy Club recruiting members at their first RISD Club Fair!']}/>
          <ImpactCard 
            color='bg-[#FC7247]'
            content='Yue said she is now planning a CSP with people she met through our events!'
            src={[yue]}
            caption={['Yue met collaborators at our Speed Date event!']}/>
          <ImpactCard 
            color='bg-[#D1E84D]'
            content='Jenny, who was looking for engineers with a more technical background for her toy design project, received one response from Brown!'
            src={[jenny]}
            caption={["Jenny's toy design project in the ideation phase; on our Notion page."]}/>
        </div>
        <div className='flex flex-col gap-2 lg:w-1/2'>
        <ImpactCard
            color='bg-[#EBB2FC]'
            content='6-7 people reached out to Yuqing about the Earthling Lab! She took a group of 10 people on a tour of the lab. The group included Brown and RISD students, grad and undergrad students, and students in several different majors.'
            src={[earthling]}
            caption={['Yuqing and collaborators touring the Earthing Lab!']}/>
          <ImpactCard 
            color='bg-[#FC7247]'
            content='6 people are interested in carrying on THIS project (Campus Collab) next year!'
            src={[collab]}
            caption={['Our own Notion project page!']}/>
        </div>
      </div>
    </ContainerGray>
  )
}

export default CollabImpact;