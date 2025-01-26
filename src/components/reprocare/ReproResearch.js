import React from "react";
import ContentWrapper from "../general/ContentWrapper";
import affinity from '../../assets/imgs/reprocare/reproaffinitymap.png';
import { IoStarSharp } from "react-icons/io5";
import Content from "../Content";

function ReproResearch() {
  return (
    <ContentWrapper>
      <div className="flex flex-col gap-[0.5rem] items-center">
        <IoStarSharp />
        <h2>Research</h2>
        <p className="text-center lg:px-[6rem]">Even before the overturning of Roe v. Wade in June 2022, seeking an abortion was already an extremely stressful experience for individuals with uteruses. As a woman who grew up in Texas, the overturn of Roe v. Wade sparked in me a profound sense of anxiety, as well as a strong desire to take action.</p>
      </div>
      <Content
        summary="Interview with medical professional, papers, and articles."
      >
        <p className="font-bold">Kimberly Piontkowski</p>
        <p>Brown University MPH '23 + Healthcare Assistant @ Planned Parenthood League of Massachusetts</p>
        <p className="font-bold">Jenna Jerman et. al</p>
        <p>"Barriers to Abortion Care and Their Consequences" <i>Perspectives on sexual and reproductive health</i> vol. 49,2 (2017): 95-102. doi:10.1363/psrh.12024</p>
        <p className="font-bold">Spencer Kimball</p>
        <p>"Women in states that ban abortion will still be able to get abortion pills online" CNBC Health and Science. 27 Jun, 2022.</p>
      </Content>
      <div className="flex flex-col">
        <p className="font-bold">Affinity mapping</p>
        <img src={affinity} alt='Affinity map' />
      </div>
    </ContentWrapper>
  )
}

export default ReproResearch;