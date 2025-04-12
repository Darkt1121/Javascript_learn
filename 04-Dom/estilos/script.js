
// classList = Element property in javascript used to interact
//              with an elements list of classes (css classes)
//              Allow you to make reusable classes for many elements
//              across your webpage.


// add() 
// remove()
// toggle(remove if present, add if not)
// replace(oldclass, newclass)
// contains()




let btn_1 = document.querySelector(".btn");

let h1_text = document.getElementById("myh1");

// btn_1.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// });


// btn_1.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// });


// h1_text.classList.add("tes");
// h1_text.addEventListener("click", event => {

//     if(event.target.classList.contains("disable")){
//         event.target.textContent += "👀"
//     } else{
//         event.target.classList.replace("tes","disable");
//     }
// });


let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("tes");
});


buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    })
});


buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    })
});


buttons.forEach(button => {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disable")){
            event.target.textContent += "🦄"
        } else {
            event.target.classList.replace("tes","disable");
        }

       
    })
})