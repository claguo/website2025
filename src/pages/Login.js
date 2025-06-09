import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Button from "../components/buttons/Button";
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoArrowBackSharp } from "react-icons/io5";
import Clicksplosion from "../components/custom/Clicksplosion";

function Login() {
  const [password, setPassword] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const PASSWORD_COOKIE_NAME = "password";
  const navigate = useNavigate();
  useEffect(() => {
    // Check for existing password cookie on component mount
    const savedPassword = Cookies.get(PASSWORD_COOKIE_NAME);
    if (savedPassword) {
      setPassword(savedPassword);
    }
  }, []);

  const handleLogin = () => {
    if (password === "amphibian") {
      // Store the password in cookie
      Cookies.set(PASSWORD_COOKIE_NAME, password, {
        expires: 1, // Cookie expires in 1 day
        secure: true, // Only sent over HTTPS
        sameSite: "strict",
        path: "/",
      });
      navigate("/mochi-health");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="p-3xs fixed w-screen h-screen bg-bg-gray flex flex-col">
      <Button
        text=""
        icon={<IoArrowBackSharp className="text-[16px] text-text-default" />}
        className=""
        onClick={() => {
          if (window.history.length > 1) {
            window.history.back();
          } else {
            navigate("/");
          }
        }}
      />

      <div className="flex w-full lg:h-full py-4xl justify-center items-center">
        <input
          type={isHovered ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          placeholder="Password"
          size={password.length || 10}
          className="bg-transparent outline-none inline-block text-[16px] border-none font-mono inline-block caret-pink py-[0.5rem]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          autoFocus={true}
        />
        {password !== "" ? (
          // <Button
          //   text=""
          //   onClick={handleLogin}
          //   icon={<IoArrowForwardSharp />}
          // />
          <Clicksplosion>
            <div onClick={handleLogin} className="p-xs cursor-pointer">
              <IoArrowForwardSharp className="text-[16px] text-text-default" />
            </div>
          </Clicksplosion>
        ) : null}
      </div>
    </div>
  );
}

export default Login;
