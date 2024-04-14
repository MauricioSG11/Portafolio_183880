// Script JavaScript
function generarTabla() {
    // Solicitar al usuario un número usando prompt
    var numero = prompt("Por favor, ingresa un número:");

    // Convertir el número ingresado a un entero
    numero = parseInt(numero);

    // Verificar si se ingresó un número válido
    if (!isNaN(numero)) {
        // Crear una tabla HTML para mostrar la tabla de multiplicar
        var tablaHTML = "<h2>Tabla de Multiplicar del " + numero + "</h2>";
        tablaHTML += "<table>";
        tablaHTML += "<tr><th>Operación</th><th>Resultado</th></tr>";

        // Generar la tabla de multiplicar
        for (var i = 1; i <= 10; i++) {
            tablaHTML += "<tr>";
            tablaHTML += "<td>" + numero + " x " + i + "</td>";
            tablaHTML += "<td>" + (numero * i) + "</td>";
            tablaHTML += "</tr>";
        }

        tablaHTML += "</table>";

        // Mostrar la tabla de multiplicar en pantalla
        document.getElementById("tabla").innerHTML = tablaHTML;
    } else {
        // Mostrar un mensaje de error si no se ingresó un número válido
        alert("¡Oops! Ingresa un número válido.");
    }
}