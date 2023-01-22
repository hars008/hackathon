import React from 'react'
import HomeCard from './HomeCard'
import './CategoryDeck.css'
const CategoryDeck = (props) => {
  return (
    <div className="deck">
      <h2 className='homeDeckTitle'>{props.language} Shows</h2>
      <div className="row HomeCard">
        <HomeCard
          id="1"
          title="The Shawshank Redemption"
          description="Two imprisoned"
          img="https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg"
        />
        <HomeCard
          id="2"
          title="The Shawshank Redemption"
          description="Two imprisoned"
          img="https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg"
        />
        <HomeCard
          id="3"
          title="The Shawshank Redemption"
          description="Two imprisoned"
          img="https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg"
        />
        <HomeCard
          id="4"
          title="The Shawshank Redemption"
          description="Two imprisoned"
          img="https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg"
        />
      </div>
    </div>
  );
}

export default CategoryDeck
