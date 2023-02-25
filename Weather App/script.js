const dates=new Date();

const weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday",
    "Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"];

const inputBox=document.getElementById("inputBox");
const temp=document.getElementById("current-temp");
const fullLocation=document.getElementById("full-location");
const conditionText=document.getElementById("condition-text");
const currentConditionImg=document.getElementById("current-condition-img");

const forecastTimeOne=document.getElementById("timeZone-one");
const forecastTimeTwo=document.getElementById("timeZone-two");
const forecastTimeThree=document.getElementById("timeZone-three");
const forecastTimeFour=document.getElementById("timeZone-four");
const forecastTimeFive=document.getElementById("timeZone-five");
const forecastTimeSix=document.getElementById("timeZone-six");

const tempzoneOne=document.getElementById("tempzone-one");
const tempzoneTwo=document.getElementById("tempzone-two");
const tempzoneThree=document.getElementById("tempzone-three");
const tempzoneFour=document.getElementById("tempzone-four");
const tempzoneFive=document.getElementById("tempzone-five");
const tempzoneSix=document.getElementById("tempzone-six");

const dayOne=document.getElementById("dayOne");
const dayTwo=document.getElementById("dayTwo");
const dayThree=document.getElementById("dayThree");
const dayFour=document.getElementById("dayFour");

const dayoneHigh=document.getElementById("dayoneHigh");
const dayoneLow=document.getElementById("dayoneLow");
const daytwoHigh=document.getElementById("daytwoHigh");
const daytwoLow=document.getElementById("daytwoLow");
const daythreeHigh=document.getElementById("daythreeHigh");
const daythreeLow=document.getElementById("daythreeLow");
const dayfourHigh=document.getElementById("dayfourHigh");
const dayfourLow=document.getElementById("dayfourLow");
const dayonewetherimg=document.getElementById("dayonewetherimg");
const daytwowetherimg=document.getElementById("daytwowetherimg");
const daythreewetherimg=document.getElementById("daythreewetherimg");
const dayfourwetherimg=document.getElementById("dayfourwetherimg");


