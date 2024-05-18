function palindromo() {
    var cadena = document.getElementById("cadena").value;
    var resultado = "La frase \"" + cadena + "\" \n";
    var cadenaOriginal = cadena.toLowerCase();
    var letrasEspacios = cadenaOriginal.split("");
    var cadenaSinEspacios = "";
    for (var i in letrasEspacios) {
        if (letrasEspacios[i] != " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }
    var letrasReves = cadenaSinEspacios.split("").reverse();
    var letras = cadenaSinEspacios.split("");
    var iguales = true;
    for (var i in letras) {
        if (letras[i] != letrasReves[i]) {
            iguales = false;
            break;
        }
    }
    if (iguales) {
        resultado += "Es un palíndromo, wow";
    } else {
        resultado += "Pues palíndromo, palíndromo no es";
    }
    alert(resultado);
}