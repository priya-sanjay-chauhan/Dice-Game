import React from 'react'
import './TotalScore.module.css'

const TotalScore = ({score}) => {
  return (
    <div>
        <h1>
         {score}
        </h1>
        <p>Total score</p>
    </div>
  )
}

export default TotalScore