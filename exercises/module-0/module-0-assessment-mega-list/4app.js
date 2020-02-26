// How would you create an h1 element in JavaScript?

function myFunction() {
    var h = document.createElement("H1");
    var t = document.createTextNode("Hola Mundo");
    h.appendChild(t);
    document.body.appendChild(h);
}