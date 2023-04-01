import React, { useEffect, useState } from "react";
import Card from "./card";
import Axios from 'axios';

function App(){

    const [details,SetDetails]=useState({});

    const fetechDetails= async () => {
        const {data} = await Axios.get('https://randomuser.me/api')
        console.log("REsponse",data);

        const details =data.results[0];
        SetDetails(details);
    }

    let list=["Bibek","Sourav","Uttam"];

        useEffect(()=>{
            fetechDetails()
        },[])

    return(
        <div>
            <h1>App</h1>
            <Card myname="Bibek" list={list} details={details}/>
            <button onClick={fetechDetails}>Get Details</button>
        </div>
    )
}

export default App;