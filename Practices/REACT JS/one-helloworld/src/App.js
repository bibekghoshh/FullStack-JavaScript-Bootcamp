import React from "react";
import "./style.css";

import Button from "./Button";

const App = ()=>{
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Welcome to React Js</h1>
            {/* <button className="button">Click Me</button> */}
            <Button title="play Store" />
            <Button title="App Store" />
        </div>
    );
};

export default App;