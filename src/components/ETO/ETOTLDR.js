import React from 'react';
import { useProjectContext } from '../../context/ProjectContext';
import ExternalURLButton from "../ExternalURLButton";
import CollabTLDR from '../CollabRISD/CollabTLDR';


function ETOTLDR() {

  return (
    <div className='section section-gray'>
      <h2> 0. tl;dr </h2>
      <h1 style={{marginRight: '20%'}}>Reducing bycatch waste in New England fishing industries by diversifying consumer diet.</h1>
      <p className='right-p'>An estimated 17-22% (2 billion pounds) of U.S. catch is discarded annually. Bycatch fish are tossed overboard as waste, despite their potential value as nutritious sources of food. Eat the ocean is a seafood restaurant that introduces American consumers to new, "bycatch" seafood species served in familiar seafood dishes.</p>
    </div>
  )
}

export default ETOTLDR;