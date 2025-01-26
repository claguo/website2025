import React from 'react';
import { IoStarSharp } from 'react-icons/io5';

function SectionHeading({label}) {
  return (
    <div className="flex items-center gap-[0.5rem] text-bg-body text-md">
      <IoStarSharp />
      <h2>{label}</h2>
    </div>
  );
}

export default SectionHeading;