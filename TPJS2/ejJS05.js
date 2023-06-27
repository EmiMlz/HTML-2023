function sumar (x, y) {
    return parseInt(x) + parseInt(y);
}
function restar (x, y) {
    return parseInt(x) - parseInt(y);
}
function dividir (x, y) {
    return parseInt(x) / parseInt(y);
}
function multiplicar (x, y) {
    return parseInt(x) * parseInt(y);
}
function potenciar (x, y) {
    var i;
    var y = parseInt(y)
    var x = parseInt(x)
    for (var i = 1; i < y; i++) {
        x *= x;
    }
    return x;
}
function cuadrado (x) {
    return parseInt(x) * parseInt(x);
}
function mostrar(resultado) {
    document.getElementById("resultados").innerHTML +=  resultado + "\n";
}
function factorial(x) {
    if (x == 0) {
        f = 1;
    } else {
        f = x * (factorial(x-1));
    }
   return f;
}