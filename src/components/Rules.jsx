import React, { useState } from 'react'
import styled from "styled-components"

const Rules = () => {
    

  return (
    <RuleContainer>

    <div className="howToPlay">
        <h2>How to play dice game</h2>
        <ul>
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
          <li>if you get wrong guess then  2 point will be dedcuted</li>
        </ul>
      </div>
    </RuleContainer>
  )
}

export default Rules


const RuleContainer = styled.div`
max-width: 800px;
  margin: 0 auto;
  background-color: pink;
  padding: 20px;
  margin-top: 40px;
  border-radius: 20px;
  h2 {
    font-size: 26px;
  }
  li {
    text-align:start;
    margin-top: 20px;
  }

  @media (max-width: 768px){
    max-width: 550px;

    li {
        text-align:start;
        margin-top: 16px;
      }
    
  
  }
  
  @media (max-width: 480px){
    max-width: 360px;
    h2 {
        font-size: 25px;
      }
        li {
            text-align:start;
            margin-top: 10px;
          }
  }
`