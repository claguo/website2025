import React, { useState } from "react";
import taxidermynotion from '../../assets/imgs/collabrisd/taxidermynotion.png'
import taxidermy from '../../assets/imgs/collabrisd/taxidermy.jpg'

function ImpactCard(props) {
  const icon = '+'
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => {setIsHovered(true)}}
      onMouseLeave={() => {setIsHovered(false)}}
      onClick={() => {setIsOpen(!isOpen)}}
      style={{justifyContent: 'center', padding: '0.5rem 1rem', borderRadius: '18px', backgroundColor: isOpen ? props.color : isHovered ? '#DFDFDF' : '', cursor: isHovered ? 'pointer' : ''}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div className='horizSection'>
          <p>❋</p>
          <b>{props.content}</b>
        </div>
        <b style={{marginLeft: '1rem'}}>{isOpen ? '-' : '+'}</b>
      </div>
      {isOpen 
      // ? <div style={{display: 'flex', height: '100%'}}>
      //     <figure style={{height: '100%'}}>
      //       <img src={taxidermynotion} alt='The Taxidermy Club Notion page' style={{ height: '80%'}}/>
      //       <p>Taxidermy Club in the ideation phase; on our Notion page.</p>
      //     </figure>
      //     <figure style={{height: '100%', width: '60%'}}>
      //       <img src={taxidermy} alt='Taxidermy Club at the RISD 2023 club fair' style={{ height: '80%' }}/>
      //       <p>Taxidermy Club at their first RISD Club Fair (2023)!</p>
      //     </figure>
      //   </div>
      ? props.src.length === 2
        ?<figure style={{margin: '0.5rem 1.25rem 0'}}>
          <div className='horizSection' >
            <img src={props.src[0]} alt='The Taxidermy Club Notion page' style={{ width: '40%'}}/>
            <img src={props.src[1]} alt='Taxidermy Club at the RISD 2023 club fair' style={{ width: '58.7%'}}/>
          </div>
          <div className='horizSection' style={{padding: '0.5rem 0.5rem'}}>
            <p style={{ fontSize: '0.75rem', width: '40%'}}>APR 2023: Taxidermy Club in the ideation phase; on our Notion page.</p>
            <p style={{ fontSize: '0.75rem', width: '58.7%'}}>SEPT 2023: Taxidermy Club recruiting members at their first RISD Club Fair!</p>
          </div>
        </figure>
        :<>
          <figure style={{margin: '0.5rem 1.25rem 0'}}>
            <img src={props.src[0]} alt='Yuqing and collaborators touring the Earthing Lab' style={{ width: '100%'}}/>
            <p style={{ fontSize: '0.75rem', width: '100%'}}>Yuqing and collaborators touring the Earthing Lab!</p>
          </figure>
        </>
      : null}
    </div>
  )
}

export default ImpactCard;