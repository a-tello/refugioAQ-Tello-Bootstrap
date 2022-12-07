// Declaraciones
const continuarAdopcion = JSON.parse(localStorage.getItem('adoptado')) || false
let especieSeleccionada

// Array de animales
let animalesEnAdopcion = []

// Query de elementos
const containerCards = document.querySelector('#containerCards')
const containerContrato = document.querySelector('#containerContrato')
const selectorEspecie = document.querySelectorAll('.animalSelector')
const btnContrato = document.querySelector('#btnContrato')
const btnCancelarAdopcion = document.querySelector('#btnCancelarAdopcion')
const filtros = document.querySelector('#filtros')
const btnFiltrar = document.querySelector('#btnFiltrar')
const btnBorrarFiltro = document.querySelector('#btnBorrarFiltro')
const loader = document.querySelector('#loader')
const inputFiltroSexo = document.querySelector('#filtroSexo')
const inputFiltroEdad = document.querySelector('#filtroEdad')


// Funciones
const renderizarAnimales = (especie) => {
    especieEnAdopcion = animalesEnAdopcion.filter((animal) => {
        let sexo = inputFiltroSexo.value
        let edad = inputFiltroEdad.value 

        if(edad && sexo) {
            console.log('AMOBS');
            return especie.includes(animal.especie) && edad === animal.edad  && sexo === animal.sexo

        } else if(edad && !sexo){
            console.log('Solo Edad');
            return especie.includes(animal.especie) && edad === animal.edad

        } else if(!edad && sexo) {
            return especie.includes(animal.especie) && sexo === animal.sexo

        } else {
            console.log('ELSE');
            return especie.includes(animal.especie)
        }
        })
    containerCards.innerHTML = ''
    
    especieEnAdopcion.forEach((animal) => {
        const {id, nombre, pelaje, edad, sexo, comportamiento, especie, img, descripcion} = animal
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
            <p class="card-text m-0"><span class="fw-bold">Edad:</span> ${edad}</p>
            <p class="card-text m-0"><span class="fw-bold">Sexo:</span> ${sexo}</p>
            <p class="card-text m-0"><span class="fw-bold">Color:</span> ${pelaje}</p>
            <p class="card-text m-0"><span class="fw-bold">Comportamiento:</span> ${comportamiento}</p>
            <a href="#" class="masInfo text-decoration-none text-light">+Mas Info...</a>
            
                <button class="btn btn-primary my-3 col-12 btnAdopcion" type="button" >Quiero adoptar</button>
                
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
          imageWidth: 200,
          imageHeight: 250,
          imageAlt: 'Custom image	',
        })
      })
    })

    const btnAdopcion = document.querySelectorAll('.btnAdopcion')
    btnAdopcion.forEach((boton) => { boton.addEventListener('click', (e) => {
        const animalElegido = animalesEnAdopcion.find((animal) => animal.id === e.target.closest(".animalCard").getAttribute('data-id'))
        
        const animalElegidoJSON = JSON.stringify(animalElegido)
        localStorage.setItem("adoptado", animalElegidoJSON)
        location.href = "../pages/contrato.html"
        })
    })
}
  
selectorEspecie.forEach((especie) => {
especie.addEventListener('click', () => {
    containerCards.innerHTML = ''
    setTimeout(() => {

        fetch("../json/data.json")
            .then((response) => response.json())
            .then((data) => {
                animalesEnAdopcion = data
                especieSeleccionada = especie.textContent.toLocaleLowerCase()
                renderizarAnimales(especieSeleccionada)
                loader.classList.add('visually-hidden')})
    }, 3000)

    filtros.classList.remove('visually-hidden')
    loader.classList.remove('visually-hidden')
}

)
})

const mostrarDatos = () => {
    const animalElegido = JSON.parse(localStorage.getItem("adoptado"))
    const {nombre, edadDetalle, sexo, edad, pelaje, comportamiento } = animalElegido
    const datosAnimalContainer = document.querySelector("#datosAnimal")
    const datosAnimal = document.createElement('div')
    datosAnimal.innerHTML = `<p class="fs-4"><span class="fw-bold">Nombre:</span> ${nombre}</p>
    <p class="fs-4"><span class="fw-bold">Edad:</span> ${edadDetalle} - ${edad}</p>
    <p class="fs-4"><span class="fw-bold">Sexo:</span> ${sexo}</p>
    <p class="fs-4"><span class="fw-bold">Pelaje:</span> ${pelaje}</p>
    <p class="fs-4"><span class="fw-bold">Comportamiento:</span> ${comportamiento}</p>`
        
    datosAnimalContainer.append(datosAnimal)
} 
const form = document.querySelector("#formContrato")       

const validarContrato = () => {
    form.addEventListener('submit', (e) => {      
        e.preventDefault()

        if(edad >= 18) {
            Swal.fire(
                '¡Contrato enviado!',
                'El contrato estará en revisión para su aprobación. Nos comunicaremos a la brevedad',
                'success').then(() => {
                    window.location = "../index.html";
                })
            localStorage.removeItem("adoptado")
            form.reset()

        } else {
            Swal.fire(
                'Algo salió mal :(',
                'La persona que envíe el pre-contrato y luego firme el contrato debe ser mayor de edad',
                'error',
            )
        }              
    })
}

// Ejecuciones


if(continuarAdopcion && !location.href.includes('contrato.html')) {
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
} 

if(location.href.includes('adopciones.html')){

    btnFiltrar.addEventListener('click', () => {renderizarAnimales(especieSeleccionada)})

    btnBorrarFiltro.addEventListener('click', () => {
        filtros.reset()
        renderizarAnimales(especieSeleccionada)})

}

if(location.href.includes('contrato.html')){
    validarContrato()
    mostrarDatos()

    btnCancelarAdopcion.addEventListener('click', () => {
        const nombreAnimalElegido = JSON.parse(localStorage.getItem("adoptado")).nombre
    
        Swal.fire({
            title: `¿Quieres cancelar la adopción de ${nombreAnimalElegido}?`,
            icon: 'warning',
            showDenyButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Continuar con la adopción',
            denyButtonText: 'Cancelar adopción'
          }).then((result) => {
            if (result.isDenied) {
                console.log("LASDLALSD");
                localStorage.removeItem("adoptado");
                location.href = "../pages/adopciones.html"
            }
          })
    })
}