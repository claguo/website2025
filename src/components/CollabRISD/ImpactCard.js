import React, { useState } from "react";

function ImpactCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div
      onMouseEnter={() => {setIsHovered(true)}}
      onMouseLeave={() => {setIsHovered(false)}}
      onClick={() => {setIsOpen(!isOpen)}}
      className={`px-4 py-4 rounded-lg lg:rounded-2xl ${isOpen ? 'bg-collab-purple' : isHovered ? 'bg-gray' : ''} ${isHovered ? 'cursor-pointer' : ''}`}>
      <div className='flex justify-between'>
        <div className='flex text-sm lg:text-base'>
          <p style={{marginRight: '0.5rem'}}>❋</p>
          <b>{props.content}</b>
        </div>
        <b className='flex text-sm lg:text-base ml-2'>{isOpen ? '-' : '+'}</b>
      </div>
      {isOpen 
      ? props.src.length === 2
        ?<figure className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 mx-4 mt-2'>
          <div className='flex flex-col lg:w-[45%] h-100 gap-2'>
            <img src={props.src[0]} alt={props.caption[0]} className='h-4/5'/>
            <p className='text-sm lg:text-base'>{props.caption[0]}</p>
          </div>
          <div className='flex flex-col lg:w-[53%] h-100 gap-2'>
            <img src={props.src[1]} alt={props.caption[1]} className='h-4/5'/>
            <p className='text-sm lg:text-base'>{props.caption[1]}</p>
          </div>
        </figure>
        :<>
          <figure className='mx-4 mt-2 flex flex-col gap-2'>
            <img src={props.src[0]} alt={props.caption[0]}/>
            <p className='text-sm lg:text-base'>{props.caption[0]}</p>
          </figure>
        </>
      : null}
    </div>
  )
}

export default ImpactCard;