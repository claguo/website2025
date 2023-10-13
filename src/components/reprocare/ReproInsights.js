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
          insight='Logistical difficulties involved getting an abortion cause stress that result in negative mental health outcomes.'
          desc='Logistical issues include expenses (of the abortion itself, lodging, and transportation) and the need to travel out of state for women in states where abortion is banned. Women who need to travel also need to arrange to miss work, find childcare, and find lodging. Additionally, lack of accessible information about clinics, appointment availability, insurance and state-by-state waiting periods and gestational limits delay women in obtaining care. The longer the delay, the more expensive and medically risky the procedure becomes.'/>
        <InsightCard id='2'
          insight='Aside from logistical issues, a large barrier to abortion is a lack of social support.'
          desc="The social stigma surrounding abortion care causes feelings guilt and shame in women, perpetrated by family, partners, and even self. Kimberly says this is the second biggest barrier to women receiving abortion care. Women need not only logistic support, but also a social support system."
          sources='Secondary research + classmate interviews' />
        <InsightCard id='3'
          insight='Social and environmental determinants affect health outcomes.'
          desc=" "
          sources='' />
      </div>
    </ContainerGray>
  )
}

export default ETOInsights;