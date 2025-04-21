// const consolas = [
//     {nombre: "Ps5", precio: "600,000", lanzamiento: "2020"},
//     {nombre: "Nintendo Switch", precio: "450,000", lanzamiento: "2018"},
//     {nombre: "Xbox X", precio: "500,000", lanzamiento: "2020"},
//     {nombre: " Steam Deack", precio: "650,000", lanzamiento: "2022"}
// ]



//-----------------------------------------------------------------------


// const numeros = [1, 2, 3, 4, 5];
// const prueba = numeros.map(function(numero) {
//           return numero * 2      
// })

// console.log(numeros)
// console.log(prueba)

//-----------------------------------------------------------------------


// const usuarios = [
//     { id: 1, nombre: 'Ana' },
//     { id: 2, nombre: 'Luis' },
//     { id: 3, nombre: 'Carla' }
//   ];

//   const personas = usuarios.map(function(usuario,index){
//               return  usuario.nombre            
//   })

//   console.log(personas)

//-----------------------------------------------------------------------



    const productos = [
        { nombre: 'Laptop', precio: 1200 },
        { nombre: 'Teclado', precio: 75 },
        { nombre: 'Mouse', precio: 25 }
    ];


    const nuevos = productos.map(function(producto){
            let tes = ` Producto: ${producto.nombre} , Precio: ${producto.precio}`
            return tes
    })
    
    console.log(nuevos)

//-----------------------------------------------------------------------

//.toUpperCase()

// const palabras = ['hola', 'mundo', 'javascript'];

// let wors = palabras.map(function(palabra){
//     return palabra.toUpperCase()
// })

// console.log(palabras)
// console.log(wors)
