import React from "react";
import ExternalURLButton from "../buttons/ExternalURLButton";
import projects from '../../assets/imgs/collabrisd/archiveprojects.png';
import taxidermy from '../../assets/imgs/collabrisd/taxidermynotion.png';
import mobile from '../../assets/imgs/collabrisd/notionmobile.PNG';
import ContainerGray from "../ContainerGray";
import H1 from "../H1";
import LargeP from "../LargeP";
import PBlurb from "../PBlurb";

function CollabArchive() {
  return (
    <ContainerGray>
      <H1>4. digital archive</H1>
      <LargeP className='lg:mr-[40%]'>A digital archive of projects looking for collaborators and collaboration resources.</LargeP>
      <PBlurb className='flex flex-col'>This transition into the digital realm enhances accessibility, as the digital archive is free from the constraints of time and location that events typically entail. This means that our resources remain accessible to anyone, around the clock.
        <ExternalURLButton className='self-center lg:self-start' url='https://lily-sandalwood-e02.notion.site/Cabinet-of-Collaboration-634ebe90250b40f5a04e9c2cf380bdf9?pvs=4' text='View Our Notion Page!' isButton={true} />
      </PBlurb>
      <img className='mt-8' src={projects} alt='Projects archive' />
      <div className='flex justify-between'>
        <img className='w-[32.8%] mt-4 object-contain' src={mobile} alt="Notion page on mobile" />
        <img className='w-[65.4%] mt-4 object-contain' src={taxidermy} alt="Taxidermy club's Notion page" />
      </div>
    </ContainerGray>
  )
}

export default CollabArchive;