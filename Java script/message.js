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
function alert(){
    alert("Under construction")
}
// For username
document.getElementById("demo").innerHTML = localStorage.getItem("username");
