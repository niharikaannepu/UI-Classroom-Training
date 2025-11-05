let wish=name=>"Hello"+name+"GM"
let msg=wish("Rahul")
console.log(msg) // fataaroo fun with implicit return 



let wish1=(name)=>{
    return "Hello"+name+"GM"
}
let msg1=wish1("Rahul") /// fataroo with return


function wish2(ename){
    return "Hello"+ename+"GM"
}
console.log(wish2("Sonia"))