import React, {useState, useEffect} from "react";
import carlos from '../assets/imgs/eto/etocarlos.png';
import Figure from "./Figure";
import ExternalURLButton from "./ExternalURLButton";
import LargeP from "./LargeP";

function InsightCard(props) {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;

  return (
    <div className='bg-gray px-6 py-4 lg:px-16 lg:py-8 rounded'>
    <LargeP className='text-[#0009E3]'>❋</LargeP>
    <LargeP>{props.insight}</LargeP>
    <div className='flex flex-col mt-4 text-sm lg:text-base gap-2'>
    {props.desc
    ? (<p>{props.desc}</p>)
    : (<p>All of the people I spoke to were very environmentally conscious and followed <ExternalURLButton text='DEM' url='https://dem.ri.gov/' /> (Department of Environmental Management) regulations despite a lack of enforcement.</p>)}
      {props.sources
      ? (<p><b>Sources: </b>{props.sources}</p>)
      : null}
    </div>
    {props.desc === ''
    ? (<>
      <p className='text-sm lg:text-base mt-2'><b>Sources: </b>Carlos, the fishing hobbyist, brings his measuring tape when he goes fishing to ensure his catch meets the DEM minimum length. At both Perry and Matt’s oyster farms, oysters are first carefully hand-filtered by sex, then filtered by size through a machine post catch.</p>
      <div className='flex flex-col lg:flex-row items-end justify-between mt-4'>
        <Figure className='lg:w-[28%]' src={carlos} caption="Carlos' fishing setup at India Point Park: his fishing pole, measuring tape, and a fish he caught in a bucket." color='bg-[#ffffff]'/>
        {!isMobile
        ? <figure className='w-[100%] lg:w-[70%] flex flex-col rounded overflow-hidden'>
            <iframe
              title="Behan family farm filtering oysters"
              src="https://player.vimeo.com/video/747116950"
              width="100%"
              height="360"
              allowFullScreen
            ></iframe>
            <p className='bg-white text-sm lg:text-base px-4 py-2 lg:p-4 font-bold'>Behan family farm filtering oysters by sex and size.</p>
          </figure>
        : null}
      </div>
      </>)
    : null}
  </div>
  )
}

export default InsightCard;