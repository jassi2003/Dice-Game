import React from 'react'

const TotalScore = ({score}) => {
  return (
    <div className="container3">
    <div className="score">
        <h1>{score}</h1>
        <p><b>TOTAL SCORE</b></p> 
      </div>
      </div> 
  )
}

export default TotalScore