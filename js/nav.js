const menu_btn = document.querySelector(".hamburger");

const menu = document.querySelector(".nav-bar");


function adActive(){
    menu_btn.classList.toggle("is-active");
}

menu_btn.addEventListener("click", adActive);




function toggleMenu(){
    document.querySelector(".nav-bar").classList.toggle("shown");
    // document.querySelector("img").classList.toggle(".marg-top")
    const menuShown = menu.classList.contains("shown");

}



function shake(){
    document.querySelector(".hamburger").classList.add("shake");
}
function shakeNot(){
    document.querySelector(".hamburger").classList.remove("shake");
}



menu_btn.addEventListener("mouseover", shake);
menu_btn.addEventListener("mouseout", shakeNot);

menu_btn.addEventListener("click", toggleMenu);