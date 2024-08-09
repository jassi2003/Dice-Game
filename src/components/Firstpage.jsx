import React from 'react'
import './first.css'

const Firstpage = ({toggle}) => {
  return (
 <div class="container">
    <img src="/images/dices.png" alt="" />
    <div class="container2">
    <h1>DICE GAME</h1>
    <button onClick={toggle}>Play Now</button>
    </div>
    </div>
  )
}

export default Firstpage