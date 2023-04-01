import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Counter />
      <SuperHeros />
    </div>
  );
}

function Counter() {
  let [count, SetCount] = useState(1);
  function Oneup() {
    count++;
    SetCount(count++);
  }
  function Onedown() {
    count--;
    SetCount(count--);
  }
  return (
    <div>
      <button onClick={Oneup}>Count ++ </button>
      <button onClick={Onedown}> Count --</button>
      <h2>{count}</h2>
    </div>
  );
}

function SuperHeros() {
  const [hero, SetHero] = useState(["BatMan", "Spider", "IronMan"]);
  const [name, SetName] = useState(() => "Antman");
  const onAddName=()=>{
    SetHero([...hero,name]);
    SetName("");
  }
  return (
    <div>
      <ul>
        {hero.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => SetName(e.target.value)}
      />
      <button onClick={onAddName}>Add value</button>
    </div>
  );
}

export default App;
