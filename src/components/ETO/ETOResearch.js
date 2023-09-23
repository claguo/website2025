import React from "react";
import InterviewCard from "./InterviewCard";
import ExternalURLButton from "../ExternalURLButton";
import noaa from '../../assets/imgs/eto/etonoaa.png';

function ETOResearch() {
  return (
    <div className='section-gray'>
      <h2>1. research</h2>
      <div className='right-p'>
        <p>New England has a long history of fishing, whaling, ship building, and maritime commerce. The maritime industry is culturally significant and economically essential to the region.
        <b> So, I conducted research to identify a design opportunity related to sustainability in the New England fishing industry.</b></p>
      </div>
      <div style={{marginTop: '6rem'}}>
        <h1>A diverse set of interviews!</h1>
        <div className='horizSection'>
          <InterviewCard emoji='🧔🏻' name='Paul Osimo' location='Providence, RI' desc='Fishing charter captain + commercial fisherman'/>
          <InterviewCard emoji='👱🏻‍♂️' name='Perry Raso' location='South Kingston, RI' desc='Oyster farm + oyster bar owner'/>
          <InterviewCard emoji='👴🏻' name='Matt Behan' location='Charleston, RI' desc='Co-owner of family fish farm'/>
          <InterviewCard emoji='🧔🏽' name='Carlos Sostre' location='India Point Park, RI' desc='Catch-and-release fishing hobbyist'/>
        </div>
      </div>
      <div className='section'>
        <h1 style={{marginRight: '40%'}}>NOAA 2020 Discard Estimation</h1>
        <p className='right-p'>An annual report of species' discarded, amounts discarded, and reason for discard from the National Oceanic and Atmospheric Administration&nbsp;
          <ExternalURLButton url = 'https://www.fisheries.noaa.gov/resource/data/annual-discard-reports-northeast' text = '(NOAA)' />
          . Fish are discarded for many reasons including no market, regulations, and poor quality.</p>
        <h2 style={{marginTop: '1rem'}}>An example: Monkfish chart from the 2020 report</h2>
        <img src={noaa} alt='Monkfish chart from the NOAA 2020 Discard Estimation report' />
      </div>
    </div>
  )
}

export default ETOResearch;