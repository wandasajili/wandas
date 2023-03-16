function kelik() {  
  document.getElementById("font").innerHTML = "<h1>Berhasil</h1>";

  const clik = document.getElementById("btn");
  clik.addEventListener("dblclick", function(){
      alert('oke anda sudah di klik 2 kali')
  });
}

function ini() {
  document.getElementById("f").style.color = 'green'
}

function out() {
  document.getElementById("f").style.color ='red'
}

function delte() {
  const bd = document.getElementById("bd");
  bd.removeChild(bd.firstElementChild);
}