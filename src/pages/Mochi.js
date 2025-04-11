import ContentWrapper from "../components/general/ContentWrapper";
import ProjectHero from "../components/ProjectHero";
import SecondaryPage from "../components/general/SecondaryPage";
import hero from "../assets/imgs/mochi/hero.png";
import TLDR from "../components/mochi/TLDR";
import TextStack from "../components/general/TextStack";
import colorTokens from "../assets/imgs/mochi/colortokens.png";
import button from "../assets/imgs/mochi/button.png";
import dropdown from "../assets/imgs/mochi/dropdown.png";
import checkbox from "../assets/imgs/mochi/checkbox.png";

function Mochi() {
  return (
    <SecondaryPage>
      <ProjectHero src={hero} />
      <ContentWrapper>
        <TLDR />
        <TextStack
          header="Color Tokens"
          className="italic font-mono text-text-subtle"
        >
          <p>
            Colors are logically named based on their usage. Each color token
            has 3 different values for Default/Premium/Pediatrics modes.
          </p>
          <img
            src={colorTokens}
            alt="color tokens"
            className="border-[1px] border-border-default rounded-[12px] object-cover"
          />
        </TextStack>
        <TextStack
          header="Components"
          className="italic font-mono text-text-subtle"
        >
          <img
            src={button}
            alt="color tokens"
            className="border-[1px] border-border-default rounded-[12px] object-cover"
          />
          <img
            src={dropdown}
            alt="color tokens"
            className="border-[1px] border-border-default rounded-[12px] object-cover"
          />
          <img
            src={checkbox}
            alt="color tokens"
            className="border-[1px] border-border-default rounded-[12px] object-cover"
          />
        </TextStack>
      </ContentWrapper>
    </SecondaryPage>
  );
}

export default Mochi;
