import React, { useState } from "react";


function App() {

  const [count,SetCount]=useState(0);
  const upOne=()=>{
    SetCount(count+1);
  }
  const downOne=()=>{
        SetCount(count-1);
  }
  return (
    <div>
    <h1>Counter APP</h1>
    <p>{count}</p>
    <button onClick={upOne}>+</button>
    <button onClick={downOne}>-</button>
    </div>
  );
}

export default App;
