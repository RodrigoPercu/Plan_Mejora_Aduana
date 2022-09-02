/*Validaciones del formulario Contactanos */

function validar() {
    var nombre,apellidos,correo,telefono,expresion; 
    nombre= document.getElementById("nombre").value;
    apellidos= document.getElementById("apellidos").value;
    correo= document.getElementById("correo").value;
    telefono= document.getElementById("telefono").value;

    if(rut ==="" || nombre === "" || apellidos ==="" || correo ==="" || telefono ===""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(rut.length>10){
        alert("El rut es muy largo")
        return false;
    }
    else if(nombre.length>30){
        alert("El nombre es muy largo");
        return false;
    }
    else if(apellidos.length>80){
        alert("Los apellidos son muy largo");
        return false;
    }
    else if(correo.length>100){
        alert("El correo es muy largo");
        return false;
    }
    else if(telefono.length>10){
        alert("El telefono es muy largo");
        return false;
    }
    else if(isNaN(telefono)) {
        alert("El telefono ingresado no es un número");
        return false;
    }

}