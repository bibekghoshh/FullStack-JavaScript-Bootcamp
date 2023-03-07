# DOM Assignment 8

### 1). Before change

![image](./Output/ass8.1-before.png)

###After

### Task 1: Adding scroll bar to the side section
### Task 2: adding a line between last heading
### Task 3: adding a new heading at the end

![image](./Output/ass8.1-after.png)

#### Solution:-

```javascript
// Adding left scroll bar into the side section

let scroll=document.querySelector(".new");
scroll.style.borderStyle="solid";
scroll.style.maxHeight="500px";
scroll.style.overflow="scroll";
scroll.style.borderColor="red";

// adding line between headings

let hr=document.createElement('HR');
hr.className="hr-line";
scroll.appendChild(hr);

// adding one more heading to the section

let h2=document.createElement('H2');
h2.innerText="This is my custom heading";
h2.className="new-head";
scroll.appendChild(h2);

```

### 2). Before change

![image](./Output/ass8.2-before.png)

### After

### Task 1: changing the whole background 

![image](./Output/ass8.2-after.png)

#### Solution:- 

```javascript

document.querySelector(".container-fluid").style.backgroundColor="white";

```

### 3). Before change

![image](./Output/ass8.3-before.png)

### After

### Task 1: working on the toogle Menu bar 

![image](./Output/ass8.3-after.png)

#### Solution:- 

```javascript

let navbar=document.querySelector(".navbar-nav");
let navBtn=document.querySelector(".navbar-toggler");
let collapse=document.querySelector(".collapse");

navBtn.addEventListener("click",()=>{
    collapse.style.display="block"; 
    navbar.style.flexDirection="column";
    })

```