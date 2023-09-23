import React from 'react'
import ProjectNavButtons from '../components/ProjectNavButtons';
import ProjectHero from '../components/ProjectHero';
import ETOTLDR from '../components/ETO/ETOTLDR';
import ETOResearch from '../components/ETO/ETOResearch';
import ETOInsights from '../components/ETO/ETOInsights';
import ETODesignSolution from '../components/ETO/ETODesignSolution';

function EatTheOceanPage() {
  return (
    <>
      <ProjectHero />
      <ETOTLDR />
      <ETOResearch />
      <ETOInsights />
      <ETODesignSolution />
      <ProjectNavButtons />
    </>
  )
}

export default EatTheOceanPage;
