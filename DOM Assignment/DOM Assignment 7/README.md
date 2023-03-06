# DOM Assignment 7

## Assignment One

### Before change

![image](./output/ass7.1-before.png)

### Task 1: Remove the languages that have "2.0" in their name

![image](./output/ass7.1-after.png)

#### Solution:- 

```javascript

let language=document.querySelectorAll(".main__languages a");

language.forEach((e)=>{
            if(e.innerText.includes("2.0"))
                {
                e.remove()
                }});

```

## Assignment Two

### Before Change

![image](./output/ass7.2-before.png)

### Task 1: Write "iNeuron" into input box
### Task 2: enable "submit" Button and also reset the Languages after clicking Submit Button
### Task 3: creating the Warning

![image](./output/ass7.2-after.png)


#### Solution:- 

```javascript
// puting value into input box

let input=document.querySelector(".main__form-input");
input.value="iNeuron";

// enabling the Submit Button

let submitBtn=document.querySelector(".main__form-btn");
submitBtn.disabled=false;

// reseting the language after clicking submit button

submitBtn.addEventListener("click",() =>{
    language.forEach((lan)=>{
        language.innerText=lan
        })});

// create the warning  

let warning=document.createElement('P');
warning.innerText="After writing the text submit the form";
warning.style.backgroundColor="red";
warning.style.display="block";
warning.style.padding="5px 10px";
warning.style.fontSize="25px";
warning.style.borderRadius="5px";
warning.style.color="white";
warning.style.textAlign="center";
warning.className="warning";

document.querySelector(".main").appendChild(warning);

```