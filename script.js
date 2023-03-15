const menuElement = document.getElementById("menu")
const btnElement = document.getElementById("menuBtn")

const toggleMenu = () => {
    menuElement.classList.toggle("showMenu")
}

btnElement.addEventListener("click", toggleMenu)