import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "../carousel/CarouselItem";
import CarouselButton from "../carousel/CarouselButton";
import how1 from "../../assets/imgs/a11ybuddy/how1.png";
import how2 from "../../assets/imgs/a11ybuddy/how2.png";
import how3 from "../../assets/imgs/a11ybuddy/how3.png";
import how4 from "../../assets/imgs/a11ybuddy/how4.png";
import how5 from "../../assets/imgs/a11ybuddy/how5.png";
import journey from "../../assets/imgs/a11ybuddy/journeymap.png";

function A11yHow(props) {
  const [isRHovered, setIsRHovered] = useState(false);
  const [isLHovered, setIsLHovered] = useState(false);

  return (
    <>
      <h3 className="text-sm lg:text-base font-bold mb-[0.25rem] font-sans">
        how it works
      </h3>
      <div className="lg:mx-[12%]">
        <Carousel
          renderThumbs={() => {
            "false";
          }}
          showStatus={false}
          autoPlay={false}
          dynamicHeight={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <CarouselButton
                onClick={() => {
                  onClickHandler();
                  setIsLHovered(false);
                }}
                onMouseEnter={() => setIsLHovered(true)}
                onMouseLeave={() => setIsLHovered(false)}
                title={label}
                isHovered={isLHovered}
                text="<"
              />
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <CarouselButton
                onClick={() => {
                  onClickHandler();
                  setIsRHovered(false);
                }}
                onMouseEnter={() => setIsRHovered(true)}
                onMouseLeave={() => setIsRHovered(false)}
                title={label}
                isHovered={isRHovered}
                text=">"
              />
            )
          }
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
              return (
                <li
                  className="border-[1px] border-dark-green bg-green w-[0.5rem] h-[0.5rem] lg:w-[0.75rem] lg:h-[0.75rem] rounded-full inline-block mx-[0.5rem] relative top-0"
                  aria-label={`Selected: ${label} ${index + 1}`}
                  title={`Selected: ${label} ${index + 1}`}
                />
              );
            }
            return (
              <li
                className="bg-dark-gray w-[0.5rem] h-[0.5rem] lg:w-[0.75rem] lg:h-[0.75rem] rounded-full inline-block mx-[0.5rem] relative top-0"
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
              />
            );
          }}
        >
          <CarouselItem
            src={how1}
            alt="A11y Buddy starting screen. Buddy in egg stage telling user to open an HTML file."
            text="After installing the extension, open an HTML file to begin."
          />
          <CarouselItem
            src={how2}
            alt="Blue A11y Buddy in the baby stage, growing."
            text="While there are no accessibility errors in yout file, your buddy will begin to grow."
          />
          <CarouselItem
            src={how3}
            alt="Blue A11y Buddy in the baby stage, with a sad face, not growing. The line with the error is highlighted in red."
            text="If an accessibility error is detected, your buddy will stop growing. The line with the error will be highlighted."
          />
          <CarouselItem
            src={how4}
            alt="Blue A11y Buddy in adult stage."
            text="After enough time has passed, your buddy will grow into its final stage."
          />
          <CarouselItem
            src={how5}
            alt="New, purple A11y Buddy in baby stage."
            text="After a buddy has reached 100% growth, you get a new buddy with a random color."
          />
        </Carousel>
        <img src={journey} alt="A11y Buddy journey map" className="mt-[3rem]" />
      </div>
    </>
  );
}

export default A11yHow;
