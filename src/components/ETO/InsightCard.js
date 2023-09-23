import React from "react";
import carlos from '../../assets/imgs/eto/etocarlos.png';
import Figure from "../Figure";
import ExternalURLButton from "../ExternalURLButton";

function InsightCard(props) {
  return (
    <div style={{padding: '3rem', backgroundColor: '#dfdfdf', borderRadius: '1rem'}}>
    <h1 style={{color: '#0009E3'}}>❋</h1>
    <h1>{props.insight}</h1>
    <div className='horizSection' style={{marginTop: '2rem'}}>
    {props.id !== '3'
    ? (<p className='threeColumns'>{props.desc}</p>)
    : (<p className='threeColumns'>All of the people I spoke to were very environmentally conscious and followed DEM <ExternalURLButton text='(Department of Environmental Management)' url='https://dem.ri.gov/' /> regulations despite a lack of enforcement.</p>)}
      {props.id !== '3'
      ? (<p className='twoColumns'><b>Sources: </b>{props.sources}</p>)
      : null}
    </div>
    {props.id === '3'
    ? (<>
      <p className='threeColumns' style={{margin: '1rem 0'}}><b>Sources: </b>Carlos, the fishing hobbyist, brings his measuring tape when he goes fishing to ensure his catch meets the DEM minimum length. At both Perry and Matt’s oyster farms, oysters are first carefully hand-filtered by sex, then filtered by size through a machine post catch.</p>
      <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between'}}>
        <Figure className='carlos-width' src={carlos} caption="Carlos' measuring tape." color='#ffffff'/>
        <figure style={{ display: 'flex', flexDirection: 'column', borderRadius: '4px', overflow: 'hidden' }}>
          <iframe
            title="Behan family farm filtering oysters"
            src="https://player.vimeo.com/video/747116950"
            width="640"
            height="360"
            allowFullScreen
          ></iframe>
          <p style={{ backgroundColor: '#ffffff', padding: '1rem', fontWeight: 'bold' }}>Behan family farm filtering oysters by sex and size.</p>
        </figure>

        {/* <img style={{width: '30%'}} src={carlos} alt="Picture of Carlos' fishing setup at India Point Park" /> */}

      </div>

      </>)
    : null}
  </div>
  )
}

export default InsightCard;