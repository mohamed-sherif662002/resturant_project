let container_js = document.getElementById("container");
let time = 500;
window.onload = function(){
    let Fun_Set = setInterval(function(){
        container_js.style.display = "block";
        function stop(){
            time = time + 500;
            if(time === 4000){
                container_js.style.display = "none";
                clearInterval(Fun_Set);
            }
        }
        stop();
    },time);
}  
let Drop_js = document.getElementById("Drop Down_id");
let div_list_js = document.getElementById("div_list");
Drop_js.onclick = function(){
    div_list_js.style.display = "block";
    div_list_js.style.transition = "2s";
}

let icone_left_js = document.getElementById("icone_left");
icone_left_js.onclick = function(){
    side_menu_log_mobile_left_js.style.width = "100%";
}

let side_menu_log_mobile_left_js = document.getElementById("side_menu_log_mobile_left");
let Home_link_js = document.getElementById("Home_link");
Home_link_js.onclick = function(){
    side_menu_log_mobile_left_js.style.width= "0";
}
let ALL_js = document.getElementById("a1");
let Starters_js = document.getElementById("a2");
let Salads_js = document.getElementById("a3");
let div3_section4_js = document.getElementById("div3_section4");
let div4_section4_js = document.getElementById("div4_section4");
let div5_section4_js = document.getElementById("div5_section4");
let arr_divs = [div3_section4_js , div4_section4_js , div5_section4_js];
ALL_js.onclick = function(){
    for(let i = 0 ; i < arr_divs.length ; i++){
        arr_divs[i].style.display = "block";
    }
}

Starters_js.onclick = function(){
    for(let i = 0 ; i < arr_divs.length ; i++){
        if(i === arr_divs.length-1){
           arr_divs[i].style.display = "block";  
        }
        else{
            arr_divs[i].style.display = "none";
        }
    }
}

Salads_js.onclick = function(){
    for(let i = 0 ; i < arr_divs.length ; i++){
        if(i === arr_divs.length-2){
           arr_divs[i].style.display = "block";  
        }
        else{
            arr_divs[i].style.display = "none";
        }
    }
}

