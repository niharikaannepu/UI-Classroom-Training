function display(){
    //let cdt=new Date().toDateString()
    let cdt=new Date().toLocaleString()

    console.log(cdt)
    let ptag_ref=document.getElementById("xyz")
    console.log(ptag_ref)
    ptag_ref.innerHTML=cdt
}