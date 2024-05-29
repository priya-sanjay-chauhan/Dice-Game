import React from 'react'
import './Button.module.css'

const Button = ({onClick,children}) => {
  return (
    <div>
        <button onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button