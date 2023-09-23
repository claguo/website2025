import React from 'react'
import LoveCardItem from './LoveCardItem'
import cereal from '../../assets/imgs/love/lovecereal.png'
import marina from '../../assets/imgs/love/lovemarina.webp'
import grass from '../../assets/imgs/love/lovegrass.jpeg'
import out from '../../assets/imgs/love/loveout.webp'
import debussy from '../../assets/imgs/love/lovedebussy.jpg'
import val from '../../assets/imgs/love/loveval.PNG'
import snow from '../../assets/imgs/love/lovesnow.JPG'

function LoveCards() {

  return (
    <>
    {/* <h2>outside of the studio, i am...</h2> */}
    <div className='threeColumns' style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    }}>
        <LoveCardItem
        src={grass}
        text="sitting in the grass"
        />
                <LoveCardItem
        src={val}
        text="trying to hit plat"
        />
                <LoveCardItem
        src={cereal}
        text="eating cereal"
        /> 

        <LoveCardItem
        src={debussy}
        text="learning debussy's arabesques"
        />

        <LoveCardItem
        src={marina}
        text="looking for marina"
        /> 
                <LoveCardItem
        src={snow}
        text="waiting for it to snow"
        />
                <LoveCardItem
        src={out}
        text="reading OUT by Natsuo Kirino"
        />



    </div>
    </>
  )
}

export default LoveCards
