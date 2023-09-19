import React from "react";

function P5jsExperiments() {
//   const experiments = [
//     {
//       id: 1,
//       desc: 'click',
//       src: ''
//     },
//     {
//       id: 2,
//       src: ''
//     }
//   ]
//   return (
//     <>
//     {experiments.map((exp) => 
//       <figure key={ exp.id }>
//         <div className='twoColumns'>
//           <h2> { exp.id } </h2>
//           <p> { exp.desc } </p>
//         </div>
//         <iframe src={ exp.src } className='fourColumns' height='30vh' />
//       </figure>
//     )} 
//     </>
//   )
// }

  return (
    <figure className='section'>
      <h2>2. my favorite sketch!</h2>
      <p>Click to lock a flower in place, and try to find the butterfly :)</p>
      <iframe src="https://openprocessing.org/sketch/1931277/embed/" style={{ width: '100%', height: '80vh', marginTop: '2rem' }}></iframe>
    </figure>
  )
}

export default P5jsExperiments;

