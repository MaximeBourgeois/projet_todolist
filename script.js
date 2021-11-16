//Cacher le Pop In
function hide(){
    wallpaper.style.display="none";
}
document.getElementById("create").addEventListener("click", hide);
document.getElementById("createSm").addEventListener("click",hide);

//Apparition du menu
function appeared(){
    menu.style.display="block";
}
document.getElementById("appearedMenu").addEventListener("click", appeared);
function disappeared(){
    menu.style.display="none";
}
document.getElementById("closeMenu").addEventListener("click", disappeared);