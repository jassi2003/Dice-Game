
// import React, { useState } from 'react';

const Numbers = ({setError,error,selectedNumber,setSelectedNumber}) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
 
const numberSelecterHandler=(value)=>{
    setSelectedNumber(value)
  setError("")
}

    return (
       
        <box>
            <p className="error">{error}</p>
        <div class="numbers-container"> 

            {arrNumber.map((value, i) => (
            <div class="numbers"
                    key={i}
                    onClick={()=>numberSelecterHandler(value) }>
                    <h1
                    className={` ${value === selectedNumber ? 'selected' : ''}`}>{value}</h1>

            </div>

                
            ))}
        </div>

        <p class="para">SELECT NUMBER</p>
        </box>
    );
};

export default Numbers;
