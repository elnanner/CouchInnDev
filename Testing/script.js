var elemento = document.createElement("div");
var padre = document.getElementById('contenedor');

elemento.setAttribute("class","verde");
padre.insertBefore(elemento, document.getElementsByTagName('div')[1]);
