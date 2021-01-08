function showNav() {
  var x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
    
  } else {
    x.style.display = "block";
  }
}

const mediaQuery = window.matchMedia('(min-width: 768px)')

if (mediaQuery.matches) {
  var x = document.getElementById("menu");
  x.style.display = "block";
}