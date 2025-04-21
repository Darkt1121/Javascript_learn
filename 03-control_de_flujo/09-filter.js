// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const pares = numeros.filter(function(numero){
//       return numero % 2 === 0  
// })

// console.log(pares)

//------------------------------------------------------------


// const palabras = ['gato', 'elefante', 'perro', 'cocodrilo', 'pez', 'rinoceronte'];

// const animales = palabras.filter(function(palabra) {
//          if(palabra.length > 5 ) {
//             return true
//          } else {
//             return false
//          }
// })

// console.log(animales)

//------------------------------------------------------------

// const usuarios = [
//     { nombre: 'Carlos', activo: true },
//     { nombre: 'Sofia', activo: false },
//     { nombre: 'Miguel', activo: true },
//     { nombre: 'Elena', activo: false },
//     { nombre: 'Jorge', activo: true }
//   ];

//   const estado = usuarios.filter(function(usuario){
//         return usuario.activo === true
//   })

//   console.log(estado)

//------------------------------------------------------------

const datosMixtos = [1, 'texto', true, 5, 'otro', false, 10, null, 20];

const numeros = datosMixtos.filter(function(datos){
      return typeof datos === 'number'
})

console.log(numeros)

//------------------------------------------------------------

const inventario = [
    { nombre: 'Camisa', precio: 45, enStock: true },
    { nombre: 'Pantalón', precio: 120, enStock: true },
    { nombre: 'Zapatos', precio: 90, enStock: false },
    { nombre: 'Gorra', precio: 25, enStock: true },
    { nombre: 'Chaqueta', precio: 150, enStock: false },
    { nombre: 'Calcetines', precio: 10, enStock: true }
  ];


  const varato = inventario.filter(function(stock){
        if(stock.enStock === true && stock.precio < 100){
            return true
        } else {
            return false
        }
  })
  console.log(varato)

//------------------------------------------------------------  