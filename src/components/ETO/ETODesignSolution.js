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
import H2 from "../H2";
import H1 from "../H1";

function ETODesignSolution() {
  return (
    <ContainerGray>
      <H2>3. design solution</H2>
      <p className='text-sm lg:text-base lg:w-3/5'>Based on the key insights from the research I conducted, I came up with <b>eat the ocean</b>, a hypothetical seafood restaurant that introduces American consumers to bycatch seafood species' served in familiar dishes</p>
    
      <div className='gap-4 mt-16 lg:mt-36 flex flex-col lg:flex-row lg:items-center justify-between'>
        <div className='lg:w-3/5 gap-2 flex flex-col'>
          <H1 >New fish, same dish.</H1>
          <p className='text-sm lg:text-base'>A menu with new fish species but prepared in familiar American seafood dishes like sandwiches and chowders would help encourage people to try underutilized fish.</p>
        </div>
        <div className='lg:w-2/5 flex lg:justify-center'>
          <img src={menu} alt='Screenshot of restaurant menu.' className='w-[50%] object-contain'/>
        </div>
      </div>

      <div className='gap-4 mt-16 lg:mt-36 flex flex-col lg:flex-row-reverse lg:items-center justify-between'>
        <div className='lg:w-2/5 flex flex-col gap-2'>
          <H1>An emphasis on education.</H1>
          <p className='text-sm lg:text-base'>Based on my third key insight, consumers feel intrinsically motivated to engage in environmentally conscious practices and will want to try new, underutilized species if they know that it will help save and maintain marine ecosystems.</p>
          <p className='text-sm lg:text-base'>Blurbs of information scattered all over the website explain a variety of issues in the New England fishing industry and highlight the positive impacts that <b>eto</b> customers have on marine ecosystems.</p>
        </div>
        <div className='lg:w-3/5 flex flex-row justify-center gap-2 lg:gap-4'>
          <img className='lg:w-1/3 w-[47%]' src={learn1} alt='Informational screen on restaurant website' />
          <img className='lg:w-1/3 w-[47%]' src={learn2} alt='Another informational screen on restaurant website' />
        </div>
      </div>

      <div className='mt-16 lg:mt-36 flex flex-col gap-2'>
        <H1>Catch 'em all.</H1>
        <p className='text-sm lg:text-base lg:w-3/5'>Informational, collectible cards for each underutilized species served would come with each meal to encourage customers to try all the fish species, not just tuna and salmon. Restaurant could give prizes or discounts for collecting cards.</p>
        <div className='flex justify-between flex-wrap lg:w-3/5'>
          <img src = {card1} alt='Fish card 1' className='w-1/2 lg:w-1/3'/>
          <img src = {card2} alt='Fish card 2' className='w-1/2 lg:w-1/3'/>
          <img src = {card3} alt='Fish card 3' className='w-1/2 lg:w-1/3'/>
          <img src = {card4} alt='Fish card 4' className='w-1/2 lg:w-1/3'/>
          <img src = {card5} alt='Fish card 5' className='w-1/2 lg:w-1/3'/>
          <img src = {card6} alt='Fish card 6' className='w-1/2 lg:w-1/3'/>
        </div>
      </div>

      <div className='gap-4 mt-16 lg:mt-36 flex flex-col lg:flex-row lg:items-center justify-between'>
        <div className='lg:w-3/5 gap-2 flex flex-col'>
          <H1 >Get hooked!</H1>
          <p className='text-sm lg:text-base'>Consumers who enjoy eto's new fish species are provided the resources to learn to prepare underutilized species themselves. eto strives to create a world where ultimately, consumers make an effort to buy these fish from their local grocery stores or fish markets, incorporating fish species that had once been disregarded as waste into their everyday lives.</p>
        </div>
        <div className='lg:w-2/5 flex lg:justify-center'>
          <img src={recipes} alt='Screenshot of recipes page of website' className='w-[50%] object-contain'/>
        </div>
      </div>

    </ContainerGray>
  )
}

export default ETODesignSolution;