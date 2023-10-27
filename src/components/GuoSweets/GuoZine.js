import React from "react";
import pg1 from '../../assets/imgs/guosweets/Claire_Zine-01.png';
import pg2 from '../../assets/imgs/guosweets/Claire_Zine-02.png';
import pg3 from '../../assets/imgs/guosweets/Claire_Zine-03.png';
import pg4 from '../../assets/imgs/guosweets/Claire_Zine-04.png';
import pg5 from '../../assets/imgs/guosweets/Claire_Zine-05.png';
import pg6 from '../../assets/imgs/guosweets/Claire_Zine-06.png';
import pg7 from '../../assets/imgs/guosweets/Claire_Zine-07.png';
import pg8 from '../../assets/imgs/guosweets/Claire_Zine-08.png';
import pg9 from '../../assets/imgs/guosweets/Claire_Zine-09.png';
import pg10 from '../../assets/imgs/guosweets/Claire_Zine-10.png';
import pg11 from '../../assets/imgs/guosweets/Claire_Zine-11.png';
import ContainerGray from "../ContainerGray";
import H1 from "../H1";

function GuoZine() {
  return (
    <ContainerGray>
      <H1>1. the zine</H1>
      <img style={{marginLeft: '50.1%'}} className='zine-img' src={pg1} alt='Page 1' />

      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        <img className='zine-img' src={pg2} alt='Page 2: colophon' />
        <img className='zine-img' src={pg3} alt='Page 3: title page with illustration of my mom and me' />
        <img className='zine-img' src={pg4} alt='Page 4: egg tarts title page' />
        <img className='zine-img' src={pg5} alt='Page 5: egg tart recipe with ingredients and instructions' />
        <img className='zine-img' src={pg6} alt='Page 6: cake roll recipe with ingredients and instructions' />
        <img className='zine-img' src={pg7} alt='Page 7: cake rolls title page' />
        <img className='zine-img' src={pg8} alt='Page 8: snowflake crisps title page' />
        <img className='zine-img' src={pg9} alt='Page 9: snowflake crisp recipe with ingredients and instructions' />
        <img className='zine-img' src={pg10} alt='Page 10: soybean rice balls title page' />
        <img className='zine-img' src={pg11} alt='Page 11: soybean rice ball recipe with ingredients and instructions' />
      </div>
    </ContainerGray>
  )
}

export default GuoZine;