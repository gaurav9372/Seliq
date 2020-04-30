function toggle(){

var toggler = document.getElementById("toggler");
    
var menu = document.getElementById("links");

toggler.addEventListener("click",touch())

function touch(){                         
    if (menu.style.height){
        menu.style.height = null;
    }
    else{
  menu.style.height = "150px";
    }                     
}

    
    
    
    
    }