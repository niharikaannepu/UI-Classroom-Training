let numbers=[11,7,8,232,104,41,8,12]

//WAP to print all even numbers with filter
//collect all even number into new array

/* let evens=numbers.filter((num)=>{
    return num%2===0     //  filter with fatarrooo function
}) */

let evens=numbers.filter(num=>num%2===0) //filter with implicit return
console.log(evens)