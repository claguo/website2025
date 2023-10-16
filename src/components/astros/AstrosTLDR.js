import React from 'react';
import ContainerGray from '../ContainerGray';
import H2 from '../H2';
import H1 from '../H1';
import PBlurb from '../PBlurb';

function AstrosTLDR() {

  return (
    <ContainerGray>
      <H2> 0. tl;dr </H2>
      <H1 className='lg:mr-[40%]'>Designing data analysis tools for baseball coaches, scouts, and analysts.</H1>
      <PBlurb>During Summer 2023, I designed new features for the Houston Astros baseball team's internal website, which contains immense amounts of detailed data for thousands of players, games, and pitches.</PBlurb>
    </ContainerGray>
  )
}

export default AstrosTLDR;