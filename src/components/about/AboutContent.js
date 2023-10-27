import React from "react";
import LoveCards from './LoveCards';
import ContainerGray from '../ContainerGray';
import LargeP from '../LargeP';
import tulip from '../../assets/imgs/about/tulip.png';
import lily from '../../assets/imgs/about/lily.png';
import smoliv from '../../assets/imgs/about/smoliv.png';
import keroppi from '../../assets/imgs/about/keroppi.png';

function AboutContent() {
  return (
    <ContainerGray>
      <LargeP className='lg:w-2/5'>Nice to meet you!</LargeP>
      <p className='text-sm lg:text-base lg:ml-[40%] mt-2'>I am an industrial designer passionate about building social equity through design! At the core of my design practice is a desire to learn about and work with a diverse range of people and problems to enable me to create more empathetic and inclusive designs.</p>
      <LargeP className='mt-16 lg:mt-36'>Outside of the studio, I am...</LargeP>
      <div className='lg:ml-[40%] mt-2'>
        <LoveCards />
      </div>
      <section className='mt-16 lg:mt-36 flex justify-between'>
        <img src={smoliv} alt='Smoliv the Pokemon' className='w-[10%]'/>
        <img src={tulip} alt='A pink tulip' className='w-[10%]'/>
        <img src={keroppi} alt='Keroppi' className='w-[10%]'/>
        <img src={lily} alt='Lily from Animal Crossing' className='w-[10%]'/>
        <img src={smoliv} alt='Smoliv the Pokemon' className='w-[10%]'/>
        <img src={tulip} alt='A pink tulip' className='w-[10%]'/>
        <img src={keroppi} alt='Keroppi' className='w-[10%]'/>
        <img src={lily} alt='Lily from Animal Crossing' className='w-[10%]'/>
      </section>
    </ContainerGray>
  )
}

export default AboutContent;