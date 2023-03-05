# DOM assignment 4

### Before making Any changes

![image](./assets/mainPage.png)

### Task : Chaning the cards bottam section's COLOR

![image](./assets/finalOutput.png)

#### Solution:- 

```javascript

let colorChange=document.querySelectorAll(".clearfix");
let fontColor=document.querySelectorAll(".one-third");

let colors=["#3944F7","#38CC77","#EDBF69","#236578","#5A20CB","#12B0E8"];

let i=1;

colorChange.forEach((color)=> color.style.backgroundColor=colors[i++]);
fontColor.forEach((fc)=> fc.style.color="#ffffff");

```