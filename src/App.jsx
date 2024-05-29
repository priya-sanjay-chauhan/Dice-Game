import { useState } from 'react'
import './App.css'
import FrontPage from './components/FrontPage/FrontPage'
import GamePlay from './components/GamePlay/GamePlay'

function App() {
  const [isGameStarted,setIsGameStarted]=useState(false)

  const togglePlay=()=>{
    console.log("button clicked")
    setIsGameStarted((prev)=> !prev)
  }

  return (
    <>
    {isGameStarted ? <GamePlay/> : <FrontPage toggle={togglePlay}/>}
      
    </>
  )
}

export default App

