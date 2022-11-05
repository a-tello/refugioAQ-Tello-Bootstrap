function validarEdad(){
  let edad = prompt("Por favor, ingrese su edad");

  if(edad >= 18) {
    return true;
  }
  else{
    alert("Lo sentimos, los contratos/permisos deben ser acordados y firmados por una persona mayor (18 o más)");
    return false;
  }
} 

function elegirAnimal() {
    const eleccionEspecie = prompt("Que animal desea adoptar?\n- Gato\n-Perro").toLowerCase(); 
    const eleccionAnimal = animales.filter((animal) => animal.especie === eleccionEspecie);
    const nombresCandidatos = eleccionAnimal.map((animal) => animal.nombre).join("\n");   

    const animalElegido = prompt(`Por favor, escriba el nombre del animal que le gustaría adoptar:\n${nombresCandidatos}`).toLocaleLowerCase();

    return eleccionAnimal.find((animal) => animal.nombre.toLowerCase() === animalElegido);
}

/* let nombre = prompt("Por favor ingrese su nombre");
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
      alert("La opcion '" + opcionAyuda + "' es incorrecta.");
  }

} while(opcionAyuda != "socios" && opcionAyuda != "traslado" && opcionAyuda != "voluntarios" && opcionAyuda != "adopciones")

 */
class Animal {
    constructor(nombre, pelaje, edad, comportamiento, especie){
        this.nombre = nombre;
        this.pelaje = pelaje;
        this.edad = edad;
        this.comportamiento = comportamiento;
        this.especie = especie;
    }
}

const animales = [
     new Animal("Matias", "Atigrado", "1 año y 6 meses", "Puede convivir con perros y niños", "gato"),
     new Animal("Tito", "Atigrado", "2 años", "Puede convivir con niños", "gato"),
     new Animal("Cielo", "Blanco y negro", "9 meses", "Puede convivir con otros gatos", "gato"),
     new Animal("Becker", "Atigrado", "3 meses", "Puede convivir con otros gatos", "gato"),
     new Animal("Milo", "Marron", "2 años", "No puede convivir con otros perros", "perro"),
     new Animal("Simona", "Marron", "3 años", "Puede convivir con perros y gatos", "perro"),
     new Animal("Marco", "Blanco y marron", "5 meses", "Puede convivir con gatos y niños", "perro"),
     new Animal("Bruma", "Blanco y marron", "3 años", "Puede convivir con otros perros", "perro")
];

const nombre = prompt("Por favor ingrese su nombre");
alert(`Bienvenido/a ${nombre} a la sección de adopciones de Adopciones Quilmes.`);
alert("Para continuar con el proceso de adopción debemos verificar su edad");

if(validarEdad()) {
    const animalElegido = elegirAnimal(); 
    const continuar = confirm(`Estas seguro que deseas adoptar a ${animalElegido.nombre}?
                        Nombre: ${animalElegido.nombre}
                        Pelaje: ${animalElegido.pelaje}
                        Edad: ${animalElegido.edad}
                        Comportamiento: ${animalElegido.comportamiento}`);

continuar ? alert("Redirigiendo al contrato de adopción") : alert("Lamentamos que no puedas adoptar :( \nEsperamos que vuelvas pronto");
}


