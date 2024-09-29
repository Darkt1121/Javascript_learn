// // Define randomNumberPromise() function here 💖

// const generateBtn = document.getElementById("generateButton");

// generateBtn.addEventListener("click", randomNumberPromise);




//  const array = [{

//     name : "kevin",
//     age : 20,
//   },

//  {
//      name : "lucas",
//      age : 21
//  },

//  {
//      name : "donal",
//      age : 18
//  }
//  ]



//  function data () {
//         return new Promise((resolve, reject) => {
//             if(array.length === 0){
//                 reject(new Error("tu array tiene 0 🐷"))
//             }
//             setTimeout( () => {
//                 resolve(array)
//             }, 5000 )
//         })
//  }

// data()
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err.message))




// function walkDog(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const dogWalked = false;

//             if(dogWalked){
//                 resolve("You walk the dog ");
//             }
//             else{
//                 reject("You DIDN'T walk the dog");
//             }
//         }, 1500);
//     });
// }

// function cleanKitchen(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
            
//             const kitchenCleaned = true;

//             if(kitchenCleaned){
//                 resolve("You clean the kitchen ");
//             }
//             else{
//                 reject("You DIDN'T clean the kitchen");
//             }
//         }, 2500);
//     });
// }

// function takeOutTrash(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const trashTakenOut = true;

//             if(trashTakenOut){
//                 resolve("You take out the trash ");
//             }
//             else{
//                 reject("You DIDN'T take out the trash");
//             }

//         }, 500);
//     });
// }

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//                   .then(value => {console.log(value); return takeOutTrash()})p
//                   .then(value => {console.log(value); console.log("You finished all the chores!")})
//                   .catch(error => console.error(error));




tes1 = document.getElementById("tes");
tes2 = document.getElementById("p");
tes3 = document.getElementById("img");


tes1.addEventListener("click", () => {
/*
    setTimeout( () => tes2.textContent = "hola word", 2000);
*/
    tes2.classList.remove("hidden");
    tes1.innerText = "hola word"

    setTimeout( () =>  {
        tes2.classList.add("hidden");

    },3000)
});