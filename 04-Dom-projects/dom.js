




function tte (){
    let lol = document.getElementById('button')
    if(lol.textContent === 'subscribe'){
        lol.textContent = 'subscribed'
    } else {
        lol.textContent = 'subscribe'
    }

}



function calculateTotal(){
    let input = document.querySelector('js-cost-input')
    let cost = Number(input.value)
    if(cost > 40){
       cost = cost + 10 
    }

   let total = document.querySelector('.js-total-cost')
        total.textContent = cost
}


