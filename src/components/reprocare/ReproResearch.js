import React from "react";
import ContainerGray from "../ContainerGray";
import H1 from "../H1";
import H2 from "../H2";
import PBlurb from "../PBlurb";
import affinity from '../../assets/imgs/reprocare/reproaffinitymap.png';

function ReproResearch() {
  return (
    <ContainerGray>
      <H2>1. research</H2>
      <PBlurb>Even before the overturning of Roe v. Wade in Summer 2022, seeking an abortion was already an extremely stressful experience for people with uteruses. As a woman who grew up in Texas, the overturning of Roe v. Wade sparked in me feelings of anxiety as well as a desire to do something.</PBlurb>
      <div className='flex flex-col gap-[4rem] mt-16 lg:mt-36'>
        <div>
          <H2>sources</H2>
          <H1 className='lg:mr-[40%]'>Interview with medical professional.</H1>
          <PBlurb><b>Kimberly Piontkowski,</b>Brown University MPH '23 + Healthcare Assistant @ Planned Parenthood League of Massachusetts</PBlurb>
          <H1 className='lg:mr-[40%]'>Papers and articles.</H1>
          <PBlurb>Jerman, Jenna et. al, <b>"Barriers to Abortion Care and Their Consequences"</b> <i>Perspectives on sexual and reproductive health</i> vol. 49,2 (2017): 95-102. doi:10.1363/psrh.12024</PBlurb>
          <PBlurb>Kimball, Spencer, <b>"Women in states that ban abortion will still be able to get abortion pills online"</b> CNBC Health and Science. 27 Jun, 2022.</PBlurb>
        </div>
      </div>

      <div>
        <H2>affinity mapping</H2>
        <img src={affinity} alt='Affinity map' />
      </div>
    </ContainerGray>
  )
}

export default ReproResearch;