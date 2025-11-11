let enames=["rahul","sonia","priyanka","modi"]
//create a new array with uppercase emp names? 
// using existing source
/* iterate array
1)for
2)while
3)do while
4)for Of
5)foreach */
let users=[]
for(let ename of enames){
    users.push(ename.toUpperCase())
}
console.log(users)