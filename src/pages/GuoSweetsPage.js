import React from 'react'
import ProjectHero from '../components/ProjectHero'
import GuoTLDR from '../components/GuoSweets/GuoTLDR'
import GuoZine from '../components/GuoSweets/GuoZine'
import ProjectNavButtons from '../components/ProjectNavButtons'

function GuoSweetsPage() {
  return (
    <>
      <ProjectHero />
      <GuoTLDR />
      <GuoZine />
      <ProjectNavButtons />
    </>
  )
}

export default GuoSweetsPage
