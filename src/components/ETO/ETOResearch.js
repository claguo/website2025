import React from "react";
import ExternalURLButton from "../buttons/ExternalURLButton";
import Section from "../general/Section";
import Card from "../general/Card";

function ETOResearch() {
  return (
    <Section tagText="Research" project="eto">
      <div className="flex flex-col gap-sm">
        <p>
          My research was driven by the question: how can we make the New
          England fishing industry more sustainable? To learn more, I spoke to a
          diverse set of locals involved in the fishing industry.
        </p>
        <div className="flex gap-2xs overflow-x-scroll w-[calc(100vw-32px)] lg:w-auto">
          <Card className="w-[216px] shrink-0 lg:w-auto lg:flex-1 lg:shrink p-xs border-[1px] rounded-md">
            <div className="flex flex-col gap-2xs">
              <span className="text-lg">🧔🏻</span>
              <div className="flex flex-col gap-5xs">
                <span className="text-sm font-bold">Paul Osimo</span>
                <p className="text-xs text-text-subtle">
                  Fishing charter captain & commercial fisherman @ Providence,
                  RI
                </p>
              </div>
            </div>
            <p>“So much bycatch is caught and thrown overboard.”</p>
          </Card>
          <Card className="w-[216px] shrink-0 lg:w-auto lg:flex-1 lg:shrink p-xs border-[1px] rounded-md">
            <div className="flex flex-col gap-2xs">
              <span className="text-lg">👱🏻‍♂️</span>
              <div className="flex flex-col gap-5xs">
                <span className="text-sm font-bold">Perry Raso</span>
                <p className="text-xs text-text-subtle">
                  Oyster farm & oyster bar owner @ South Kingston, RI
                </p>
              </div>
            </div>
            <p>“Sustainability is extremely important for us.”</p>
          </Card>
          <Card className="w-[216px] shrink-0 lg:w-auto lg:flex-1 lg:shrink p-xs border-[1px] rounded-md">
            <div className="flex flex-col gap-2xs">
              <span className="text-lg">👴🏻</span>
              <div className="flex flex-col gap-5xs">
                <span className="text-sm font-bold">Matt Behan</span>
                <p className="text-xs text-text-subtle">
                  Co-owner of family fish farm @ Charleston, RI
                </p>
              </div>
            </div>
            <p>“We filter our oysters by sex and size before selling them.”</p>
          </Card>
          <Card className="w-[216px] shrink-0 lg:w-auto lg:flex-1 lg:shrink p-xs border-[1px] rounded-md">
            <div className="flex flex-col gap-2xs">
              <span className="text-lg">🧔🏽</span>
              <div className="flex flex-col gap-5xs">
                <span className="text-sm font-bold">Carlos Sostre</span>
                <p className="text-xs text-text-subtle">
                  Catch-and-release fishing hobbyist @ India Point Park, RI
                </p>
              </div>
            </div>
            <div>
              “I bring my tape measure when I go fishing to make sure I comply
              with{" "}
              <ExternalURLButton
                url="https://dem.ri.gov/"
                text="DEM"
                plainText={true}
              />{" "}
              regulations.”
            </div>
          </Card>
        </div>
      </div>

      <div className="flex flex-col gap-sm">
        <p>
          Through secondary research, I found an annual report of species'
          discarded, quantities discarded, and reason for discard from the
          National Oceanic and Atmospheric Administration, the NOAA Discard
          Reports.{" "}
          <span className="font-medium text-text-eto">
            For many fish, the primary reason for discard is the lack of a
            market
          </span>
          .
        </p>
        <img
          src="https://images.claireguo.com/eto/spreadsheet.png"
          alt="Spreadsheet of data from NOAA 2024 discard estimate. Includes fish species, pounds discarded, percent of total catch, and reasons for discard."
        />
      </div>
      <p className="text-md text-center">
        How might we diversify consumer diet to create a market for
        underappreciated seafood?
      </p>
    </Section>
  );
}

export default ETOResearch;
