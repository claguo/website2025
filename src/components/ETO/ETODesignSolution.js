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

function ETODesignSolution() {
  return (
    <div className='section-gray'>
      <h2>3. design solution</h2>
      <p className='threeColumns'>Based on the key insights from the research I conducted, I came up with <b>eat the ocean</b>, a hypothetical seafood restaurant that introduces American consumers to bycatch seafood species' served in familiar dishes</p>
      
      <div style={{marginTop: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div style={{width: '60%'}}>
          <h1 style={{marginBottom: '2rem'}}>New fish, same dish.</h1>
          <p>A menu with new fish species but prepared in familiar American seafood dishes like sandwiches and chowders would help encourage people to try underutilized fish.</p>
        </div>
        <img src={menu} alt='Screenshot of restaurant menu.' style={{width: '15%', marginRight: '15%', objectFit: 'contain'}}/>
      </div>

      <div style={{marginTop: '8rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{width: '60%', display: 'flex', justifyContent: 'space-evenly', padding: '2rem 0'}}>
            <img style={{width: '36%'}} src={learn1} alt='Informational screen on restaurant website' />
            <img style={{width: '36%'}} src={learn2} alt='Another informational screen on restaurant website' />
          </div>
          <div className='paragraphContainer twoColumns'>
            <h1>An emphasis on education.</h1>
            <p>Based on my third key insight, consumers feel intrinsically motivated to engage in environmentally conscious practices and will want to try new, underutilized species if they know that it will help save and maintain marine ecosystems.</p>
            <p>Blurbs of information scattered all over the website explain a variety of issues in the New England fishing industry and highlight the positive impacts that <b>eto</b> customers have on marine ecosystems.</p>
          </div>
        </div>
      </div>

      <div style={{marginTop: '8rem'}}>
        <h1 style={{marginBottom: '1rem'}}>Catch 'em all.</h1>
        <p className='threeColumns'>Informational, collectible cards for each underutilized species served would come with each meal to encourage customers to try all the fish species, not just tuna and salmon. Restaurant could give prizes or discounts for collecting cards.</p>
        <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '60%'}}>
          <img src = {card1} alt='Fish card 1' style={{width: '33%'}}/>
          <img src = {card2} alt='Fish card 2' style={{width: '33%'}}/>
          <img src = {card3} alt='Fish card 3' style={{width: '33%'}}/>
          <img src = {card4} alt='Fish card 4' style={{width: '33%'}}/>
          <img src = {card5} alt='Fish card 5' style={{width: '33%'}}/>
          <img src = {card6} alt='Fish card 6' style={{width: '33%'}}/>
        </div>
      </div>

      <div style={{marginTop: '8rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div className='twoColumns' style={{marginLeft: '40%'}}>
            <h1 style={{marginBottom: '1rem'}}>Get hooked!</h1>
            <p>Consumers who enjoy eto's new fish species are provided the resources to learn to prepare underutilized species themselves. eto strives to create a world where ultimately, consumers make an effort to buy these fish from their local grocery stores or fish markets, incorporating fish species that had once been disregarded as waste into their everyday lives.</p>
          </div>
          <img src={recipes} alt='Screenshot of recipes page of website' style={{width: '15%', objectFit: 'contain'}}/>
        </div>
      </div>
    </div>
  )
}

export default ETODesignSolution;