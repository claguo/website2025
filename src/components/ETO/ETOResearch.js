import React from "react";
import InterviewCard from "./InterviewCard";
import ExternalURLButton from "../ExternalURLButton";
import noaa from '../../assets/imgs/eto/etonoaa.png';
import ContainerGray from "../ContainerGray";
import LargeP from "../LargeP";
import H1 from "../H1";
import PBlurb from "../PBlurb";

function ETOResearch() {
  return (
    <ContainerGray>
      <H1>1. research</H1>
      <PBlurb>New England has a long history of fishing, whaling, ship building, and maritime commerce. The maritime industry is culturally significant and economically essential to the region.
        <b> So, I conducted research to identify a design opportunity related to sustainability in the New England fishing industry.</b>
      </PBlurb>
      <div className='flex flex-col gap-4 mt-16 lg:mt-36'>
        <LargeP>A diverse set of interviews!</LargeP>
        <div className='flex flex-col lg:flex-row justify-between gap-2'>
          <InterviewCard emoji='🧔🏻' name='Paul Osimo' location='Providence, RI' desc='Fishing charter captain + commercial fisherman'/>
          <InterviewCard emoji='👱🏻‍♂️' name='Perry Raso' location='South Kingston, RI' desc='Oyster farm + oyster bar owner'/>
          <InterviewCard emoji='👴🏻' name='Matt Behan' location='Charleston, RI' desc='Co-owner of family fish farm'/>
          <InterviewCard emoji='🧔🏽' name='Carlos Sostre' location='India Point Park, RI' desc='Catch-and-release fishing hobbyist'/>
        </div>
      </div>
      <div className='flex flex-col gap-2 mt-16 lg:mt-36'>
        <LargeP>NOAA 2020 Discard Estimation</LargeP>
        <PBlurb>An annual report of species' discarded, amounts discarded, and reason for discard from the National Oceanic and Atmospheric Administration&nbsp;
          <ExternalURLButton url = 'https://www.fisheries.noaa.gov/resource/data/annual-discard-reports-northeast' text = '(NOAA)' />
          . Fish are discarded for many reasons including no market, regulations, and poor quality.</PBlurb>
        <p className='text-sm lg:text-base font-bold mb-[0.25rem] font-sans'>An example: Monkfish chart from the 2020 report</p>
        <img src={noaa} alt='Monkfish chart from the NOAA 2020 Discard Estimation report' />
      </div>
    </ContainerGray>
  )
}

export default ETOResearch;