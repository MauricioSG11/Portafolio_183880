/**
 * Función palindromo - Determina si una cadena es un palíndromo.
 * 
 * Esta función analiza una cadena de texto para determinar si es un palíndromo o no. Un palíndromo es una palabra, frase, número o cualquier otra secuencia de caracteres que se lee igual hacia adelante que hacia atrás.
 * 
 * @param {string} cadena - La cadena de texto que se va a analizar para determinar si es un palíndromo.
 * @returns {void} - Esta función no devuelve ningún valor. Muestra una ventana emergente con el resultado del análisis.
 */
function palindromo() {
    var cadena = document.getElementById("cadena").value; // Obtiene la cadena de texto ingresada por el usuario desde un elemento HTML.
    var resultado = "La frase \"" + cadena + "\" \n"; // Prepara el mensaje de resultado con la cadena original.
    var cadenaOriginal = cadena.toLowerCase(); // Convierte la cadena a minúsculas para evitar problemas de comparación.
    var letrasEspacios = cadenaOriginal.split(""); // Divide la cadena en un arreglo de letras y espacios.
    var cadenaSinEspacios = ""; // Almacena la cadena sin espacios para facilitar la comparación.

    // Recorre las letras y espacios de la cadena original para eliminar los espacios y formar una cadena sin ellos.
    for (var i in letrasEspacios) {
        if (letrasEspacios[i] != " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }

    var letrasReves = cadenaSinEspacios.split("").reverse(); // Invierte la cadena sin espacios para compararla con la original.
    var letras = cadenaSinEspacios.split(""); // Divide la cadena sin espacios en un arreglo de letras para su comparación.
    var iguales = true; // Indica si las letras son iguales en ambas direcciones.

    // Compara las letras en ambas direcciones para determinar si la cadena es un palíndromo.
    for (var i in letras) {
        if (letras[i] != letrasReves[i]) {
            iguales = false; // Si una letra no coincide en ambas direcciones, la cadena no es un palíndromo.
            break; // Detiene la comparación en caso de encontrar una diferencia.
        }
    }

    // Muestra un mensaje de resultado según si la cadena es un palíndromo o no.
    if (iguales) {
        resultado += "Es un palíndromo."; // Si todas las letras coinciden en ambas direcciones, la cadena es un palíndromo.
    } else {
        resultado += "No es un palíndromo."; // Si al menos una letra no coincide en ambas direcciones, la cadena no es un palíndromo.
    }

    alert(resultado); // Muestra el mensaje de resultado en una ventana emergente.
}