import React from 'react'
import { useState } from 'react';
import './first.css'
import TotalScore from './TotalScore'
import Numbers from './Numbers';
import Rolldice from './Rolldice';
import Rules from './Rules';


const Secondpage = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const[currentDice,setCurrentDice]=useState(1);
  const[score,setScore]=useState(0);
  const[error,setError]=useState();
  const[showRules,setShowRules]=useState(false);


  
const GenRandomNumber=(min,max)=>{
  return Math.floor(Math.random()*(max-min)+min);
};
const roleDice=()=>{
  if(!selectedNumber) {
    setError("you have not selected any number");
      return
    
  };
  setError("");

  const randNumber=GenRandomNumber(1,7);
setCurrentDice((prev)=>randNumber);

if(selectedNumber===randNumber){
  setScore((prev)=>prev+randNumber);
}
else{
  setScore((prev)=>prev-2);
}
setSelectedNumber(undefined);
};


const resetScore=()=>{
  setScore(0);
};
  return (
  <>

  <TotalScore score={score}/>
  <Numbers  error={error} setError={setError}  selectedNumber={selectedNumber}  setSelectedNumber={setSelectedNumber}/>
<Rolldice  currentDice={currentDice} roleDice={roleDice} />
<div className="btnsss">
<button class="reset" onClick={resetScore}>Reset Score  </button>
<button className="rules" onClick={()=>setShowRules((prev)=>!prev)}>
{showRules ? "Hide ":"Show "}
 Rules</button>
</div>
 {showRules && <Rules/>}      
</>

        
  )
}

export default Secondpage;