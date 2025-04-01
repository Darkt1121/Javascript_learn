
/// `${}`

let array = []

let btn_1 = document.querySelector(".js_btn_add_1")
let input_text = document.querySelector(".js_input_text")


btn_1.addEventListener("click", function(){

let name = input_text.value
array.push(name)
console.log(array)

input_text.value = ''

})

//---------------------------------------------
let array2 = []

let input_text_2 = document.querySelector('.js_input_text_2')
let btn_2 = document.querySelector('.js_btn_add_2')
let p_result = document.querySelector('.js_p_result')

btn_2.addEventListener("click", function(exx){
     let name22 = input_text_2
     
     
})

