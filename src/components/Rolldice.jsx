import React from 'react'
// import { useState } from 'react';


const Rolldice = ({roleDice,currentDice}) => {
    // const[score,setScore]=useState(0);
    



return (
    <box>
        <div class="rolldice-container" onClick={roleDice}> 
<img class="roll"src={`/images/dice/dice_${currentDice}.png`} alt="" />
<p class="click">Click Dice To Roll</p>


</div>
    </box>
  )
}

export default Rolldice;