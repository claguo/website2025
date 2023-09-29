import React from "react";
import ContainerGray from "./ContainerGray";
import H2 from "./H2";

function NextSteps(props) {
  return (
    <ContainerGray>
      <div className='flex flex-col lg:flex-row'>
        <H2 className='w-2/5'> {props.section}. next steps </H2>   
        <div className='lg:w-3/5 flex flex-col gap-4 text-sm lg:text-base'>
          {props.steps.map((step, index) =>
            <p key={ index }> { step } </p>
          )}  
        </div> 
      </div> 
    </ContainerGray>
  )
}

export default NextSteps;