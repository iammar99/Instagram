// For username
document.getElementById("demo").innerHTML = localStorage.getItem("username");
// Functoin to display Setting bar
function open(){
    document.getElementById("setting").classList.add("visible")
    document.getElementById("setting").classList.remove("visible")
}
// Functoin to hide Setting bar
function close(){
    document.getElementById("setting").classList.remove("visible")
    document.getElementById("setting").classList.add("visible")
}
// Function to display menu bar
function myfun(){
    document.getElementById("menu-bar").classList.add("visible")
    document.getElementById("menu-bar").classList.remove("hidden")
}
// Function to remove menu bar
function myfun2(){
    document.getElementById("menu-bar").classList.add("hidden")
    document.getElementById("menu-bar").classList.remove("visible")
}