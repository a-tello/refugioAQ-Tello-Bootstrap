// Declaraciones
const continuarAdopcion = JSON.parse(localStorage.getItem('adoptado'))


// 
const animalesEnAdopcion = [matias, tito, cielo, becker, milo, simona, marco, bruma]


// Query de elementos
const containerCards = document.querySelector('#containerCards')
const selectorEspecie = document.querySelectorAll('.animalSelector')
const btnContrato = document.querySelector('#btnContrato')



// Funciones



// EvenListeners



// Ejecuciones


class Animal {
    constructor(id, nombre, pelaje, edad, comportamiento, especie, img, descripcion,) {
      this.id = id
      this.nombre = nombre
      this.pelaje = pelaje
      this.edad = edad
      this.comportamiento = comportamiento
      this.especie = especie
      this.img = img
      this.descripcion = descripcion
    }
  }

  
const matias = new Animal(
'001',
'Matias',
'Atigrado',
'1 año y 6 meses',
'Puede convivir con perros y niños',
'gato',
'../assets/images/gato1.png',
'descripcion',
)
const tito = new Animal(
'002',
'Tito',
'Atigrado',
'2 años',
'Puede convivir con niños',
'gato',
'../assets/images/gato2.png',
'descripcion',
)
const cielo = new Animal(
'003',
'Cielo',
'Blanco y negro',
'9 meses',
'Puede convivir con otros gatos',
'gato',
'../assets/images/gato3.png',
'descripcion',
)
const becker = new Animal(
'004',
'Becker',
'Atigrado',
'3 meses',
'Puede convivir con otros gatos',
'gato',
'../assets/images/gato4.png',
'descripcion',
)
const milo = new Animal(
'005',
'Milo',
'Marron',
'2 años',
'No puede convivir con otros perros',
'perro',
'../assets/images/perro1.png',
'descripcion',
)
const simona = new Animal(
'006',
'Simona',
'Marron',
'3 años',
'Puede convivir con perros y gatos',
'perro',
'../assets/images/perro2.png',
'descripcion',
)
const marco = new Animal(
'007',
'Marco',
'Blanco y marron',
'5 meses',
'Puede convivir con gatos y niños',
'perro',
'../assets/images/perro3.png',
'descripcion',
)
const bruma = new Animal(
'008',
'Bruma',
'Blanco y marron',
'3 años',
'Puede convivir con otros perros',
'perro',
'../assets/images/perro4.png',
'descripcion',
)
  
  
  
  
const renderizarAnimales = (especie) => {
    especieEnAdopcion = animalesEnAdopcion.filter((animal) => especie.includes(animal.especie))
    
    containerCards.innerHTML = ''
    especieEnAdopcion.forEach((animal) => {
        const {id, nombre, pelaje, edad, comportamiento, especie, img, descripcion} = animal
        const cardAnimal = document.createElement('div')
      
        cardAnimal.classList.add('card', 'animalCard', 'text-light', 'm-3')
        cardAnimal.setAttribute('data-aos', 'fade-up')
        cardAnimal.setAttribute('data-aos-duration', '1000')
        cardAnimal.setAttribute('data-id', id)
        cardAnimal.innerHTML = `<div class="imgCard">
            <img src="${img}" alt="${nombre} ${especie} ${pelaje}">
            </div>
            <div class="card-body">
            <h5 class="card-title fs-3">${nombre} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-male" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
            </svg></h5>
            <p class="card-text m-0">Edad: ${edad}</p>
            <p class="card-text m-0">Color: ${pelaje}</p>
            <a href="#" class="masInfo text-decoration-none text-light">+Mas Info</a>
            <div class="d-flex m-1">
            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Puede convivir con animales" class="m-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill text-success" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
            </div>
            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Puede convivir con niños" class="m-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile-fill text-success" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
                </svg>
            </div>
            </div>
                <button class="btn btn-primary col-12 btnAdopcion" type="button" >Quiero adoptar</button>
                
            </div>`

        containerCards.append(cardAnimal)
        })
  
    const btnInfo = document.querySelectorAll('.masInfo')
    btnInfo.forEach((boton) => {
      boton.addEventListener('click', (e) => {
        const animalElegido = animalesEnAdopcion.find(
          (animal) => animal.id === e.target.closest(".animalCard").getAttribute('data-id'),
        )
  
        Swal.fire({
          title: animalElegido.nombre,
          text: animalElegido.descripcion,
          imageUrl: `${animalElegido.img}`,
          imageWidth: 500,
          imageHeight: 250,
          imageAlt: 'Custom image	',
        })
      })
    })

    const btnAdopcion = document.querySelectorAll('.btnAdopcion')
    btnAdopcion.forEach((boton) => {
      boton.addEventListener('click', (e) => {
        const animalElegido = animalesEnAdopcion.find(
          (animal) => animal.id === e.target.closest(".animalCard").getAttribute('data-id'),
        )
        
        const animalElegidoJSON = JSON.stringify(animalElegido)
        localStorage.setItem("adoptado", animalElegidoJSON)
        location.href = "../pages/contrato.html"
      })
    })
  }
  
  
selectorEspecie.forEach((especie) => {
especie.addEventListener('click', () =>
    renderizarAnimales(especie.textContent.toLocaleLowerCase()),
)
})
  
btnContrato.addEventListener('click', () => {
const edad = document.querySelector("#inputEdad").value

edad >= 18 ? (Swal.fire(
            '¡Contrato enviado!',
            'El contrato estará en revisión para su aprobación. Nos comunicaremos a la brevedad',
            'success'))
            : (Swal.fire(
                'Algo salió mal :(',
                'La persona que envíe el pre-contrato y luego firme el contrato debe ser mayor de edad',
                'error',
                ))
                
})

const mostrarDatos = () => {
    const animalElegido = JSON.parse(localStorage.getItem("adoptado"))
    const {id,nombre, pelaje, edad, comportamiento, especie, img,descripcion } = animalElegido
    const datosAnimalContainer = document.querySelector("#datosAnimal")
    const datosAnimal = document.createElement('div')
    console.log(datosAnimal);
    datosAnimal.innerHTML = `<p>Nombre: ${nombre}</p>
    <p>Edad: ${edad}</p>
    <p>Sexo: ${id}</p>
    <p>Comportamiento: ${comportamiento}</p>`
    
    console.log(animalElegido);
  
    datosAnimalContainer.append(datosAnimal)
} 

mostrarDatos()


/* Opcion para continuar con la adopcion anterioraun despues de haber cerrado la pagina. 
No sabía como hacer para que no se ejecute al redirigir a la pagina de contrato de otra manera que no sea en otro archivo .js 

if(continuarAdopcion && location.href != 'contrato.html') {
    Swal.fire({
        title: `¿Quieres continuar con la adopción de ${continuarAdopcion.nombre}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, deseo continuar',
        cancelButtonText: 'No, cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            location.href = "../pages/contrato.html"
        } else{
            localStorage.removeItem("adoptado");
        }
      })
} */

