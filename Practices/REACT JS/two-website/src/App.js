import React from "react";

import NavBar from "./NavBar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import AppSection from "./AppSection";
import CardSection from "./CardSection";



const App =()=>{
    return (
        <div>
            {/* <h1>Bibek </h1> */}
            <NavBar />
            <HeroSection/>
            <AppSection />
            <CardSection />
            <Footer/>
        </div>
    )
};

export default App;