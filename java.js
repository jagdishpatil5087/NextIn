window.addEventListener("scroll", () => {
    let value = window.scrollY;

    let y = value;

    if (value > 2000) {
        document.getElementById("nav_id").style.backgroundColor="white";
        document.getElementById("nav_text_1").style.color="black";
        document.getElementById("nav_text_2").style.color="black";
        
    }
    else{
        document.getElementById("nav_id").style.backgroundColor="transparent";
        document.getElementById("nav_text_1").style.color="white";
        document.getElementById("nav_text_2").style.color="white";

    }
  

 

    if (value > 0 && value < 500) {
        y = y / 5;
        document.getElementById("next_text").style.height = y + "%";
    }
});




let left = document.getElementById("left_bottom");
left.addEventListener("click", fuction_left)

let right = document.getElementById("right_bottom");
right.addEventListener("click", fuction_right)

let box_2 = document.getElementById("box_2_id")
box_2.addEventListener("click", fuction_right)

let box_3 = document.getElementById("box_3_id")
box_3.addEventListener("click", fuction_right)

let title_arr=["Eiffel Tower","Great Wall Of China","The Great Pyramid of Giza"]

let text_arr=["The Eiffel Tower, completed in 1889 for the World's Fair in Paris, is an iconic symbol of France. Designed by engineer Gustave Eiffel, the tower stands 330 meters tall and was the tallest man-made structure in the world until 1930. Made of wrought iron, it initially faced criticism from artists and intellectuals who deemed it an eyesore. However, it has since become one of the most recognized and visited landmarks globally.The tower has three levels open to the public, with restaurants on the first two levels and an observation deck on the third, offering stunning views of Paris. Weighing approximately 10,100 tons, the Eiffel Tower is a marvel of engineering and a testament to French innovation. Attracting nearly 7 million visitors annually, it continues to be a symbol of Parisian culture and a beacon of architectural brilliance.",
    "The Great Wall of China is an ancient series of fortifications stretching over 13,000 miles across northern China. Built over several dynasties, primarily during the Ming Dynasty (1368–1644), it was constructed to protect Chinese states and empires from invasions by nomadic tribes and military incursions. The wall is made of various materials, including earth, wood, bricks, and stone, adapting to the diverse terrain it traverses, from mountains to deserts.The Great Wall is not a single continuous wall but a network of walls and watchtowers, connected by rugged paths and steep stairways. It also served as a means of border control, allowing the imposition of duties on goods transported along the Silk Road and controlling immigration and emigration.",
    "The Great Pyramid of Giza, located on the Giza Plateau near Cairo, Egypt, is one of the Seven Wonders of the Ancient World and the only one still largely intact. Built around 2580–2560 BCE during the Fourth Dynasty, it was constructed as a tomb for the Pharaoh Khufu (Cheops). Standing originally at 146.6 meters (481 feet), it was the tallest man-made structure in the world for over 3,800 years.Composed of about 2.3 million limestone blocks, each weighing an average of 2.5 tons, the pyramid's construction remains a subject of debate, with theories ranging from ramps to sophisticated engineering techniques. The interior includes a series of chambers, most notably the King's Chamber, believed to house Khufu's sarcophagus.The Great Pyramid is part of a larger complex, including two smaller pyramids, temples, and the Great Sphinx."]

let scroll_count = 0;
let img_count = 1;
let title_count=0;

function fuction_left() {

    if (img_count < 2) {

    }

    else {
        scroll_count += 33;
        img_count--;
        title_count--;

        document.getElementById("rank_id").innerText ="#"+img_count;
        document.getElementById("description_title").innerText = title_arr[title_count];
        document.getElementById("description_text").innerText = text_arr[title_count];
        document.getElementById("main_img_box_id").style.backgroundImage = "url(img_" + img_count + ".jpg)";
        document.getElementById("side_container_id").style.transform = "translateX(" + scroll_count + "%)";

        document.getElementById("left_bottom").style.visibility="visible";  
        document.getElementById("right_bottom").style.visibility="visible";  
        if (img_count == 1) {
            document.getElementById("left_bottom").style.visibility="hidden";  
        }
    }



}

