
/// `${}`
let array = ['lunes','martes','miercoles']

function lunes(){
     let arrayResult = ''

     
     for(let i = 0; i < array.length; i++){
          const result = array[i]
          const html = `<p>${result}</p>`

          arrayResult += html
     }

     console.log(arrayResult)


      document.querySelector('.js_text_div').innerHTML = arrayResult
      


let btn_1 = document.querySelector(".js_btn_add_1")
let input_text = document.querySelector(".js_input_text")


btn_1.addEventListener("click", function(){

let name = input_text.value
array.push(name)
console.log(array)

input_text.value = ''

})

lunes()
}

//---------------------------------------------


let array2 = []     

let input_text_2 = document.querySelector('.js_input_text_2')
let btn_2 = document.querySelector('.js_btn_add_2')
let p_result = document.querySelector('.js_p_result')

btn_2.addEventListener("click", function(exx){
     let name22 = input_text_2
     
     
})

