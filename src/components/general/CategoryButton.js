import React, { useState } from "react";
import Button from "./Button";
import { MdCheckCircle } from "react-icons/md";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";

function CategoryButton(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isToggled, setIsToggled] = useState(true);
  const category = props.text;
  let bgcolor = "";
  let bordercolor = "";

  switch (category) {
    case "ui/ux design":
      bgcolor = "bg-[#5ECE8D]";
      bordercolor = "border-[#5ECE8D]"; //green
      break;
    case "web development":
      bgcolor = "bg-[#E2A8F0]";
      bordercolor = "border-[#E2A8F0]"; //pink
      break;
    case "design strategy":
      bgcolor = "bg-[#8280FC]";
      bordercolor = "border-[#8280FC]"; //purple
      break;
    case "game development":
      bgcolor = "bg-[#F28557]";
      bordercolor = "border-[#F28557]"; //orange
      break;
    case "graphic design":
      bgcolor = "bg-[#C2E772]";
      bordercolor = "border-[#C2E772]"; //lime green
      break;
    case "illustration":
      bgcolor = "bg-[#6AAEFF]";
      bordercolor = "border-[#6AAEFF]"; //blue
      break;
    default:
      break;
  }

  const handleClick = () => {
    setIsToggled(!isToggled);

    const newFilters = isToggled
      ? props.filters.filter((e) => e !== props.text)
      : [...props.filters, props.text];

    props.setFilters(newFilters);

    const filteredProjects = props.projects.filter((project) =>
      project.categories.some((category) => newFilters.includes(category)),
    );

    props.setFiltered(filteredProjects);
  };

  return (
    <Button
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onClick={handleClick}
      text={props.text}
      icon={
        isToggled ? (
          <MdCheckCircle size="1.25em" />
        ) : (
          <MdOutlineRadioButtonUnchecked size="1.25em" />
        )
      }
      isHovered={isHovered}
      className={`text-sm lg:text-base gap-[0.5rem] pl-[1em] pr-[0.5em] ${
        isHovered && !isToggled
          ? `${bgcolor} ${bordercolor}`
          : isHovered && isToggled
            ? "text-dark-gray border-gray"
            : isToggled
              ? `${bordercolor} ${bgcolor}`
              : "text-dark-gray border-gray"
      }`}
    />
  );
}

export default CategoryButton;
