var user={
    firstName:"Bibek",
    lastName:"Ghosh",
    courseList:[],
    buyCourse:function(courseName){ //here we are declareing a method in an object
        this.courseList.push(courseName);
    },
    getCourseCount: function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    userInfo : function(){
        return `${this.firstName} ${this.lastName} is enrolled ${this.courseList.length} courses and those are ${this.courseList}`
    }
};

// var courseList=true;

console.log(user.firstName);
user.buyCourse("ReactJS course");
user.buyCourse("angular course");

 console.log(user.getCourseCount());

 console.log(user.userInfo());


