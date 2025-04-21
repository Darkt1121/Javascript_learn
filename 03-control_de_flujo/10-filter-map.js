// const numeros = [1, -2, 3, -4, 5, 0, -6, 7];

// const filtrar = numeros.filter(function(numero){
//       return  numero > 0  
// })

// const mapear = filtrar.map(function(nuevo){
//        return nuevo * 2  
// })

// console.log(mapear)


//----------------------------------------------------------

// const palabras = ['sol', 'luna', 'estrella', 'planeta', 'cometa', 'galaxia'];

// const filtrar2 = palabras.filter(function(palabra){
//         return palabra.length % 2 === 0
// })

// const mapear2 = filtrar2.map(function(universo){
//         return universo.length 
// })

// console.log(mapear2)


//----------------------------------------------------------

const productos = [
    { nombre: 'Laptop Gamer', precio: 1500, categoria: 'Electronica' },
    { nombre: 'Silla Oficina', precio: 250, categoria: 'Hogar' },
    { nombre: 'Teclado Mecánico', precio: 120, categoria: 'Electronica' },
    { nombre: 'Monitor Curvo', precio: 450, categoria: 'Electronica' },
    { nombre: 'Mesa Escritorio', precio: 180, categoria: 'Hogar' },
    { nombre: 'Tarjeta Gráfica', precio: 800, categoria: 'Electronica' }
  ];


  const filtrar3 = productos.filter(function(producto){
                if(producto.categoria === "Electronica" && producto.precio > 300){
                    return true
                } else{
                    return false
                }
  })

  const mapear3 = filtrar3.map(function(pcgamer){
                return pcgamer.nombre
  })

  console.log(mapear3)


