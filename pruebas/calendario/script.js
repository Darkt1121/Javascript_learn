
/// `${}`
               //Ejercicio 1
//---------------------------------------------------------------------------------
// let array = ['lunes','martes','miercoles']
// renderTodoList()
// function renderTodoList(){    
//      let arrayResult = ''
//      for(let i = 0; i < array.length; i++){
//           const result = array[i]
//           const html = `<p>${result}</p>`

//           arrayResult += html
//      }
//      console.log(arrayResult)
//      document.querySelector('.js_text_div').innerHTML = arrayResult
// }

// let btn_1 = document.querySelector(".js_btn_add_1")
// let input_text = document.querySelector(".js_input_text")

// btn_1.addEventListener("click", function(){

// let name = input_text.value
// array.push(name)
// console.log(array)

// input_text.value = ''

// renderTodoList()
// })

               // FIN
//----------------------------------------------------------------




//         EJERCICIO 2   
//---------------------------------------------
// let array2 = []     

// let input_text_2 = document.querySelector('.js_input_text_2')
// let btn_2 = document.querySelector('.js_btn_add_2')
// let p_result = document.querySelector('.js_p_result')

// btn_2.addEventListener("click", function(exx){
//      let name22 = input_text_2
     
     
// })
               // FIN
//----------------------------------------------------------------





//         EJERCICIO 3 
//---------------------------------------------

// const nums = [10,20,30]
// let tes = nums.pop()
// let tes2 = nums.push(99)
// console.log(tes)
// console.log(nums)
               // FIN
//----------------------------------------------



//         EJERCICIO 4
//---------------------------------------------

function arraySwap(){
     let array = [1,20,22,24,5]

     let tes = array.pop()
     let tes2 = array.push(1)
     array.shift()
     array.unshift(5)
     // let tes3 = array.unshift(5)
    

     console.log(tes)
     console.log(array)
    
     // console.log(tes3)
  
}

arraySwap()