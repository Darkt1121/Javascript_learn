// // Hotline Bling 💎
// // Codédex

// let drakePicTwo = document.getElementById("drake-pic-2");
// let heading = document.getElementById("heading-2");

// drakePicTwo.src = "https://i.pinimg.com/originals/75/d8/49/75d8494c6de374039d3e596a2e39ddec.png";
// heading.innerText = "kevin";




// let tes1 = document.getElementById("stone");
// let randomNumber = Math.floor(Math.random() * 9) + 1;


// if(randomNumber === 1){
//     tes1.style.backgroundColor = "red";
// } else if (randomNumber === 2){
//     tes1.style.backgroundColor = "orange"
// } else if (randomNumber === 3){
//     tes1.style.backgroundColor = "yellow"
// } else if (randomNumber === 4){
//     tes1.style.backgroundColor = "green"
// } else if (randomNumber === 5){
//     tes1.style.backgroundColor = "blue"
// } else if (randomNumber === 6){
//     tes1.style.backgroundColor = "#4169e1"
// } else if (randomNumber === 7){
//     tes1.style.backgroundColor = "#00008b"
// } else if (randomNumber === 8){
//     tes1.style.backgroundColor = "purple"
// }





// const quoteList = [
//     "Some doors only open from the inside. Breath is a way of accessing that door.",
//     "What has to be taught first, is the breath.",
//     "Remember the blue sky. It may at times be obscured by clouds, but it is always there.",
//     "In the midst of movement and chaos, keep stillness inside of you.",
//     "We can't control the sea, but we can learn how to surf the waves.",
//     "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.",
//     "To understand the immeasurable, the mind must be extraordinarily quiet, still."
//   ];
  
//   const colors = ["#e81416", "#ffa500", "#faeb36", "#79c314", "#487de7", "#4b369d", "#70369d"];



//   let wrapperDiv = document.getElementById("wrapper")
//   let quoteText = document.getElementById("quote-text")
//   let quoteButton = document.getElementById("quote-button")

//   quoteButton.addEventListener("click", function(){
//     randomIndex = Math.floor(Math.random() * quoteList.length)
    

//   })





let tes1 = document.getElementById("buton");
let tes2 = document.getElementById("h2");

let array = ["🐯","🐤","🐨","🐣","🦆","🐽","🐛","🐸","🦖","🙉"]

function buttonClick (){
    let random = Math.floor(Math.random() * array.length);
    tes2.textContent = array[random];
  
}

