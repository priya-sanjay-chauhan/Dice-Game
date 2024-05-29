import React, { useState } from 'react'
import styled from "styled-components"

const RoleDice = ({currentDice,roleDice}) => {


  return (
    <DiceContainer>

    <div className='dice'>
        <img src={`/images/dice_${currentDice}.png`} alt="" onClick={roleDice}/>
    </div>
        <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RoleDice


const DiceContainer=styled.div`
margin-top:48px;
display:flex;
flex-direction:column;
justify-content:center;

.dice{
    cursor:pointer;
}

img{
    width:300px;
    height:300px;
}

@media (max-width: 768px){
    img{
        width:200px;
        height:200px;
    }
}

@media (max-width: 480px){
    display:flex;
    justify-content:center;
    align-items:center;
}

`

