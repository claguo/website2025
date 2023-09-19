import React from "react";
import ImpactCard from "./ImpactCard";
import taxidermynotion from '../../assets/imgs/collabrisd/taxidermynotion.png'
import taxidermy from '../../assets/imgs/collabrisd/taxidermy.jpg'
import earthling from '../../assets/imgs/collabrisd/earthling.png'

function CollabImpact() {
  return ( 
    <div className='section-gray'>
      <div className='horizSection'>
        <h2 className='twoColumns'> 4. impact </h2>      
        <div className='paragraphContainer threeColumns'>
          <ImpactCard 
            color='#EBB2FC'
            content="Wendy found collaborators to found RISD's first Taxidermy Club with!"
            src={[taxidermynotion, taxidermy]}/>
          <ImpactCard
            color='#FC7247'
            content='6-7 people reached out to Yuqing about the Earthling Lab! She took a group of 10 people on a tour of the lab. The group included Brown and RISD students, grad and undergrad students, and students in several different majors).'
            src={[earthling]} />
          <ImpactCard 
            color='#D1E84D'
            content='Jenny, who was looking for engineers with a more technical background for her toy design project, received one response from Brown!'/>
          <ImpactCard 
            color='#EBB2FC'
            content='Yue said she is now planning a CSP with people she met through our events!'/>
          <ImpactCard 
            color='#FC7247'
            content='6 people are interested in carrying on THIS project (Campus Collab) next year!'/>
        </div>
      </div>
    </div>
  )
}

export default CollabImpact;