function calc(){    //  break vs 
    let numbers=[10,20,25,30,40]
    for(let num of numbers){
        if (num%2!==0){       
            break;   //  stops the iteration andcome out from loop 
            //return   // come out from block
        }
        console.log(num)
    }
    console.log("GM")
}
calc()



