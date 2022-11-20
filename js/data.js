class Animal {
    constructor(id, nombre, pelaje, edad, sexo ,comportamiento, especie, img, descripcion,) {
      this.id = id
      this.nombre = nombre
      this.pelaje = pelaje
      this.edad = edad
      this.sexo = sexo
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
    'Macho',
    'Puede convivir con perros y niños',
    'gato',
    '../assets/images/gato1.png',
    'Fue encontrado en la cercanía del refugio y lo trajimos para que no ande solo en la calle. Hoy espera poder encontrar un hogar y una familia que lo cuide',
)
const tito = new Animal(
    '002',
    'Tito',
    'Atigrado',
    '2 años',
    'Macho',
    'Puede convivir con niños',
    'gato',
    '../assets/images/gato2.png',
    'Fue rescatado y estaba muy lastimado. Luego de su recuperación, espera a alguien que lo cuide y le de el amor que se merece.',
)
const cielo = new Animal(
    '003',
    'Cielo',
    'Blanco y negro',
    '9 meses',
    'Hembra',
    'Puede convivir con otros gatos',
    'gato',
    '../assets/images/gato3.png',
    'La dejaron en la puerta del refugio, sola. Espera una familia para recibir cariño y jugar mucho.',
)
const becker = new Animal(
    '004',
    'Becker',
    'Atigrado',
    '3 meses',
    'Macho',
    'Puede convivir con otros gatos',
    'gato',
    '../assets/images/gato4.png',
    'Lo abandonaron juntos con sus hermanos en una caja. A día de hoy es el único de los 5 que no encontró un hogar y espera poder irse pronto con una familia que lo cuide.',
)
const milo = new Animal(
    '005',
    'Milo',
    'Marron',
    '2 años',
    'Macho',
    'No puede convivir con otros perros',
    'perro',
    '../assets/images/perro1.png',
    'Es un perrito con mucha energía y ganas de jugar. Está esperando a alguien que lo adopte y se diviertan hasta el cansancio.',
)
const simona = new Animal(
    '006',
    'Simona',
    'Marron',
    '3 años',
    'Hembra',
    'Puede convivir con perros y gatos',
    'perro',
    '../assets/images/perro2.png',
    'La mas tranquila del refugio. No molesta, no rompe nada, ni se la escucha, solo quiere muchos mimos y un hogar',
)
const marco = new Animal(
    '007',
    'Marco',
    'Blanco y marron',
    '5 meses',
    'Macho',
    'Puede convivir con gatos y niños',
    'perro',
    '../assets/images/perro3.png',
    'Marco es uno de los 3 hermanitos que llegaron al refugio en una caja de zapatos. Hoy es el único que no se fue y espera por alguien que lo quiera y le de mucho cariño.',
)
const bruma = new Animal(
    '008',
    'Bruma',
    'Blanco y marron',
    '3 años',
    'Hembra',
    'Puede convivir con otros perros',
    'perro',
    '../assets/images/perro4.png',
    'Una perra muy tranquila, una compañera ideal que le gusta mucho estar con otros animales',
)