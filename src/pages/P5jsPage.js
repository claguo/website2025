import React from 'react'
import ProjectHero from '../components/ProjectHero';
import TLDR from '../components/ETO/ETOTLDR';
import P5jsExperiments from '../components/P5jsExperiments';
import ProjectNavButtons from '../components/ProjectNavButtons';

function P5jsPage() {
  return (
    <>
      <ProjectHero />
      <TLDR />
      <P5jsExperiments />
      <ProjectNavButtons />
    </>
  )
}

export default P5jsPage;
