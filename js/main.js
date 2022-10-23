function validarEdad(){
  let edad = prompt("Por favor, ingrese su edad");
  if(edad >= 18) {
    alert("Serás redirigido a la página");
  }
  else{
    alert("Lo sentimos, los contratos/permisos deben ser acordados y firmados por una persona mayor (18 o más)");
  }
} 


let nombre = prompt("Por favor ingrese su nombre");
let opcionAyuda;
alert("Bienvenido " + nombre + " a la sección de ayuda de Adopciones Quilmes.");


do{
  opcionAyuda = prompt("¿Cómo deseas colaborar? Por favor, elegi la opción deseada:\n-Socios\n-Traslado\n-Voluntarios\n-Adopciones").toLowerCase();

  switch(opcionAyuda) {
    case "socios":
    case "traslado":
    case "voluntarios":
    case "adopciones":
      alert("Para continuar a la página de " + opcionAyuda + " debemos verificar su edad");
      validarEdad();
      break;
    default:  
      alert("La opcion '" + opcionAyuda + "' es incorrecta.")
  }

} while(opcionAyuda != "socios" && opcionAyuda != "traslado" && opcionAyuda != "voluntarios" && opcionAyuda != "adopciones")


