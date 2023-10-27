import React from "react";
import ContainerGray from "../ContainerGray";
import LargeP from "../LargeP";
import H1 from "../H1";
import PBlurb from "../PBlurb";
import affinity from '../../assets/imgs/reprocare/reproaffinitymap.png';

function ReproResearch() {
  return (
    <ContainerGray>
      <H1>1. research</H1>
      <p className='lg:mr-[20%] text-sm lg:text-base'>Even before the overturning of Roe v. Wade in Summer 2022, seeking an abortion was already an extremely stressful experience for people with uteruses. As a woman who grew up in Texas, the overturning of Roe v. Wade sparked in me feelings of anxiety as well as a desire to do something.</p>
      <div className='flex flex-col gap-[4rem] mt-16 lg:mt-36'>
        <div>
          <h2 className='text-sm lg:text-base font-bold mb-[0.25rem] font-sans'>sources</h2>
          <LargeP className='lg:mr-[40%]'>Interview with medical professional, papers, and articles.</LargeP>
          <PBlurb><b>Kimberly Piontkowski,</b>Brown University MPH '23 + Healthcare Assistant @ Planned Parenthood League of Massachusetts</PBlurb>
          <PBlurb>Jerman, Jenna et. al, <b>"Barriers to Abortion Care and Their Consequences"</b> <i>Perspectives on sexual and reproductive health</i> vol. 49,2 (2017): 95-102. doi:10.1363/psrh.12024</PBlurb>
          <PBlurb>Kimball, Spencer, <b>"Women in states that ban abortion will still be able to get abortion pills online"</b> CNBC Health and Science. 27 Jun, 2022.</PBlurb>
        </div>
      </div>

      <div>
        <h2 className='text-sm lg:text-base font-bold mb-[0.25rem] font-sans'>affinity mapping</h2>
        <img src={affinity} alt='Affinity map' />
      </div>
    </ContainerGray>
  )
}

export default ReproResearch;