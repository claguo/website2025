import React from "react";
import sd1 from '../../assets/imgs/collabrisd/speeddate2.jpg';
import sd2 from '../../assets/imgs/collabrisd/speeddate3.jpg';

function EventHeader(props) {
  return (
    <>
      <div>
        <h2 style={{ color: '#00D287', transform: 'rotate(-2.247deg)' }}> { props.date } </h2>
        <h1 style={{ marginBottom: '0.5rem' }}> { props.name } </h1>
        <div className='right-align-container'>
          <p className='threeColumns'> {props.intro } </p>
        </div>
      </div>
      { props.name ==='meet: speed date' ?
        <div className='horizSection'>
          <img src={sd1} alt='Prompt-writing table' style={{ width: '39.68%' }}/>
          <img src={sd2} alt='Prompt-writing table' style={{ width: '59.52%' }}/>
        </div>
        : null
      }
    </>
  )
}

export default EventHeader;