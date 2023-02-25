import React, { useState } from "react";
import ThemeContext from "./Context/ThemeContext";
import Header from "./Compontents/Header"
import HeroSection from "./Compontents/HeroSection";

const App =()=>{
    const themeHook=useState("light");
  return(
      <ThemeContext.Provider value={themeHook}>
        <div>
          <Header/>
          <HeroSection />
        </div>
      </ThemeContext.Provider>
  )
};

export default App;