import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SplitHover from "../custom/SplitHoverEffects";
import Button from "../buttons/Button";
import { useLocation } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import Clicksplosion from "../custom/Clicksplosion";
function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState(null);
  const [show, setShow] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        // Set a threshold to ignore tiny scroll movements / bounce effects
        const threshold = 5;

        if (currentScrollY > lastScrollY + threshold) {
          // Scrolling down — hide nav
          setShow(false);
        } else if (
          currentScrollY < lastScrollY - threshold ||
          currentScrollY <= threshold
        ) {
          // Scrolling up or near top — show nav
          setShow(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar, { passive: true });

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  function MobileOverlay(props) {
    return (
      <div className="pt-3xs fixed w-full h-screen bg-bg-gray flex flex-col items-end">
        <Button
          text=""
          onClick={() => setShowOverlay(false)}
          icon={<IoCloseSharp className="text-[20px] text-text-default" />}
          className=""
        />

        <div className="flex flex-col w-full h-full justify-center items-center gap-8">
          <Button
            to="/"
            onClick={() => setShowOverlay(false)}
            text={props.active === "/" ? "* home" : "home"}
          />
          <Button
            to="/about"
            onClick={() => setShowOverlay(false)}
            text={props.active === "/about" ? "* about" : "about"}
          />
          <Button
            text="resume"
            url="https://images.claireguo.com/Claire_Guo_resume.pdf"
          />
        </div>
      </div>
    );
  }

  return (
    <>
      {isMobile ? (
        <>
          <div
            className={`lg:px-4xs pt-3xs flex justify-between items-center z-99 w-full transition duration-100 ease-in flex fixed ${
              active === "/" ? "bg-bg-gray" : "bg-bg-white"
            } ${show ? "opacity-100" : "opacity-0"}`}
          >
            <Link
              to="/"
              className="flex flex-row gap-2xs px-xs pt-3xs items-center cursor-pointer"
            >
              <span className="font-mono italic tracking-normal text-[1.25rem]">
                {" "}
                claire
              </span>
              <span className="font-sans text-[1.25rem]">*</span>
              <span className="font-mono italic tracking-normal text-[1.25rem]">
                {" "}
                guo
              </span>
            </Link>
            <Button
              text=""
              onClick={() => setShowOverlay(true)}
              icon={<IoMdMenu className="text-[20px] text-text-default" />}
            />
          </div>
          {showOverlay && <MobileOverlay active={active} />}
        </>
      ) : (
        <div
          className={`flex w-full px-4xs pt-3xs justify-between fixed transition duration-100 ease-in ${
            active === "/" ? "bg-bg-gray" : "bg-bg-white"
          } ${show ? "opacity-100" : "opacity-0"}`}
        >
          <Clicksplosion>
            <Link
              to="/"
              className="text-md flex flex-row lg:flex-row gap-2xs px-xs py-3xs items-center cursor-pointer"
            >
              <SplitHover
                text="claire"
                styling="italic"
                className="font-mono text-md"
              />
              *
              <SplitHover
                text="guo"
                styling="italic"
                className="font-mono text-md"
              />
            </Link>
          </Clicksplosion>

          <div className="flex gap-xl">
            <Button text="work" to="/" className="tracking-normal" />
            <Button text="about" to="/about" className="tracking-normal" />
            <Button
              text="resume"
              url="https://images.claireguo.com/Claire_Guo_resume.pdf"
              className="px-[3rem] tracking-normal"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