const getData= async (event)=>{
    event.preventDefault();
    if(!inputBox.value){
        alert("Please Enter City Name:");
        return;
    }

    const city=inputBox.value;

    // Fetch Details
    const currentData=await fetch(`http://api.weatherapi.com/v1/current.json?key=763a4987b8584183967112518231302&q=${city}`);
    const forecastDataFetch=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=763a4987b8584183967112518231302&q=${city}&days=4`);

    const orgData=await currentData.json();
    const orgData2=await forecastDataFetch.json();
    let data=orgData;
    let forecastData=orgData2;
    console.log(forecastData);

    temp.innerHTML = `${data.current.temp_c}°`;
    fullLocation.innerHTML=`${data.location.name}, ${data.location.region}, ${data.location.country}`;
    conditionText.innerHTML=data.current.condition.text;
    currentConditionImg.src=data.current.condition.icon;

    const dayHour=dates.getHours()+1;
        if(dayHour>17){
            tempzoneOne.innerHTML=`${forecastData.forecast.forecastday[0].hour[18].temp_c}°`;
            tempzoneTwo.innerHTML=`${forecastData.forecast.forecastday[0].hour[19].temp_c}°`;
            tempzoneThree.innerHTML=`${forecastData.forecast.forecastday[0].hour[20].temp_c}°`;
            tempzoneFour.innerHTML=`${forecastData.forecast.forecastday[0].hour[21].temp_c}°`;
            tempzoneFive.innerHTML=`${forecastData.forecast.forecastday[0].hour[22].temp_c}°`;
            tempzoneSix.innerHTML=`${forecastData.forecast.forecastday[0].hour[23].temp_c}°`;

        }
        if(dayHour<=17){
            tempzoneOne.innerHTML=`${forecastData.forecast.forecastday[0].hour[dayHour].temp_c}°`;
            tempzoneTwo.innerHTML=`${forecastData.forecast.forecastday[0].hour[dayHour+1].temp_c}°`;
            tempzoneThree.innerHTML=`${forecastData.forecast.forecastday[0].hour[dayHour+2].temp_c}°`;
            tempzoneFour.innerHTML=`${forecastData.forecast.forecastday[0].hour[dayHour+3].temp_c}°`;
            tempzoneFive.innerHTML=`${forecastData.forecast.forecastday[0].hour[dayHour+4].temp_c}°`;
            tempzoneSix.innerHTML=`${forecastData.forecast.forecastday[0].hour[dayHour+5].temp_c}°`;
        }


    dayoneHigh.innerHTML=`${forecastData.forecast.forecastday[0].day.maxtemp_c}°`;
    dayoneLow.innerHTML=`${forecastData.forecast.forecastday[0].day.mintemp_c}°`;
    daytwoHigh.innerHTML=`${forecastData.forecast.forecastday[1].day.maxtemp_c}°`;
    daytwoLow.innerHTML=`${forecastData.forecast.forecastday[1].day.mintemp_c}°`;
    daythreeHigh.innerHTML=`${forecastData.forecast.forecastday[2].day.maxtemp_c}°`;
    daythreeLow.innerHTML=`${forecastData.forecast.forecastday[2].day.mintemp_c}°`;
    dayfourHigh.innerHTML=`${forecastData.forecast.forecastday[3].day.maxtemp_c}°`;
    dayfourLow.innerHTML=`${forecastData.forecast.forecastday[3].day.mintemp_c}°`;
    
    dayonewetherimg.src=forecastData.forecast.forecastday[0].day.condition.icon;
    daytwowetherimg.src=forecastData.forecast.forecastday[1].day.condition.icon;
    daythreewetherimg.src=forecastData.forecast.forecastday[2].day.condition.icon;
    dayfourwetherimg.src=forecastData.forecast.forecastday[3].day.condition.icon;

};



const days=dates.getDay();
const hours=dates.getHours();
// console.log(hours);

function timePrediction(hours){
    const h=hours-1;
    function ampm(hours){
        let ampm=hours>11?"PM":"AM";
        let hour=(hours%12)+1;
        let strTime=hour+ampm;
        return strTime;
    }
        if(h>17) {
            let hour=18
            forecastTimeOne.innerHTML=ampm(hour);
            forecastTimeTwo.innerHTML=ampm(hour+1);
            forecastTimeThree.innerHTML=ampm(hour+2);
            forecastTimeFour.innerHTML=ampm(hour+3);
            forecastTimeFive.innerHTML=ampm(hour+4);
            forecastTimeSix.innerHTML=ampm(hour+5);
            
        }
        if(h<=17){
            forecastTimeOne.innerHTML=ampm(h);
            forecastTimeTwo.innerHTML=ampm(h+1);
            forecastTimeThree.innerHTML=ampm(h+2);
            forecastTimeFour.innerHTML=ampm(h+3);
            forecastTimeFive.innerHTML=ampm(h+4);
            forecastTimeSix.innerHTML=ampm(h+5);
        }
}
timePrediction(hours);


function daysPrediction(days){
    dayOne.innerHTML=weekdays[days];
    dayTwo.innerHTML=weekdays[days+1];
    dayThree.innerHTML=weekdays[days+2];
    dayFour.innerHTML=weekdays[days+3];
}
daysPrediction(days);

// fixed time here
function updateClock(){
        const date=new Date();
        const currentTime=date.toLocaleTimeString().toUpperCase();
        const day=date.getDate();
        const month=date.getMonth();
        const year=date.getFullYear();
        
        let months=["January","February","March","April","May","June","july","August","September","October","November"];
        let currentDate=`${months[month]} ${day}, ${year}`;
        
        document.getElementById("current-time").innerText=currentTime;
        document.getElementById("current-date").innerText=currentDate;
        // console.log(currentDate);
}
function initClock(){
    updateClock();
    window.setInterval("updateClock()",1);
};