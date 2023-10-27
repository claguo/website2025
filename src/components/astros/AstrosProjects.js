import React from "react";
import ContainerGray from "../ContainerGray";
import LargeP from "../LargeP";
import H1 from "../H1";
import PBlurb from "../PBlurb";
import affinity from '../../assets/imgs/reprocare/reproaffinitymap.png';

function AstrosProjects() {
  return (
    <ContainerGray>
      <H1>1. projects i worked on</H1>
      <div className='flex flex-col gap-[4rem] mt-16 lg:mt-36'>
        <div>
          <H1>model runner dashboard</H1>
          <LargeP>A tool that allows developers and analysts to easily monitor the status of their data models.</LargeP>
          <PBlurb>The model runner dashboard is a tool that displays the statuses of the Astros' data models so that developers and analysts can quickly identify which models are failing and why.</PBlurb>
        </div>
      </div>

      <div>
        <H1>affinity mapping</H1>
        <img src={affinity} alt='Miro board affinity map' />
      </div>
    </ContainerGray>
  )
}

export default AstrosProjects;