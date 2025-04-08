

// let tes = ["kevin","rigs",21,2003]

// console.log(tes.unshift(33))
// console.log(tes.shift())
// console.log(tes.length)



// let tes = [1,2,3,4,5]
// let result = 0

// for(let i = 0; i < tes.length; i++){
//     let sums = tes[i]

//     result += sums 
// }

// console.log(result)


//-----------------------------------------------------

// for(let i = 0; i <= 10; i++){
//     console.log(i++)
// }
//.     FIN
//-----------------------------------------------------



//-----------------------------------------------------

// for(let i = 5; i >= 0; i--){
//     console.log(i)
// }
//.     FIN
//-----------------------------------------------------



//-----------------------------------------------------
// const array = [100,200,300,400,500]
// const nuevoArray = []

// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
//     console.log("--------------")
// }



// for(let i = 0; i < array.length; i++){
//     nuevoArray.push(array[i] + 1);
// }
// console.log(nuevoArray)



//.     FIN
//-----------------------------------------------------


function minMax(nums) {
    // Inicializamos ambos con el primer valor del array
    let minimo = nums[0];
    let maximo = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < minimo) {
            minimo = nums[i];
        }
        if (nums[i] > maximo) {
            maximo = nums[i];
        }
    }

    return { min: minimo, max: maximo };
}

// Ejemplos de uso
console.log(minMax([1, -3, 5]));              // { min: -3, max: 5 }
console.log(minMax([-2, 3, -5, 7, 10]));      // { min: -5, max: 10 }