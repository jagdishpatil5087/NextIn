let rotate =  [0,45,90,135,180,225,270,315];

let class_count=1;

let a=6;
let b=5;
let c=4;

let Rrotate = document.getElementById("review-right-box");
Rrotate.addEventListener("click",rotate_right_fuction)

let Rrotate_left = document.getElementById("review-left-box");
Rrotate_left.addEventListener("click",rotate_left_fuction)

function rotate_right_fuction() {

    if (a==1) {
        a=8; 
    }
    else{
        a--;
    }

    if (b==1) {
        b=8; 
    }
    else{
        b--;
    }

    if (c==1) {
        c=8; 
    }
    else{
        c--;
    }

    for (let index = 1; index < 9 ; index++) {

        document.getElementById("chard_num_"+index).style.zIndex = 1;

    }

    document.getElementById("chard_num_"+a).style.zIndex  = 2;
    document.getElementById("chard_num_"+b).style.zIndex  = 2;
    document.getElementById("chard_num_"+c).style.zIndex  = 2;


    for (let index = 1; index < 9 ; index++) {

       rotate[index-1]+=45

        document.getElementById("chard_num_"+index).style.transform ="perspective(2000px) rotateX(-10deg) rotateY("+rotate[index-1]+"deg) translateZ(-500px)";
           
    }
  
}


function rotate_left_fuction() {

    if (a==8) {
        a=1; 
    }
    else{
        a++;
    }

    if (b==8) {
        b=1; 
    }
    else{
        b++;
    }

    if (c==8) {
        c=1; 
    }
    else{
        c++;
    }

    for (let index = 1; index < 9 ; index++) {

        document.getElementById("chard_num_"+index).style.zIndex = 1;

    }

    document.getElementById("chard_num_"+a).style.zIndex  = 2;
    document.getElementById("chard_num_"+b).style.zIndex  = 2;
    document.getElementById("chard_num_"+c).style.zIndex  = 2;


    for (let index = 1; index < 9 ; index++) {

       rotate[index-1]-=45

        document.getElementById("chard_num_"+index).style.transform ="perspective(2000px) rotateX(-10deg) rotateY("+rotate[index-1]+"deg) translateZ(-500px)";
           
    }
  
}