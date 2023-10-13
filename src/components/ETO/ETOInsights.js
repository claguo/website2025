import React from "react";
import InsightCard from "../InsightCard";
import ContainerGray from "../ContainerGray";
import H2 from "../H2";

function ETOInsights() {
  return (
    <ContainerGray>
      <H2>2. key insights</H2>
      <div className='flex flex-col gap-4'>
        <InsightCard id='1'
          insight='Exorbitant amounts of bycatch fish are tossed overboard, despite being perfectly suitable for consumption.'
          desc='Bycatch is the catch of non-target fish and wildlife. Two billion pounds of bycatch are caught annually in commercial trawlers and injured or killed in the process. Bycatch fish are tossed overboard as waste, despite their potential value as nutritious sources of food. Tossed waste also damages marine ecosystems and throws food webs out of balance.'
          sources='Secondary research + Paul, who repeatedly recounted the capture and disposal of exorbitant amounts of non-target fish during his experience on a fishing trawler, as well as through other fishermen he knows.'/>
        <InsightCard id='2'
          insight='There is a lack of diversity in American seafood diet.'
          desc="Salmon, tuna, mackerel, and trout dominate American seafood cuisine. Especially compared to the people of other cultures, Americans consume an incredibly small variety of fish. Fish species' that are popular in Americans' diets often suffer from overfishing."
          sources='Secondary research + classmate interviews' />
        <InsightCard id='3'
          insight='People feel intrinsically motivated to engage in environmentally conscious practices.'
          desc=""
          sources='' />
      </div>
    </ContainerGray>
  )
}

export default ETOInsights;