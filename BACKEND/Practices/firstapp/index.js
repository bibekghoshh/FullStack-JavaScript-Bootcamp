const express=require('express'); //bringing the express

const app=express(); //assgin the express into app

const port=3000; //assigning the port number

// Home route
app.get("/",(req,res)=>{
    res.status(201).send("Hey We are learning Exprexx FRamework");
})

// bibek route
app.get("/bibek",(req,res)=>{
    const bibek={
        firstname: "Bibek",
        Lastname: "Ghosh",
        age: 23,
        location: "India"
    };
    res.status(404).send({bibek});
});

app.get("/Insta",(req,res)=>{
    const insta={
        username:"Express framework",
        location:"Bengal",
        age:23,
        education:"Master's of computer Application"
    }
    res.status(201).json({insta});
});

app.listen(port,()=>{
    console.log("Server Running");
})


