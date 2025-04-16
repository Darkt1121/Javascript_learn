
/// `${}`
               //Ejercicio 1
//---------------------------------------------------------------------------------
let array = [
    { name: 'kevin', dueDate: '2003-09-12' },
    { name: 'sanchez', dueDate: '1993-03-06' }
  ];


renderTodoList()
function renderTodoList(){    
     let arrayResult = ''
     for(let i = 0; i < array.length; i++){
          const resultObjet = array[i]
        //   const name = resultObjet.name
        //   const dueDate = resultObjet.dueDate
          const {name,dueDate} = resultObjet
          const html = `
            <div class="todo-item">
              <div>${name}</div>
              <div>${dueDate}</div>
              <button onclick="
                array.splice(${i},1);
                renderTodoList();
              ">delete</button>
            </div>
            `;

          arrayResult += html
     }
    
     document.querySelector('.js_text_div').innerHTML = arrayResult
}

let btn_1 = document.querySelector(".js_btn_add_1")
let input_text = document.querySelector(".js_input_text")
let input_date = document.querySelector(".js_input_date");

btn_1.addEventListener("click", function(){
    let name = input_text.value.trim();
    let dueDate = input_date.value;

array.push({ name: name, dueDate: dueDate });

// let name = input_text.value
//  array.push(name)


input_text.value = ''
input_date.value = '';


renderTodoList()
})

               // FIN
//----------------------------------------------------------------




//         EJERCICIO 2   
//---------------------------------------------
// let array2 = []     

// let input_text_2 = document.querySelector('.js_input_text_2')
// let btn_2 = document.querySelector('.js_btn_add_2')
// let p_result = document.querySelector('.js_p_result')

// btn_2.addEventListener("click", function(exx){
//      let name22 = input_text_2
     
     
// })
               // FIN
//----------------------------------------------------------------





//         EJERCICIO 3 
//---------------------------------------------

// const nums = [10,20,30]
// let tes = nums.pop()
// let tes2 = nums.push(99)
// console.log(tes)
// console.log(nums)

               // FIN
//----------------------------------------------



//         EJERCICIO 4
//---------------------------------------------

// function arraySwap(){
//      let array = [1,20,22,24,5]

//      let tes = array.pop()
//      let tes2 = array.push(1)
//      array.shift()
//      array.unshift(5)
//      // let tes3 = array.unshift(5)
    

//      console.log(tes)
//      console.log(array)
    
//      // console.log(tes3)
  
// }

// arraySwap()

//     FIN     
//----------------------------------------------


 














