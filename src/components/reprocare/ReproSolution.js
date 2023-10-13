import React from "react";
import wireframes from '../../assets/imgs/reprocare/reprowireframes.png';
import colors from '../../assets/imgs/reprocare/reprocolors.png';
import cover from '../../assets/imgs/reprocare/reprocover.png';
import scale from '../../assets/imgs/reprocare/reproscale.png';
import usa from '../../assets/imgs/reprocare/reprousa.png';
import ContainerGray from "../ContainerGray";
import H2 from "../H2";
import H1 from "../H1";
import PBlurb from "../PBlurb";
import ExternalURLButton from "../ExternalURLButton";

function ReproSolution() {
  return (
    <ContainerGray>
      <H2>3. design solution</H2>
      <div className='flex flex-col'>
        <PBlurb>Based on the key insights, I decided to build an interactive data visualization web app that displays reproductive care-related data from across the globe. This web app seeks to normalize and destigmatize abortion and reveal the network of women experiencing similar difficulties worldwide.</PBlurb>
        <H2 className='mt-16 lg:mt-36'>Prototyping</H2>
        <div className='flex justify-between'>
          <img src={wireframes} alt='Wireframes' className='w-[49%]'/>
          <img src={colors} alt='Wireframes' className='w-[49%]'/>
        </div>

        <H2 className='mt-16 lg:mt-36'>Reproductive Care World</H2>
        <PBlurb> I used React and Globe.gl to create a web app to display abortion-related data in a positive and approachable way. I sourced data from Guttmacher Institute Data Center. 
          <ExternalURLButton text='View The Web App!' url='https://repro-care-world.netlify.app/' isButton={true}/>
        </PBlurb>
        <img className='outline outline-1 mt-2 outline-[#B0B0B0] mt-16 lg:mt-36' src={cover} alt='Reproductive Care World front page with world stats'/>
        
        <div className='flex flex-col lg:flex-row lg:items-center gap-4 mt-16 lg:mt-36'>
          <H1 className='lg:w-2/5'>You are not alone! 1 point on the globe represents 10,000 women.</H1>
          <img className='outline outline-1 mt-2 outline-[#B0B0B0] w-3/5' src={scale} alt='Reproductive Care World front page with world stats'/>
        </div>

        <div className='flex flex-col lg:flex-row lg:items-center gap-6 mt-16 lg:mt-36'>
          <img className='outline outline-1 mt-2 outline-[#B0B0B0] w-3/5' src={usa} alt='Reproductive Care World front page with world stats'/>
          <H1 className='lg:w-2/5'>Big numbers suggest a sense of community.</H1>
        </div>

      </div>
    </ContainerGray>
  )
}

export default ReproSolution;