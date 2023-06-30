function validar() {
    document.getElementById("divUsoOpcional").innerHTML = "";
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var obraSocial = document.getElementById('obras_sociales').value;
    var diaNacimiento = parseInt(document.getElementById('dia').value);
    var mesNacimiento = parseInt(document.getElementById('mes').value);
    var anioNacimiento = document.getElementById('anio').value;
    var diaCorrecto = false;
    // Validar campos obligatorios
    // Valido nombre

    // Dado un año, devuelve true si es bisiesto, devuelve false en caso contrario
    function esBisiesto(anio) {
    var es = false;
    if ((anio % 400 == 0) || (anio % 100 == 0) || (anio % 4 == 0)) {
        es = true;
    }
    return es;
}
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
    //Valido Obra Social
    if (obraSocial.trim() === "obra0"){
        document.getElementById("obras_sociales").style.border = "2px solid red";
        document.getElementById("divUsoOpcional").innerHTML += "<li>Obra Social es un campo obligatorio</li>";
    }else{
        document.getElementById("obras_sociales").style.border = "2px solid green";
    }
    
    //Valido que el anio
    if (anioNacimiento<1900){
        document.getElementById("anio").style.border = "2px solid red";
        document.getElementById("divUsoOpcional").innerHTML += "<li>Anio es un campo obligatorio</li>";
    }else{
        document.getElementById("anio").style.border = "2px solid green";
    }
    //Valido el mes
    if (mesNacimiento >= 1 && mesNacimiento <= 12){
        document.getElementById("mes").style.border = "2px solid green";
        console.log(mesNacimiento);
        console.log(diaNacimiento);
        switch (mesNacimiento) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                if (diaNacimiento <= 0 || diaNacimiento > 31){
                    document.getElementById("dia").style.border="2px solid red";
                }else{
                    document.getElementById("dia").style.border="2px solid green";
                }; 
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                console.log(diaNacimiento)
                if (diaNacimiento <= 0 || diaNacimiento > 30){
                    document.getElementById("dia").style.border="2px solid red";
                }else{
                    document.getElementById("dia").style.border="2px solid green";
                }; 
                break;
            case 2:
                if(esBisiesto(anioNacimiento)){
                    if (diaNacimiento <= 0 || diaNacimiento > 29){
                        document.getElementById("dia").style.border="2px solid red";
                    }else{
                        document.getElementById("dia").style.border="2px solid green";
                    }
                }else {
                    if (diaNacimiento <= 0 || diaNacimiento > 28){
                        document.getElementById("dia").style.border="2px solid red";
                    }else{
                        document.getElementById("dia").style.border="2px solid green";
                    }
                }; 
                break;
        }
    }
    else {
        document.getElementById("mes").style.border = "2px solid red";
        document.getElementById("divUsoOpcional").innerHTML += "<li>Mes es un campo obligatorio</li>";
    }
    if (isNaN(diaNacimiento)) {
        document.getElementById("dia").style.border = "2px solid red";
        document.getElementById("divUsoOpcional").innerHTML += "<li>Día es un campo obligatorio</li>";
    }

    if (
        document.getElementById("nombre").style.border === "2px solid green" &&
        document.getElementById("apellido").style.border === "2px solid green" &&
        document.getElementById("email").style.border === "2px solid green" &&
        document.getElementById("obras_sociales").style.border === "2px solid green" &&
        document.getElementById("anio").style.border === "2px solid green" &&
        document.getElementById("mes").style.border === "2px solid green" &&
        document.getElementById("dia").style.border === "2px solid green"
    ) {
        document.getElementById("divUsoOpcional").innerHTML += "<li>Formulario enviado correctamente</li>";
    }
}