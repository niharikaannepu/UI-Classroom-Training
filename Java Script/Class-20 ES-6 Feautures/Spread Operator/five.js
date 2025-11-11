//craete an object
let emp={"eid":101,"ename":"rahul","esal":4500.45}
let user={... emp}
console.log(user)

//merge two objects
let employee={"ename":"Rahul","email":"niharikaannepu78@gmail.com"};
let details={"email":"niharikaannepu78@gmail.com","loc":"wayanad"}

let emp_details={... emp,...details}
console.log(emp_details) //note:duplicate keys are not allowed


//extending object elements

let users={...emp, "avail" : true}
console.log(users)