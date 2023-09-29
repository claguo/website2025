import React from "react";

function ContainerGray({children}) {
  return (
    <div className='
      flex flex-col mt-16 py-12 px-6 rounded-lg
      lg:mt-36 lg:py-36 lg:px-[14.286%] lg:rounded-2xl bg-bg-gray'>
      {children}
    </div>
  )
}

export default ContainerGray;