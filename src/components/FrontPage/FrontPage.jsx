import React from 'react'
import styles from './FrontPage.module.css'
import Button from '../Button/Button'

const FrontPage = ({toggle}) => {

 return (
    <div>
        <div className={styles.container}>
            <img src="/images/dices.png" alt='there a image'/>
            <div className={styles.content}>
             <h1>DICE GAME</h1>
             {/* <button onClick={toggle}>Play Now</button> */}

            <Button onClick={toggle}>Start Game</Button>
            </div>
        </div>
    </div>
  )
}

export default FrontPage