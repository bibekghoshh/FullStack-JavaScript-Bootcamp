const courses=[
    {
        name:"Javascript Course",
        price:"2.1",
    },
    {
        name:"Angular Course",
        price:"4.2",
    },
    {
        name:"ReactJS Course",
        price:"2.4",
    },
    {
        name:"MongoDB Course",
        price:"3.2",
    },
    {
        name:"Android dev",
        price:"4.8",
    }
];

function generateLIST(){
    const ul=document.querySelector(".list"); //targeting an element by his class name
    ul.innerHTML="";

    courses.forEach((course) => {

        const li=document.createElement("li");  //creating an element li tag
        li.classList.add("course-name"); //giving class name to an element
        const name=document.createTextNode(course.name); //fetching the name storing into a variable
        li.appendChild(name);  //pushing name into li element

        const span=document.createElement("span"); //creating an span tag
        span.classList.add("course-price"); // adding class name to span tag
        const coursePrice=document.createTextNode("$ "+course.price); //fetching price and storing into a variable
        span.appendChild(coursePrice);  //adding value into span tag

        li.appendChild(span); //adding span tag under li tag
        ul.appendChild(li); //adding li tag under ul tag
    });
}


window.addEventListener("load",generateLIST);

const asenSort=document.querySelector(".sort-btn");

asenSort.addEventListener("click", ()=>{
    courses.sort((a,b)=> a.price-b.price);
    generateLIST();
});

// assignment

const desSort=document.querySelector(".des-sort");

desSort.addEventListener("click", ()=>{
    courses.sort((a,b)=>b.price-a.price);
    generateLIST();
});
