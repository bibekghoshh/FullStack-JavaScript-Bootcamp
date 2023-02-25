var i=0;
for (let index = 0; index <10; index++) {
    
    if(i>3) break;

    console.log(i);

    i++;
    
}

// for of -> use for array majorly

// for in -> use for object majorly

const names=["youtube","linkedin","github","leetcode","hashnode"];
for(const elements of names){
    console.log(elements);
}

const media={
    first:"facebook",
    second:"instagram",
    third:"youtube",
    fourth:"moj",
};

for(let values in media){
    console.log(values);  // access to key only
    console.log(media[values]); //this will print values of keys

    console.log(`key is ${values} and value is ${media[values]}`);
}