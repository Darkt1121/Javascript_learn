



let btn_1 = document.querySelector('.js-btn-button_1');
let btn_2 = document.querySelector('.js-btn-button_2');
let p_chose = document.querySelector('.js_chose_p');


// function buttons() {
//     p_chose.textContent = 'You chose: heads';
// }

// btn_1.addEventListener("click", buttons);


// btn_2.addEventListener("click",buttons);




function buttons(event) {
    if (event.target === btn_1) {
        p_chose.textContent = 'You chose: heads';
    } else if (event.target === btn_2) {
        p_chose.textContent = 'You chose: tails';
    }
}

btn_1.addEventListener("click", buttons);
btn_2.addEventListener("click", buttons);






let input = document.querySelector('.js_input');
let btn3 = document.querySelector('.js_btn_submit');


input.addEventListener("click", function(){
    
})