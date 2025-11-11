let enames=["rahul","sonia","priyanka","modi"]
let numbers=[11,7,8,232,104,41,8,12]

//WAP to print all even numbers without filter

let even_nos=[]
for(let num of numbers){
    if(num%2===0){
        even_nos.push(num);
    }
}

//console.log(numbers)
console.log(even_nos)