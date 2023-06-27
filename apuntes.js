// Funcion de js document.write(), lo que se le ingrese adentro entre comillas dobles se mostrara por pantalla en el html. Ej:
document.write("hola mundo");
// Para agregar js directamente dentro de html es necesario meterlo dentro de una etiqueta <script type="text/javascript"></script>.
// El codigo en el head es para cuando se captura un evento. Como cuando se carga la pagina
// En el body para que se ejecute siempre que se ejecute la pagina
// y en el js para cuando es usado/reciclado en varias paginas.
/*
ESTRUCTURA DEL COMO ANIADIRLO
<html>
 <head>
 <script type="text/javascript">
 // funciones que son llamadas desde el body
 </script>
 <script type="text/javascript" src="ejemplo.js">
 // librería de funciones que son utilizadas en varias páginas
 </script>
 </head>
 <body>
 <script type="text/javascript">
 // captura de eventos, HTML dinámico, etc..
 </script>
 </body>
</html>
*/
// <noscript></noscript> para que el usuario habilite la ejecucion.
// las alertas son popups que se muestran al cargar la pagina o cuando pase algo en una condicion
alert("hola") //Manda un hola como alerta
// Las variables comienzan con una letra _ $ seguido de letra numero _ o $. Osea super flexible
var variable;
//Con asignamiento
var variable2 = 1; // numerica
var string = "dato" // string
var dias = ["lunes","martes","miercoles","jueves"]; //array
var b = 5===8; // booleano
// El + es de concatenacion
var concatenado = string + "concatenado"; // Deberia mostrar datoconcatenado
var s = "5";
var suma = s + variable2; //Deberia mostrar un string "51"
suma = parseInt(s)+variable2; // Deberia almacenar la suma del string s como entero + el 1 de variable2.
// \n para una Nueva Linea. \t para Tabular. \' para Comilla Simple \" Comilla Doble
// Operadores Aritmeticos: + - * / % ++ -- = += -= *= /= %=
// == es igual a 
// === exactamente igual
// != distinto
// > mayor < menor >= <= *= && and || or ! not
// prompt("Mensaje","Valor"); el primer valor es el mensaje y el valor es un valor que el usuario va a ingresar, lo que este como string es lo que se muestra por defecto.
// Las funciones se crean en el head o en el archivo externo
// Funcion que ejecuta dsp de que termine de cargar la pagina
/*
document.addEventListener('DOMContentLoaded', function() {
});
 */
// EVENTOS BODY
// El evento onload captura cuando la pagina ha sido cargada completamente.
// onunload se abandona la pagina.
// onresize cuando se modifica el tamanio del navegador.
// EVENTOS KEY
// onkeydown al pulsar una tecla sin solorar, en elementos de formulario y body
// onkeypress al pulsar una tecla
// onkeyup soltar una tecla
// EVENTOS MOUSE
// onclick al hacerle click. Todos los elementos
// ondblclick Al hacerle double click. Todos los elementos.
// onmouseover Cuando el mouse se posa sobre el elemento. Todos los elementos
// PARA ACCEDER AL DOM usar document
// Dentro del dom el .value obtiene el contenido del input, .size el atributo tamanio, .tabIndex El Orden de tabulacion.
// EJEMPLO STRING PARA RECORDAR
// str.toUpperCase() hace que se ponga en mayusculas
// textarea usa las propiedades value, size, tabindex, rows, cols
// checkbox checked y tabindex
// radio checked. setea o retorna true o false
// div innerHTML accede al contenido del div, es de lectura y escritura
// style permite acceder a todos los atributos css. tambien es de lectura/escritura

