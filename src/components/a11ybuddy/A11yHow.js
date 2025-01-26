import React, { useState } from "react";
import how1 from "../../assets/imgs/a11ybuddy/how1.png";
import how2 from "../../assets/imgs/a11ybuddy/how2.png";
import how3 from "../../assets/imgs/a11ybuddy/how3.png";
import how4 from "../../assets/imgs/a11ybuddy/how4.png";
import how5 from "../../assets/imgs/a11ybuddy/how5.png";
import journey from "../../assets/imgs/a11ybuddy/journeymap.png";
import Content from "../Content";

function A11yHow(props) {
  const [isRHovered, setIsRHovered] = useState(false);
  const [isLHovered, setIsLHovered] = useState(false);

  return (
    <>
      <h3 className="text-center">How it works</h3>
      <Content
        summary="1. After installing the extension, open an HTML file to begin."
        img={how1}
        alt="A11y Buddy starting screen. Buddy in egg stage telling user to open an HTML file."
      />
      <Content
        summary="2. While there are no accessibility errors in your file, your buddy will begin to grow."
        img={how2}
        alt="Blue A11y Buddy in the baby stage, growing."
      />
      <Content
        summary="3. If an accessibility error is detected, your buddy will stop growing. The line with the error will be highlighted."
        img={how3}
        alt="Blue A11y Buddy in the baby stage, with a sad face, not growing. The line with the error is highlighted in red."
      />
      <Content
        summary="4. After enough time has passed, your buddy will grow into its final stage."
        img={how4}
        alt="Blue A11y Buddy in adult stage."
      />
      <Content
        summary="5. After a buddy has reached 100% growth, get a new, randomly colored buddy."
        img={how5}
        alt="New, purple A11y Buddy in baby stage."
      />
    </>
  );
}

export default A11yHow;
