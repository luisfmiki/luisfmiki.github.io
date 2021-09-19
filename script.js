var y = 0;
document.addEventListener('scroll', e => {
  y = window.scrollY;
  var elems = document.getElementsByClassName('arrowup');
  if(y>=200) elems[0].style.display = "block";
  else elems[0].style.display = "none";
});

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

function voltaCima() {
  window.scroll(0, 0);
}


