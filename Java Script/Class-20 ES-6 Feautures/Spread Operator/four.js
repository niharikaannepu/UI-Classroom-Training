//create new array based on existing array
let numbers=[11,7,8,8,11]
let new_numbers=[...numbers] //extract and copy
console.log(numbers)
console.log(new_numbers)


let a=[11,7,8,232,8] // merge arrays
let b=[20,30,40,50]

let c=[...a,...b]
console.log(c)  // array allowed duplicates


//extend array elements

let num=[10,20,30,40]
let num2=[...a,50,60,30,40]
console.log(num2)
