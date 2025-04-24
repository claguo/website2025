import ContentWrapper from "../components/general/ContentWrapper";
import ProjectHero from "../components/ProjectHero";
import SecondaryPage from "../components/general/SecondaryPage";
import hero from "../assets/imgs/mochi/hero.png";
import TLDR from "../components/mochi/TLDR";
import TextStack from "../components/general/TextStack";
import colorTokens from "../assets/imgs/mochi/colortokens.png";
import button from "../assets/imgs/mochi/button.png";
import textfield from "../assets/imgs/mochi/textfield.png";
import other from "../assets/imgs/mochi/other.png";

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
            alt="Background and accent color tokens"
            className="border-[1px] border-border-default rounded-[12px] object-cover"
          />
        </TextStack>
        <TextStack
          header="Components"
          className="italic font-mono text-text-subtle"
        >
          <div className="flex flex-col gap-xl">
            <img src={button} alt="Button component" className="object-cover" />
            <img
              src={textfield}
              alt="Text field component"
              className="object-cover"
            />
            <img
              src={other}
              alt="Tab bar and action menu components"
              className="object-cover"
            />
          </div>
        </TextStack>
      </ContentWrapper>
    </SecondaryPage>
  );
}

export default Mochi;
