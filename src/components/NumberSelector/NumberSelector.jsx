import React, { useState } from 'react'
import styled from "styled-components"


const NumberSelector = ({error,setError,selectedNum,setSelectedNum}) => {
  const arr=[1,2,3,4,5,6];
 
  const  numberSelectorHandler=(val)=>{
    setSelectedNum(val)
    setError("")
  }

  return (
    <NumberSelectorContainer>
      <p className='error'>{error}</p>
      <div className='flex'>
      {arr.map((val,i) => {
         return <Box className='box' isSelected={val === selectedNum} onClick={()=>numberSelectorHandler(val)} key={i}>{val}</Box>
      })}
      </div>
      <p>Select Number</p>
      
    </NumberSelectorContainer> 
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color: red;
  }

  @media (max-width: 768px){
    .flex {
      display: flex;
      gap: 20px;
    }
    p {
      font-size: 20px;
      font-weight: 700px;
    }

  }

  @media (max-width: 480px){
    .error {
      font-size:16px;
    }

  }
  
 
`;

const Box= styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor:pointer;
  background-color: ${(props)=> (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};

  
@media (max-width: 768px){
  height: 60px;
  width: 60px;

}

@media (max-width: 480px){
  height: 35px;
  width: 35px;
}
`;