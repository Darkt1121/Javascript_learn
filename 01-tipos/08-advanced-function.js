//  let kevin = function tes(){
//     console.log("holaaaa")
//  }


//  kevin()

// function anonima
// let objeto = {
//     nombre: "kevin",
//     funcion1: function (){
//         console.log("-____________-")
//     }
// };

// objeto.funcion1()







setTimeout(function() {
    console.log("timeout")
    console.log("timeout2")
}, 5000)

console.log("siguiente");





//it will keep running a function in the future
//----------------------------------------

// setInterval(()=> {
//     console.log("cada 4 segundos")
// },4000)

//----------------------------------------




const kevin = ["rigs","sanchez","dionicio"]

kevin.forEach(function(value, index) {
    console.log(index)
    console.log(value)
});

