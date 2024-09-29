const animales = ['ps5', 'iphone'];
console.log(animales); 
console.log(animales[0]); 
animales[2] = 'mackbook';
console.log(animales);

//------------------------------------------------------------------------

let day = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes"
];
console.log(day);
// obtener el ultimo elemento de un array con at(-1)
//console.log(day.at(-1));
console.log(day.pop());
console.log(day.push("push"));
console.log(day);


// push = añade un elemento final. ----> console.log(day.push("viernes"));

// pop = toma un elemnto final. ------>  console.log(day.pop());

// shift = Extrae el primer elemento de la matriz y lo devuelve;

// unshift = Agrega un elemento al inicio del array -----> names.unshift('kevin');

//------------------------------------------------------------------------

let countries = [
    "china",
    "alemania",
    "japon",
    "españa"
];

console.log(countries.shift());
console.log(countries);


//------------------------------------------------------------------------

let names = ["alessia","diana","juan"];
names.unshift('kevin');
console.log(names);


//------------------------------------------------------------------------

let frutas = ["manzana", "uva", "naranja"];
// podemos agregar o remplazar un nuevo elemento ---> frutas[3] = 'sandia';
frutas[3] = 'sandia';
console.log(frutas);
// contar los elemento dentro del array length
console.log(frutas.length); 
// llamar a un elemento [2] ---> naranja
console.log(frutas[2]);

//------------------------------------------------------------------------




//------------------------------------------------------------------------
// la array se trunca 
let tess = ["k","e","v","i","n"];

tess.length = 3;
console.log(tess);

tess.length = 100;
console.log(tess[3]);


//------------------------------------------------------------------------

let animals = ["perro", "leon", "pez", "lobo"];
let especies = animals;

console.log(especies.push("dragon"));
console.log(animals);
animals.length;

//------------------------------------------------------------------------


// let styles = ["jazz","Blues"];
// console.log(styles.push("Rock-n-Roll"));
// styles[Math.floor((styles.length -1) / 2)];
// console.log(styles.shift());
// styles.unshift("rap","Reggae");
// styles.length;


//  jazz, Blue
//  jazz , Blue, Rock-n-Roll
//  jazz, Classic, Rock-n-Roll
//  Rap , Reggae, Classic, Rock-n-Roll







let myday = [
    "my full name is kevi rigs dionicio sanchez",
    "i have 1 sister is name is alessia valentina ",
    "a like close and travel to united estad"
]


console.log(myday);

myage = ["i have 20 year old"]

myday.push(myage);
console.log(myday)

