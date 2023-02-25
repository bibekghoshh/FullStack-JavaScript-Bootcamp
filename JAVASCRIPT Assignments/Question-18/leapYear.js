var year=2023;

if((0==year%4)&& (0!==year%100) || 0==year%400){
    console.log(`${year} is leapyear`);
}else{
    console.log(`${year} is not leap year`);
}