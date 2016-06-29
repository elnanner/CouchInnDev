var elemento = document.createElement("h2");
var contenido = document.createTextNode("texto del titular");
elemento.appendChild(contenido);
elemento.setAttribute("align", "center");
var padre = document.getElementById('cls').parentNode;
