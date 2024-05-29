import React, { useState } from 'react'
import TotalScore from '../TotalScore/TotalScore'
import NumberSelector from '../NumberSelector/NumberSelector'
import styled from "styled-components"
import RoleDice from '../RoleDice'
import Button from '../Button/Button'
import Rules from '../Rules'

const GamePlay = () => {
  const [score, setScore] = useState(0)
  const [selectedNum, setSelectedNum] = useState();  // Everyone can use
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("")

  const[isVisible,setIsVisible]=useState(false)

    const toggleVisibility=()=>{
        setIsVisible(!isVisible);
    }


  const generateRandomNumber = () => {
    const num = Math.floor(Math.random() * 6) + 1;
    return num;
  }
  const roleDice = () => {
    if (!selectedNum) {
      setError("You have not selected any number")
      return;
    }
    setError("")
    const randomNumber = generateRandomNumber();
    setCurrentDice(randomNumber)



    if (selectedNum === randomNumber) {
      setScore((prev) => prev + randomNumber)
    } else {
      setScore((prev) => prev - 2)
    }

    setSelectedNum(undefined)
  }

  const resetScore = () => {
    setScore(0)
  }

  return (
    <MainContainer>
      <div className='top_section'>

        <TotalScore score={score} />
        <NumberSelector error={error} setError={setError} selectedNum={selectedNum} setSelectedNum={setSelectedNum} />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <Button onClick={resetScore}>Reset Score</Button>
        <Button onClick={toggleVisibility}>How to play</Button>
      </div>
      {isVisible && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
 padding-top:70px;
.top_section{
  display:flex;
  justify-content:space-around;
  align-items:end;
}

  .btns{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:10px;
    margin-top:40px;
  }


`