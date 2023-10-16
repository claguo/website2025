import React from "react";
import AstrosTLDR from "../components/astros/AstrosTLDR";
import ProjectHero from '../components/ProjectHero';
import AstrosProject from '../components/astros/AstrosProject';
import AstrosFinal from "../components/astros/AstrosFinal";
import ProjectNavButtons from "../components/ProjectNavButtons";

function AstrosPage() {
  return (
    <>
      <ProjectHero />
      <AstrosTLDR />
      <AstrosProject name='1. model runner dashboard' content={[
        {
          header: 'A tool that allows developers and analysts to quickly identify which models are failing and why.',
          paragraph: "The model runner dashboard displays the failure and success rates of the Astros' data models so that developers and analysts can monitor their models without needing to write backend queries. My design displays tables of data about individual model runs in an easily readable way."
        },
        {
          header: 'Merging differing expectations into one unified design.',
          paragraph: 'I held meetings with end users (developers and analysts) to learn about what they need for an improved model-monitoring experience. One challenge during this process was that different users had different ideas about what the tool should include, and I worked to combine their various ideas into one.'
        }
      ]} />
      <AstrosProject name='2. scouting report' content={[
        {
          header: 'Redesigning the player evaluation form for baseball scouts.',
          paragraph: "After meeting with Astros scouts to discuss the design of the old scouting report and their visions for a redesigned version, I designed a new form, eliminating redundancies in the flow and improving visual clarity. I also updated the UI with a more contemporary visual style."
        }
      ]} />
      <AstrosProject name='3. data visualization' content={[
        {
          header: 'Improving the display of the immense amounts of information in the Astros databases.',
          paragraph: "I used box plots, line graphs, and two-way tables, and color to redesign the way data is displayed in several different parts of the Astros internal website."
        }
      ]} />
      <AstrosProject name='4. frontend engineering' content={[
        {
          header: 'Implementing my designs and fixing bugs.',
          paragraph: "I used React to help bring three of my designs from Figma to the web. I also fixed several frontend bugs in different areas of the website."
        }
      ]} />
      <AstrosProject name='5. updating ui' content={[
        {
          header: "Redesigning outdated UI across the Astros' internal website.",
          paragraph: ""
        }
      ]} />
      <AstrosFinal />
      <ProjectNavButtons />
    </>
  )
}

export default AstrosPage;