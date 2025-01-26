import React from "react";
import cover from "../../assets/imgs/reprocare/reprocover.png";
import scale from "../../assets/imgs/reprocare/reproscale.png";
import usa from "../../assets/imgs/reprocare/reprousa.png";
import ContentWrapper from "../general/ContentWrapper";
import LargeP from "../LargeP";
import PBlurb from "../PBlurb";
import ExternalURLButton from "../buttons/ExternalURLButton";
import { MdArrowOutward } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import Button from "../buttons/Button";
import Content from "../Content";

function ReproSolution() {
  const externalUrl = "https://repro-care-world.netlify.app/";
  const handleButtonClick = () => {
    // Open the external URL in a new tab
    window.open(externalUrl, "_blank");
  };

  return (
    <ContentWrapper>
      <div className="flex flex-col gap-[0.5rem] items-center">
        <IoStarSharp />
        <h2>Reproductive Care World</h2>
        <p className="lg:px-[6rem] text-center">I decided to build an interactive data
          visualization web app that displays abortion-related data from across
          the globe. This web app seeks to normalize and destigmatize abortion
          and reveal the network of women experiencing similar difficulties
          worldwide. This was created using React and Globe.gl with data sourced
          from Guttmacher Institute Data Center.
        </p>
        <Button
          onClick={handleButtonClick}
          text="View the web app"
          icon={<MdArrowOutward />}
        />
      </div>
      <Content summary="You are not alone! 1 point on the globe represents 10,000 women.">
        <img src={scale} />
      </Content>
      <Content summary="Big numbers suggest a sense of community.">
        <img src={usa} />
      </Content>




      
      {/* <div className="flex flex-col">


        <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-[1rem] mt-16 lg:mt-36">
          <LargeP className="lg:w-2/5">
            You are not alone! 1 point on the globe represents 10,000 women.
          </LargeP>
          <img
            className="outline outline-1 mt-2 outline-[#B0B0B0] lg:w-3/5"
            src={scale}
            alt="Screenshot of the web app showing of 10,000 smiley face icons."
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-6 mt-16 lg:mt-36">
          <img
            className="outline outline-1 mt-2 outline-[#B0B0B0] lg:w-3/5"
            src={usa}
            alt="Reproductive Care World USA page with country stats"
          />
          <LargeP className="lg:w-2/5">
            Big numbers suggest a sense of community.
          </LargeP>
        </div>
      </div> */}
    </ContentWrapper>
  );
}

export default ReproSolution;
