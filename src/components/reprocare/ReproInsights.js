import React from "react";
import InsightCard from "../InsightCard";
import ContentWrapper from "../general/ContentWrapper";
import { IoStarSharp } from "react-icons/io5";

function ETOInsights() {
  return (
    <ContentWrapper>
      <div className="flex flex-col gap-[0.5rem] items-center">
        <IoStarSharp />
        <h2>Research Insights</h2>
      </div>
      <div className='flex flex-col gap-[5rem]'>
        <InsightCard id='1'
          insight='A lack of social support causes feelings of guilt and shame in women.'
          desc="The social stigma surrounding abortion care is often perpetrated by family, partners, and even self. Kimberly says this is the second biggest barrier to women receiving abortion car, after logistical issues. Women need not only logistic support, but also a social support system."
        />
        <InsightCard id='2'
          insight='Social and environmental determinants affect health outcomes.'
          desc="Social support systems, including family and community networks, influence decision-making and emotional well-being during challenging times. Stigmas and cultural beliefs about abortion can limit access to care and the willingness to seek help."
        />
        <InsightCard id='3'
          insight='Logistical difficulties involved getting an abortion cause stress that result in negative mental health outcomes.'
          desc='Logistical issues include expenses (of the abortion itself, lodging, and transportation) and the need to travel out of state for women in states where abortion is banned. Women who need to travel also need to arrange to miss work, find childcare, and find lodging. Additionally, lack of accessible information about clinics, appointment availability, insurance and state-by-state waiting periods and gestational limits delay women in obtaining care. The longer the delay, the more expensive and medically risky the procedure becomes.'
        />
      </div>
    </ContentWrapper>
  )
}

export default ETOInsights;