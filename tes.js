///``

// <
// >
// &&
// ||
// // ===


// let jon = {
//     firstName: 'jose',
//     lastName: 'Smith',
//     age: 22,
//     profession: 'Developer web',
// };


// for(let kevin in jon){
//     console.log(kevin + jon[kevin])
// }


// let grade = 40;

// let result = (grade >= 50) ? 'pass' : 'fail';

// console.log(result)











// let myDNA = [];
// const dnaPieces = ["A", "C", "G", "T"];
// let random = Math.floor(Math.random() * 10);


// for(let i = 0; i < 24; i++){
//     if(dnaPieces.length || random){
//         myDNA = []
//         console.log(random)
//     }
// }




// const dnaPieces = ["K", "E", "V", "I"];

// const myDNA = [];

// for (let i = 0; i < 24; i++) {
//     const pieceOne = Math.floor(Math.random() * dnaPieces.length);
//     const pieceTwo = Math.floor(Math.random() * dnaPieces.length);
//     const pieceThree = Math.floor(Math.random() * dnaPieces.length);
    
//     myDNA.unshift(dnaPieces[pieceOne] + dnaPieces[pieceTwo] + dnaPieces[pieceThree]);
// }

// console.log(myDNA);




// function countdown(){
//     for(let i = 10; i > 1; i--){
//         console.log(i)
//     }
//     return "¡Despegue! 🚀"
// }

// console.log(countdown())



// const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
// const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
// const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];

// function mean(viewsArray){
//     let totalViews = recentTikTokViews / viewsArray ** 2;
//     return totalViews;
// }
// console.log(mean(100))



// Palindrome ↔️
// Codédex








// const poli = (word) => {
//     let palabra = " ";

//     let mayuscula = word.toLowerCase();

//     for(let i = mayuscula.length - 1; i <= 0; i--){
//        return palabra += mayuscula[i]
//     }

//     return palabra == mayuscula;

// }

// console.log(poli("mar"))





// const car = { 
//     model : "Tesla",
//     year : 2024,
//     color : "gren",
//     used : true
// };

// if(car.used === true){
//     console.log(`I'm looking for a ${car.year}, ${car.model} that is used.`)
// } else {
//     console.log(`I'm looking for a ${car.year}, ${car.model} that is new.`)

// }





// const pig = {
//     name : "thor",
//     type : "pig",
//     age : 1200,
//     makeSound () {
//          console.log(`${pig.name} is a ${pig.age} year old ${pig.type} that goes pig 🐷`)
  
       
//     }
// }

// pig.makeSound()



// const sheep = {
//     name : "loki",
//     type : "sheep",
//     age : 1000,
//     makeSound () {
//         console.log(`${sheep.name} is a ${sheep.age} year old ${sheep.type} that goes sheep 🐑"`)

//     }
// }

// sheep.makeSound()


// const dog = {
//     name : "shurtu",
//     type : "dog",
//     age : 3000,
//     makeSound () {
//         console.log(`${sheep.name} is a ${sheep.age} year old ${sheep.type} dog dog dog dog 🐶`)
//     }
// }

// dog.makeSound()




// const departTripTickety = {
//     name : "kevin",
//     from : "chile",
//     to : "USA",
//     businessClass : false,
//     upgrade() {
//         if(departTripTickety.businessClass === true){
//             console.log(false)
//         } else if (departTripTickety.businessClass === false){
//             console.log("Your ticket is already business class!")
//         }
//     }
// }

// departTripTickety.leaveTimey = 18.00;
// departTripTickety.arriveTime = 14.00;





// function getSomeData() {
//     const error = true;
  
//     return new Promise((resolve, reject) => {
//       if (!error) {
//         resolve(); // The operation was successful
//       } else {
//         reject("An error happened along the way.");
//       }
//     });
//   }
  
//   console.log(getSomeData());


// function walkDog(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const dogWalked = true;

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

//         }, 3500);
//     });
// }

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//                   .then(value => {console.log(value); return takeOutTrash()})
//                   .then(value => {console.log(value); console.log("You finished all the chores!")})
//                   .catch(error => console.error(error));




// let array = [1,2,3,4,5,6,7,8,9,10]


// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// }




// let nombre = "kevin";
// let bolean = true;
// let nullx = null;
// let undefinet = undefined;
// let simbolo = Symbol("descripcion");
// let numeroGrande = 123456789012345678901234567890n;

// console.log(typeof nombre)
// console.log(typeof bolean)
// console.log(typeof nullx)
// console.log(typeof undefinet)
// console.log(typeof simbolo)
// console.log(typeof numeroGrande)



let tes = document.querySelector('.day')
tes.textContent = 'Martes';