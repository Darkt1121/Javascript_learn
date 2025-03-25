
// document.addEventListener ("prueba", function (){
//     let btn_1 = document.querySelector('.js-btn-button_1')
//     let btn_2 = document.querySelector('.js-btn-button_2')
//     let p_chose = document.querySelector('.js_chose_p')

//     btn_1.addEventListener ("click", function (){
//         p_chose.textContent = 'You chose: heads'
//     })

//     btn_2.addEventListener("click", function (){
//         p_chose.textContent = 'You chose : tails'
//     })


// } )



let btn_1 = document.querySelector('.js-btn-button_1');
let btn_2 = document.querySelector('.js-btn-button_2');
let p_chose = document.querySelector('.js_chose_p');


function buttons() {
    p_chose.textContent = 'You chose: heads';
}

btn_1.addEventListener("click", buttons);


btn_2.addEventListener("click",buttons);