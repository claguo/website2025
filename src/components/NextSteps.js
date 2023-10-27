import React from "react";
import ContainerGray from "./ContainerGray";
import H1 from "./H1";

function NextSteps(props) {
  return (
    <ContainerGray>
      <div className='flex flex-col lg:flex-row'>
        <H1 className='w-2/5'> {props.section}. next steps </H1>   
        <div className='lg:w-3/5 flex flex-col gap-4 text-sm lg:text-base'>
          {props.steps.map((step, index) =>
            <p key={ index }>❋ { step } </p>
          )}  
        </div> 
      </div> 
    </ContainerGray>
  )
}

export default NextSteps;