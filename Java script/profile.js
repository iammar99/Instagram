// For username
document.getElementById("demo").innerHTML = localStorage.getItem("username");
// Functoin to display Setting bar
function myfun3(){
    // document.getElementById("setting").classList.add("visible")
    // document.getElementById("setting").classList.remove("hidden")
     document.getElementById("setting").style.display = "flex"
     document.getElementById("setting").style.opacity = "1"
     document.getElementById("body").style.opacity = "0.3"
    
}
// Functoin to hide Setting bar
function myfunclose(){
    document.getElementById("setting").classList.remove("hidden")
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