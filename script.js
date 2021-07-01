function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 

function escondeMenu(e) {
    console.log(this)
    console.log("teste");
}

document.addEventListener("click", escondeMenu)