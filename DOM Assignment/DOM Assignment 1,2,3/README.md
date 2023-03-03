# DOM Assignment

### Before making any changes what it looks
![image](./Assets/Main%20page.png)

## Assignment One

### Task 1: Add a list item on Navbar <mark>"Hire Me"</mark>
![image](./firstAssignmentImage/task1Output.png)

#### Solution:-

let HireMe=document.createElement("li");
HireMe.innerHTML="<a>Hire Me</a>";
document.querySelector("nav ul").appendChild(HireMe);

### Task 2: Changed the <mark>Placeholder of search bar</mark>
![image](./firstAssignmentImage/task2Output.png)

#### Solution:- 

document.querySelector(".search-field input").placeholder="Search My Project";

### Task 3: Changed the JOB role and Company name in the paragraph
![image](./firstAssignmentImage/task3Output.png)

#### Solution:- 

```javascript

let role=document.querySelector(".hero-left-section p :nth-child(3)");
role.innerHTML="An Employee";
let company =document.querySelector(".hero-left-section p :nth-child(5)");
company.innerHTML="iNeuron Intelligence Pvt Ltd";

```