import React from 'react'

function EatTheOceanPage() {
  return (
    <>
      <div className='title-container'>eat the ocean</div>
      <div className='container'>
        <h3>tl;dr</h3>
        <p>An effort to redefine what is labeled and discarded as "bycatch waste," eat the ocean is a seafood restaurant that introduces American consumers to bycatch seafood species' served in familiar dishes.</p>
        <div className='container2'>
          <div>
            <h3>my role</h3>
            <p>Branding, UX design, UI design</p>
          </div>
          <div>
            <h3>tools</h3>
            <p>Figma</p>
          </div>
          <div>
            <h3>timeline</h3>
            <p>May-June 2022</p>
          </div>
        </div>
        <img src='/imgs/eattheoceanthumb.png' alt='eat the ocean thumbnail' className='hero-img'/>
        
        <h2 className='section-title'>the challenge</h2>
        <p>I was challenged to explore and research a topic of choice, identify a design opportunity related to sustainability, and develop a product solution to address the identified issue.</p>
        <p>The New England region has a long history of fishing, whaling, ship building, and maritime commerce. I chose to research waste and sustainability in New England's maritime industry due to its cultural and economic significance.</p>
        <h2 className='section-title'>initial research</h2>
        <h3>i. a diverse set of interviews</h3>
        <div className='flex-container'>
            <div className='interviewee-card'>
                <h1>🧔🏻</h1>
                <h3>Paul Osimo</h3>
                <p className='location'>@ Providence, RI</p>
                <p>Fishing charter captain + commercial rod and reel fisherman</p>
            </div>
            <div className='interviewee-card'>
                <h1>👱🏻‍♂️</h1>
                <h3>Perry Raso</h3>
                <p className='location'>@ South Kingston, RI</p>
                <p>Oyster farm + oyster bar owner</p>
            </div>
            <div className='interviewee-card'>
                <h1>👴🏻</h1>
                <h3>Matt Behan</h3>
                <p className='location'>@ Charleston, RI</p>
                <p>Co-owner of family fish farm</p>
            </div>
            <div className='interviewee-card'>
                <h1>🧔🏽</h1>
                <h3>Carlos Sostre</h3>
                <p className='location'>@ India Point Park, RI</p>
                <p>Catch-and-release fishing hobbyist</p>
            </div>
        </div>
        <h3>ii. bycatch discard chart</h3>
        <p>NOAA 2020 Discard Estimation (Northeastern US): A report of species' discarded, amounts discarded, and reason for discard. Fish are discarded for many reasons including no market, regulations, and poor quality.</p>
        <img src='/imgs/noaadiscards.png' alt='Screenshot of NOAA 2020 Discard Estimation for Monkfish' className='hero-img'/>
        
        <h2 className='section-title'>key insights</h2>
        <div>
          <div className='insight'>
            <h3>i. Exorbitant amounts of fish are tossed overboard, despite being perfectly edible.</h3>
            <p>Bycatch is the catch of non-target fish and wildlife. Two billion pounds of bycatch are caught annually in commercial trawlers and injured or killed in the process. Bycatch fish are tossed overboard as waste, despite their potential value as nutritious sources of food. Tossed waste also damages marine ecosystems and throws food webs out of balance.</p>      
            <p>Paul repeatedly recounted the capture and disposal of exorbitant amounts of non-target fish during his experience on a fishing trawler, as well as through other fishermen he knows.</p>
          </div>
          <div className='insight'>
            <h3>ii. There is a lack of diversity in American seafood diet.</h3>
            <p>Salmon, tuna, mackerel, and trout dominate American seafood cuisine. Especially compared to the people of other cultures, Americans consume an incredibly small variety of fish. Fish species' that are popular in Americans' diets often suffer from overfishing.</p>
          </div>
          <div className='insight'>
            <h3>iii. People feel intrinsically motivated to engage in environmentally conscious practices.</h3>
            <p>All of the people I spoke to were very environmentally conscious and followed DEM (Department of Environmental Management) regulations despite a lack of enforcement.</p>      
            <p>Carlos, the fishing hobbyist, brings his measuring tape when he goes fishing to ensure his catch meets the DEM minimum length. At both Perry and Matt’s oyster farms, oysters are first carefully hand-filtered by sex, then filtered by size through a machine post catch.</p>
          </div>
        </div>

        <h2 className='section-title'>product development</h2>
        <p>My design solution ideas are based on the three main insights I found through my broad research of the New England maritime industry. This project attempts to reduce the amount of bycatch waste being tossed into the ocean by diversifying Americans’ seafood consumption habits and using education and awareness as the primary method of promoting change.</p>
        <h3 style={{marginTop:'3rem'}}>initial ideation</h3>
        <div className='flex-container'>
          <figure className='sketch'>
            <img src='imgs/oceansketch1.png' alt='Sketch 1'/>
            <h3>recipe book</h3>
            <p>One of the barriers to trying new food is people do not know how to prepare new ingredients.</p>
          </figure>
          <figure className='sketch'>
            <img src='imgs/oceansketch2.png' alt='Sketch 2'/>
            <h3>restaurant</h3>
            <p>A restaurant would prepare new fish for customers; much more convenient and accessible than a recipe book.</p>
          </figure>
          <figure className='sketch'>
            <img src='imgs/oceansketch3.png' alt='Sketch 3'/>
            <h3>pre-packaged meals</h3>
            <p>These would be cheaper than a restaurant and may help familiarize customers with new ingredients and tastes. </p>
          </figure>
        </div>
        <h3>user feedback</h3>
        <p>I created a Google Form asking users to choose which idea would be the most effective at encouraging them to try underutilized fish species. The majority of respondents chose the food truck or restaurant idea for its accessibility, the trustworthiness of restaurants, and above all, convenience.</p>
        <div className='flex-container'>
          <img src='imgs/oceanfeedback.png' alt='Screenshot of user feedback' className='feedback-img' />
          <div className='quotes-container'>
            <h2>"I would probably not have the initiative to look for underutilized species (myself)"</h2>
            <h2>"restaurants know what they're doing"</h2>
          </div>
        </div>

        <h2 className='section-title'>final product</h2>
        <h1>eat the ocean</h1>
        <p>Eat The Ocean (eto) is a restaurant that serves underutilized fish species in popular American seafood dishes. For this project, I chose to focus on two specific aspects of the restaurant: a business website and sustainability info cards.</p>
        <p>Eat The Ocean works to protect marine ecosystems by diversifying American seafood consumption habits through the exploitation of underutilized bycatch fish in New England. By raising the value of underutilized species, eto can reduce the amount of bycatch "waste" being tossed back into the ocean, reducing harmful human impact on the ocean. Additionally, by bringing attention away from popular seafood species' like tuna and salmon, eto can relieve pressure on these overfished species and allow them to rebuild their populations. When fish are consumed in proportion to their natural stocks, a healthy ocean can be maintained far into the future.</p>
        <h3 style={{marginTop:'3rem'}}>mobile website</h3>
        <div className='flex-container'>
          <figure className='screenshot-container'>
            <img src='/imgs/oceanmenu.png' alt='Screenshot of menu section' />
            <div>
              <h3>new fish, same dish</h3>
              <p>Eat The Ocean utilizes familiar American seafood dishes like fish and chips, chowder, and salad to reduce the apprehension a consumer may feel when trying new foods.</p>
            </div>
          </figure>
          <figure className='screenshot-container'>
            <img src='/imgs/oceanlearn.png' alt='Screenshot of menu section' />
            <div>
              <h3>an emphasis on education</h3>
              <p>Blurbs of information scattered all over the website explain a variety of issues in the New England fishing industry and highlight the positive impacts that eto customers have on marine ecosystems.</p>
            </div>
          </figure>
          <figure className='screenshot-container'>
            <img src='/imgs/oceanrecipes.png' alt='Screenshot of menu section' />
            <div>
              <h3>get hooked!</h3>
              <p>Consumers who enjoy eto's new fish species are provided the resources to learn to prepare underutilized species themselves. eto strives to create a world in which fish species that had once been disregarded as waste can be incorporated into people's everyday lives.</p>
            </div>
          </figure>
        </div>
        <h3>sustainability info cards</h3>
        <img src='/imgs/oceancards.png' alt='Sustainability info cards' className='hero-img'/>
        <p>At eto, each seafood dish would be served with an informational, collectible card of the fish being eaten. These cards contain information about the underutilized species' taste and preparation methods, as well as a QR code linked to a website page with more detailed information and recipes.</p>
        <h2 className='section-title'>branding</h2>
        <figure className='branding-container'>
          <div>
            <h3>logo</h3>
          </div>
          <img src='/imgs/oceanlogo.png' alt='eto logos' />
        </figure>
        <figure className='branding-container'>
          <div>
            <h3>typography</h3>
          </div>
          <img src='/imgs/oceantype.png' alt='eto typography' />
        </figure>
        <figure className='branding-container'>
          <div>
            <h3>colors</h3>
          </div>
          <img src='/imgs/oceancolors.png' alt='eto colors' />
        </figure>

      </div>
      </>
  )
}

export default EatTheOceanPage;
