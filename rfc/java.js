function generarRFC() {
    var nombre = document.getElementById("nombre").value.toUpperCase();
   
    var apellidoPaterno = document.getElementById("apellido1").value.toUpperCase();
   
  
    var apellidoMaterno = document.getElementById("apellido2").value.toUpperCase();
   
    var fechaNacimiento = document.getElementById("fechanacimiento").value;

    
    var fecha = new Date(fechaNacimiento);
    var año = fecha.getFullYear().toString().substr(-2); 
    var mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); 
    var dia = fecha.getDate().toString().padStart(2, '0'); 

   
    var rfc = apellidoPaterno.substring(0, 2) + apellidoMaterno.charAt(0) + nombre.charAt(0) + año + mes + dia;

 
    document.getElementById("resultado").innerText = "RFC: " + rfc;
}