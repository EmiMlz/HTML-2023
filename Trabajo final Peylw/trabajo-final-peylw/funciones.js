function validar() {
    document.getElementById("divUsoOpcional").innerHTML = "";
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    // Validar campos obligatorios
    // Valido nombre

    
    if (nombre.trim() === ""){
        document.getElementById("nombre").style.border = "2px solid red";
        document.getElementById("divUsoOpcional").innerHTML += "<li>Nombre es un campo obligatorio</li>";
    }
    else{
        var nombrePermitido= /^[a-zA-Z]+$/
        if (!nombrePermitido.test(nombre)){
            document.getElementById("nombre").style.border = "2px solid red";
        }else {
            document.getElementById("nombre").style.border = "2px solid green";
        }
    }
    //Valido apellido
    if (apellido.trim() === ""){
        document.getElementById("apellido").style.border = "2px solid red";
        document.getElementById("divUsoOpcional").innerHTML += "<li>Apellido es un campo obligatorio</li>";
    }else{
        var apellidoPermitido= /^[a-zA-Z]+$/
        if (!apellidoPermitido.test(apellido)){
            document.getElementById("apellido").style.border = "2px solid red";
        }else {
            document.getElementById("apellido").style.border = "2px solid green";
        }
    }
    //Valido Mail
    if (email.trim() === ""){
        document.getElementById("email").style.border = "2px solid red";
        document.getElementById("divUsoOpcional").innerHTML += "<li>Email es un campo obligatorio</li>";
    }else{
        var emailPermitido = /^[a-zA-Z0-9_]+(?:\.[a-zA-Z0-9_]+)*@[a-zA-Z]+(?:\.[a-zA-Z]+)+$/;;
        if (!emailPermitido.test(email)) {
        document.getElementById("email").style.border = "2px solid red";
        document.getElementById("divUsoOpcional").innerHTML += "Email incorrecto <br>";
        }else{
        document.getElementById("email").style.border = "2px solid green";
        }
    }
   

    if (
        document.getElementById("nombre").style.border === "2px solid green" &&
        document.getElementById("apellido").style.border === "2px solid green" &&
        document.getElementById("email").style.border === "2px solid green"
    ) {
        document.getElementById("divUsoOpcional").innerHTML += "<li>Formulario enviado correctamente</li>";
    }
}