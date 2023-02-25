import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {

  const [count,setCount] = useState(0);

  return(
      <div className="App">
      <header>
        <h1>Counter App using State/Hooks</h1>
      </header>
      <h2>Current Value is {count}</h2>

      <button onClick={()=>setCount(0)}>Reset Counter</button>
      <button onClick={()=>(count>10?"":setCount(count+1))}>Increase the Value</button>
      <button onClick={()=>(count<=0?"":setCount(count-1))}>Decrease the value</button>
      </div>
  )
};

export default App;