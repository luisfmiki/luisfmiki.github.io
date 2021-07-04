function myFunction() {
    var x = document.getElementById("myTopnav");
    var barra_verde = document.getElementById("highlight");
    if (x.className === "topnav") {
      x.className += " responsive";
      barra_verde.style.display = "none";
    } else {
      x.className = "topnav";
      barra_verde.style.display = "inline-block";
    }
  } 

function escondeMenu() {
    var x = document.getElementById("myTopnav");
    var barra_verde = document.getElementById("highlight");
    if (x.className !== "topnav") {
      x.className = "topnav";
      barra_verde.style.display = "inline-block";
    }
}

