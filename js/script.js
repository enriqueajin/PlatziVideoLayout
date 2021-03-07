//------------------------------------------------------------// Obtener elementos del DOM

const menu = document.getElementById('menu')
const header = document.getElementById('header')
const main = document.getElementById('main')
let desktopMedia = window.matchMedia('(min-width: 900px)')
let mobileMedia = window.matchMedia('(max-width: 900px)')
//------------------------------------------------------------

// Función al dar clic en menú de hamburguesa (mobile y tablet
//------------------------------------------------------------
function showNav() {
  if (menu.style.height == "100%") {
    menu.style.height = "0%"
    header.style.position = "static"
    main.style.marginTop = "0px"
    
  } else {
    menu.style.height = "100%"
    header.style.position = "fixed"
    main.style.marginTop = "66.64px"
  }
}
//------------------------------------------------------------

// Función para validar si se está en media query Desktop
//------------------------------------------------------------
function matchDesktopMedia(media) {
  if (media.matches) {
    menu.style.height = "100%"
  }
  return media.matches
}
//------------------------------------------------------------

//------------------------------------------------------------
// Función para validar si se está en media query Mobile o Tablet
function matchMobileMedia(media) {
  if (media.matches) {
    menu.style.height = "0%"
  }
  return media.matches
}
//------------------------------------------------------------

//------------------------------------------------------------
// Función que se ejecuta cuando el viewport de la pantalla cambia
function onResize() {
  if (matchDesktopMedia(desktopMedia)) {
    menu.style.height = "100%"
    menu.style.transition = "none"
  } else {
    menu.style.transition = "0.5s"
    matchMobileMedia(mobileMedia)
  }
}
//------------------------------------------------------------

matchDesktopMedia(desktopMedia)
window.addEventListener('resize', onResize)
