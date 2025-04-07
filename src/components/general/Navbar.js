import React, { useState, useEffect } from "react";
import ExternalURLButton from "../buttons/ExternalURLButton";
import Button from "../buttons/Button";
import { useLocation } from "react-router-dom";
import resume from "../../assets/Claire_Guo_resume.pdf";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";

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
        if (window.scrollY > lastScrollY) {
          // if scroll down hide the navbar
          setShow(false);
        } else if (window.scrollY === 0) {
          setShow(true);
        } else {
          // if scroll up show the navbar
          setShow(true);
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  function MobileOverlay(props) {
    return (
      <div className="p-3xs fixed w-screen h-screen bg-bg-gray flex flex-col items-end">
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
            text="home"
            icon={props.active === "/" ? <IoStarSharp /> : null}
          />
          <Button
            to="/about"
            onClick={() => setShowOverlay(false)}
            text="about"
            icon={props.active === "/about" ? <IoStarSharp /> : null}
          />
          <ExternalURLButton text="resume" url={resume} />
        </div>
      </div>
    );
  }

  return (
    <>
      {isMobile ? (
        <>
          <div
            className={`p-3xs flex justify-between items-center z-99 w-screen transition duration-100 ease-in flex fixed ${
              active === "/" ? "bg-bg-gray" : "bg-bg-white"
            } ${show ? "opacity-100" : "opacity-0"}`}
          >
            <Button text="claire ✶ guo" to="/" />
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
          className={`flex w-screen py-xs justify-between fixed transition duration-100 ease-in px-xs ${
            active === "/" ? "bg-bg-gray" : "bg-bg-white"
          } ${show ? "opacity-100" : "opacity-0"}`}
        >
          <Button text="claire ✶ guo" to="/" />
          <div className="flex gap-[6rem]">
            <Button text="work" to="/" />
            <Button text="about" to="/about" />
            <ExternalURLButton
              text="resume"
              url={resume}
              isButton={true}
              className="px-[3rem]"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
