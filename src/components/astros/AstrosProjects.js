import React from "react";
import ContainerGray from "../ContainerGray";
import H1 from "../H1";
import H2 from "../H2";
import PBlurb from "../PBlurb";
import affinity from '../../assets/imgs/reprocare/reproaffinitymap.png';

function AstrosProjects() {
  return (
    <ContainerGray>
      <H2>1. projects i worked on</H2>
      <div className='flex flex-col gap-[4rem] mt-16 lg:mt-36'>
        <div>
          <H2>model runner dashboard</H2>
          <H1>A tool that allows developers and analysts to easily monitor the status of their data models.</H1>
          <PBlurb>The model runner dashboard is a tool that displays the statuses of the Astros' data models so that developers and analysts can quickly identify which models are failing and why.</PBlurb>
        </div>
      </div>

      <div>
        <H2>affinity mapping</H2>
        <img src={affinity} alt='Affinity map' />
      </div>
    </ContainerGray>
  )
}

export default AstrosProjects;