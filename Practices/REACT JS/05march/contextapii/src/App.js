import { createContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import UserCard from "./components/UserCard";

export const myContext=createContext();

function App() {
  const [name,SetName]=useState("");
  const [color,SetColor]=useState("");

  const myName=(event)=>{
    SetName(event.target.value);
  }

  const myColor=(event)=>{
    SetColor(event.target.value);
  }

  return (
    <myContext.Provider value={{name,color}}>
      <Navbar />
      <h1>here , i will be learning Context API</h1>
      <form>
        <input
          type={"text"}
          placeholder="Enter Your name"
          value={name}
          onChange={myName}
        />
        <input
          type={"text"}
          placeholder="Enter the color name"
          value={color}
          onChange={myColor}
        />
      </form>
      <HeroSection/>
      <UserCard/>

    </myContext.Provider>
  );
}

export default App;
