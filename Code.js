function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
}

var sidebar = document.getElementById("sidebar")

var modal = document.getElementById("modal")

var btn = document.getElementById("btn")

var span = document.getElementById("close")

btn.onclick = function() {
    modal.style.display = "block"
}

span.onclick = function() {
    modal.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }