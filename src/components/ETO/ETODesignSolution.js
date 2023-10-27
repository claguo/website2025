import React from "react";
import card1 from '../../assets/imgs/eto/fish1.png';
import card2 from '../../assets/imgs/eto/fish2.png';
import card3 from '../../assets/imgs/eto/fish3.png';
import card4 from '../../assets/imgs/eto/fish4.png';
import card5 from '../../assets/imgs/eto/fish5.png';
import card6 from '../../assets/imgs/eto/fish6.png';
import learn1 from '../../assets/imgs/eto/learn1.png';
import learn2 from '../../assets/imgs/eto/learn2.png';
import menu from '../../assets/imgs/eto/menu.png';
import recipes from '../../assets/imgs/eto/recipes.png';  
import ContainerGray from "../ContainerGray";
import H1 from "../H1";
import LargeP from "../LargeP";

function ETODesignSolution() {
  return (
    <ContainerGray>
      <H1>3. design solution</H1>
      <p className='text-sm lg:text-base lg:w-3/5'>Based on the key insights from the research I conducted, I came up with <b>eat the ocean</b>, a hypothetical seafood restaurant that introduces American consumers to bycatch seafood species' served in familiar dishes</p>
    
      <div className='gap-4 mt-16 lg:mt-36 flex flex-col lg:flex-row lg:items-center justify-between'>
        <div className='lg:w-3/5 gap-2 flex flex-col'>
          <LargeP >New fish, same dish.</LargeP>
          <p className='text-sm lg:text-base'>A menu with new fish species but prepared in familiar American seafood dishes like sandwiches and chowders would help encourage people to try underutilized fish.</p>
        </div>
        <div className='lg:w-2/5 flex lg:justify-center'>
          <img src={menu} alt='Screenshot of restaurant menu. There are sandwiches, fish, soup, salads, and drinks.' className='w-[50%] object-contain'/>
        </div>
      </div>

      <div className='gap-4 mt-16 lg:mt-36 flex flex-col lg:flex-row-reverse lg:items-center justify-between'>
        <div className='lg:w-2/5 flex flex-col gap-2'>
          <LargeP>An emphasis on education.</LargeP>
          <p className='text-sm lg:text-base'>Based on my third key insight, consumers feel intrinsically motivated to engage in environmentally conscious practices and will want to try new, underutilized species if they know that it will help save and maintain marine ecosystems.</p>
          <p className='text-sm lg:text-base'>Blurbs of information scattered all over the website explain a variety of issues in the New England fishing industry and highlight the positive impacts that <b>eto</b> customers have on marine ecosystems.</p>
        </div>
        <div className='lg:w-3/5 flex flex-row justify-center gap-2 lg:gap-4'>
          <img className='lg:w-1/3 w-[47%]' src={learn1} alt='Educational screen on restaurant website, explaining that eating underutilized bycatch relieves pressure on more overfished species.' />
          <img className='lg:w-1/3 w-[47%]' src={learn2} alt='Educational screen on restaurant website, detailing management strategies to minimize discards.' />
        </div>
      </div>

      <div className='mt-16 lg:mt-36 flex flex-col gap-2'>
        <LargeP>Catch 'em all.</LargeP>
        <p className='text-sm lg:text-base lg:w-3/5'>Informational, collectible cards for each underutilized species served would come with each meal to encourage customers to try all the fish species, not just tuna and salmon. Restaurant could give prizes or discounts for collecting cards.</p>
        <div className='flex justify-between flex-wrap lg:w-3/5'>
          <img src = {card1} alt="Fish card 1: sea robin. Each fish card contains info about the fish's taste, how to cook it, more popular fish that are similar in taste, and a QR code that links to the website." className='w-1/2 lg:w-1/3'/>
          <img src = {card2} alt='Fish card 2: butterfish' className='w-1/2 lg:w-1/3'/>
          <img src = {card3} alt='Fish card 3: silver snapper' className='w-1/2 lg:w-1/3'/>
          <img src = {card4} alt='Fish card 4: white hake' className='w-1/2 lg:w-1/3'/>
          <img src = {card5} alt='Fish card 5: monkfish' className='w-1/2 lg:w-1/3'/>
          <img src = {card6} alt='Fish card 6: winter skate' className='w-1/2 lg:w-1/3'/>
        </div>
      </div>

      <div className='gap-4 mt-16 lg:mt-36 flex flex-col lg:flex-row lg:items-center justify-between'>
        <div className='lg:w-3/5 gap-2 flex flex-col'>
          <LargeP >Get hooked!</LargeP>
          <p className='text-sm lg:text-base'>Consumers who enjoy eto's new fish species are provided the resources to learn to prepare underutilized species themselves. eto strives to create a world where ultimately, consumers make an effort to buy these fish from their local grocery stores or fish markets, incorporating fish species that had once been disregarded as waste into their everyday lives.</p>
        </div>
        <div className='lg:w-2/5 flex lg:justify-center'>
          <img src={recipes} alt='Screenshot of recipes page of mobile website' className='w-[50%] object-contain'/>
        </div>
      </div>

    </ContainerGray>
  )
}

export default ETODesignSolution;