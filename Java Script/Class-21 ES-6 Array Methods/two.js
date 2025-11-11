let enames=["rahul","sonia","priyanka","modi"]

let new_enames=enames.forEach((ename)=>{       //foreach iterate array and execute function
    /* console.log(enames.touppercase()) */
    return ename.toUpperCase()

})
console.log(enames)
console.log(new_enames)