function fuction_right() {

    if (img_count > 2) {
       

    }
    else {
        scroll_count -= 33;
        img_count++;
        title_count++;

        document.getElementById("rank_id").innerText ="#"+img_count;
        document.getElementById("description_title").innerText = title_arr[title_count];
        document.getElementById("description_text").innerText = text_arr[title_count];
        document.getElementById("main_img_box_id").style.backgroundImage = "url(img_" + img_count + ".jpg)";
        document.getElementById("side_container_id").style.transform = "translateX(" + scroll_count + "%)";
        document.getElementById("right_bottom").style.visibility="visible";  
        document.getElementById("left_bottom").style.visibility="visible";  
        if (img_count == 3) {
            document.getElementById("right_bottom").style.visibility="hidden";  
        }
    }



}


let plane = document.getElementById("plane_button");
plane.addEventListener("click",()=>{


    document.getElementById("plane_side_js").style.marginLeft  = "0%";

    let a = 1000;
    let b = 5000;

  /*   document.getElementById("text_js_"+1).style.width = "100%";
    document.getElementById("text_js_"+2).style.width = "100%";
    document.getElementById("text_js_"+3).style.width = "100%";
    document.getElementById("text_js_"+4).style.width = "100%"; */

    setTimeout( ()=>{
        full_width() 
    } , 2000 )




 
   
})

let id_count  = 0;
let space_time = 0;



function full_width() {

    id_count++;

    let space_count=0;

    let mytime =  setInterval( ()=>{

    document.getElementById("text_js_"+id_count).style.width = space_time+"%";

    document.getElementById("text_js_"+id_count).style.borderRight = "2px solid black";

      if (space_count==30) {

        console.log("Ok");

        space_time=0;
        space_count=0;
        document.getElementById("text_js_"+id_count).style.borderRight = "none";

        clearInterval(mytime)

        if (id_count<4) {

            full_width();  
        }
        
      }
      space_time+=4;
      space_count++;

     } , 100);    
}

























let but = document.getElementById("box");
but.addEventListener("click", fun)

let T = true;

let id_name = "circle"


function fun() {
    console.log("function called");

    if (T) {
        T = false;
        circlefollw()
        document.getElementById("box").style.margin = "200px auto";
        document.getElementById("circle").style.margin = "0%";

        document.getElementById("circle").style.transition = ".5s";
        document.getElementById("circle").style.width = "100%";
        document.getElementById("circle").style.height = "100%";
        document.getElementById("circle").style.borderRadius = "0%";
        document.getElementById("box").style.backgroundImage ="url(travel-quotes/quotes_1.jpg)";
         
    }
    else {
        T = true;
        circlefollw()
        document.getElementById("box").style.margin = "0%";

        document.getElementById("circle").style.margin = "200px auto";

        document.getElementById("circle").style.borderRadius = "50%";
        document.getElementById("circle").style.transition = ".5s";
        document.getElementById("circle").style.width = "200px";
        document.getElementById("circle").style.height = "200px";
        document.getElementById("box").style.backgroundImage =  "url(travel-quotes/quotes_2.webp)"; 

      

    }

    setTimeout(time_out, 500);
   

}
function time_out() {
    console.log("Timeout");
    document.getElementById("circle").style.transition = "none";

}

function fun_circle() {
}


let circle_x = 0
let circle_y = 0

function circlefollw() {



    window.addEventListener("mousemove", function (dets) {
        circle_x = dets.clientX - circle_y;
        circle_y = dets.clientX

        console.log();

        if (dets.clientX  > 0 && dets.clientX  < 500) {
            
        }

        if (T) {
            document.querySelector("#circle").style.transform = `translate(${dets.clientX}px,${dets.clientY})`
            document.querySelector("#circle").style.marginLeft = `${dets.clientX - 100}px`
            document.querySelector("#circle").style.marginTop = `${dets.clientY - 100}px`

        }
        else {
            document.querySelector("#box").style.transform = `translate(${dets.clientX}px,${dets.clientY})`
            document.querySelector("#box").style.marginLeft = `${dets.clientX - 100}px`
            document.querySelector("#box").style.marginTop = `${dets.clientY - 100}px`

        }

    


    })
}
circlefollw()



 