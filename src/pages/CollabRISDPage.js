import React from 'react';
import ProjectHero from '../components/ProjectHero';
import TLDR from '../components/TLDR';
import CollabProblem from '../components/CollabRISD/CollabProblem';
import CollabLocalEvents from '../components/CollabRISD/CollabLocalEvents';
import CollabArchive from '../components/CollabRISD/CollabArchive';
import CollabImpact from '../components/CollabRISD/CollabImpact';
import NextSteps from '../components/NextSteps';

function CollabRISDPage() {
  return (
    <>
      <ProjectHero />
      <TLDR />
      <CollabProblem />
      <CollabLocalEvents />
      <CollabArchive />
      <CollabImpact />
      <NextSteps
        steps={['This project was the first time any of us had hosted an event. We definitely underestimated how much planning each would take. As a result, although we would have liked to hold mock prototyping events for all three events (not just the Speed Date), we did not have the time to.',
        'We hope that next year, these events will go much smoother based on what we learned from holding them this year.',
        'As for the digital archive, next steps involve advertising the Notion as well as populating information in the resource sections.']}
      />
    </>
  )
};

export default CollabRISDPage;