function saludar(){
    console.log('hola word');
}

saludar();


//----------------------------------------------------------------------------
// una funcion tambien puede acceder a una variable externa.
let userName = 'kevin';

function showMessage(){
    let mensaje = "hola" + userName;
    console.log(mensaje);
}

showMessage();


//----------------------------------------------------------------------------

let Name = 'alessia';

function showmessage(){
    Name = "kevin";  // cambio de la variable externa
    let message = "hola" + Name;
    console.log(message);
}


console.log(Name); //alessia antes de llamar a la funcion

showmessage();

console.log(Name); //kevin, el valor fue modificado por la funcion


//----------------------------------------------------------------------------


//Parametros
// Podemos pasar datos arbitrarios a funciones usando parametros
function showTes(from,tes){
    console.log(from + ': ' + tes);

}

showTes('nombre ', 'kevin');
showTes('comuna ', "el bosque");

//----------------------------------------------------------------------------

function showTes2(to,text){
    to = '*' + to + '*';
    console.log(to + ': ' + text);
}

let to = "craft";
showTes2(to, "hello"); // *craft* : hello
console.log(to);

//----------------------------------------------------------------------------


function sum(){
    return 2+2;
}

//let resultado = sum();
//console.log(resultado);
console.log(sum());

//------------------------------------------------------------------------------
//Argumentos y Parametros

function resta(a,b){
    return a - b;
}

let resultado = resta(21,20);
console.log(resultado);
console.log(typeof resta);





