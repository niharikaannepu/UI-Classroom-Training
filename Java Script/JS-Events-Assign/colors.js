function changecolor1(){
    document.getElementById('xyz').style.backgroundColor="yellow"
    
}

function changecolor2(){
    document.getElementsByTagName("button")[1].style.backgroundColor="pink"
}

function changecolor3(){
    document.querySelector('.btn3').style.backgroundColor="green"
    
}

function changecolor4(){
    document.getElementsByClassName('btn4')[0].style.backgroundColor="Red"
}
function changecolor5(){
    document.getElementById('five').style.background="aqua"
}
function changecolor6(){
    let name=document.getElementById('frm2').value;
    document.getElementById('frm2').value=name.toUpperCase();

}

