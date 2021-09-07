function display() {
  document.getElementsByTagName("header")[0].getElementsByClassName("nav")[0].style.display = "flex"
  document.getElementById("X-hamburger").style.display = "block"

}
function hide() {
  document.getElementsByTagName("header")[0].getElementsByClassName("nav")[0].style.display = "none"
  document.getElementById("X-hamburger").style.display = "none"

}

document.getElementById("hamburger").addEventListener("click", display)
document.getElementById("X-hamburger").addEventListener("click", hide)
