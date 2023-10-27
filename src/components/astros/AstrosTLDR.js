import React from 'react';
import ContainerGray from '../ContainerGray';
import H1 from '../H1';
import LargeP from '../LargeP';
import PBlurb from '../PBlurb';

function AstrosTLDR() {

  return (
    <ContainerGray>
      <H1> 0. tl;dr </H1>
      <LargeP className='lg:mr-[40%]'>Designing data analysis tools for baseball coaches, scouts, and analysts.</LargeP>
      <PBlurb>During Summer 2023, I designed new features for the Houston Astros baseball team's internal website, which contains immense amounts of detailed data for thousands of players, games, and pitches.</PBlurb>
    </ContainerGray>
  )
}

export default AstrosTLDR;