



let btn_1 = document.querySelector('.js-btn-button_1');
let btn_2 = document.querySelector('.js-btn-button_2');
let p_chose = document.querySelector('.js_chose_p');
function buttons(event) {
    if (event.target === btn_1) {
        p_chose.textContent = 'You chose: heads';
    } else if (event.target === btn_2) {
        p_chose.textContent = 'You chose: tails';
    }
}
btn_1.addEventListener("click", buttons);
btn_2.addEventListener("click", buttons);






let input = document.querySelector('.js_input')
let btn3 = document.querySelector('.js_btn_submit');
let result = document.querySelector('.js_result_p')
btn3.addEventListener("click", function(){
    result.textContent = `Your name is: ${input.value}`
    
})




const p_3 = document.querySelector('.js_p_3')
function texto(texx){
    p_3.textContent = texx
}

