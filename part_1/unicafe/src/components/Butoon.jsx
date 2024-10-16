import React from 'react'

export const Butoon = ({
  handleGoodButton,
  handleNeutralButton,
  handleBadButton
}) => {
  return (
    <div>
      <button onClick={handleGoodButton}>Good</button>
      <button onClick={handleNeutralButton}>Neutral</button>
      <button onClick={handleBadButton}>Bad</button>
    </div>
  )
}
