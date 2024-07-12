import React from 'react'
import SuggestionsCard from '../../Components/Cards/Suggestions-card'

export default function Suggestions() {
  return (
    <div className="container">
      <div className='suggestions-section py-5'>
        <div className='suggestions-section__info'>
          <h1 className='suggestions-info__title'>Best Weekly Offers In Each City</h1>
          <p className='suggestions-info__subtitle'>Discover the best weekly offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences.</p>
        </div>
        <div className='suggestions-section__cards'>
          <SuggestionsCard />
        </div>
      </div>
    </div>

  )
}
