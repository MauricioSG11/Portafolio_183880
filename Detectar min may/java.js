function evalua() {
    var cadena = document.getElementById("cadena").value;

    // Variables para verificar si tiene mayúsculas, minúsculas o ambas
    var tieneMayusculas = /[A-Z]/.test(cadena);
    var tieneMinusculas = /[a-z]/.test(cadena);

    // Mensaje a mostrar
    var mensaje = "";

    // Verificar si tiene mayúsculas y/o minúsculas
    if (tieneMayusculas && tieneMinusculas) {
        mensaje = "¡La cadena tiene mayúsculas y minúsculas!";
    } else if (tieneMayusculas) {
        mensaje = "¡La cadena solo tiene mayúsculas!";
    } else if (tieneMinusculas) {
        mensaje = "¡La cadena solo tiene minúsculas!";
    } else {
        mensaje = "¡La cadena no tiene ni mayúsculas ni minúsculas!";
    }

    // Mostrar el mensaje
    document.getElementById("parrafo").innerText = mensaje;
}