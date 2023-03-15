const menuElement = document.getElementById("menu")
const btnElement = document.getElementById("menuBtn")
const btnElement2 = document.getElementById("menuBtn2")

const toggleMenu = () => {
    menuElement.classList.toggle("showMenu")
}

btnElement.addEventListener("click", toggleMenu)
btnElement2.addEventListener("click", toggleMenu)