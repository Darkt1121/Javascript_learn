
const button = document.querySelector(".btn1")


button.addEventListener("click",function(){
    setTimeout(function(){
        button.textContent = "!Finished...."
    },2000)

    setTimeout(function(){
        button.textContent = "!kevin!!!!!"
    },4000)
})


//---------------------------------------------------

const button2 = document.querySelector(".btn2")
const message1 = document.querySelector(".message")

button2.addEventListener("click",function(){
    setTimeout(function(){
        message1.textContent = "Add"
    },2000)

    setTimeout(function(){
        message1.textContent = ""
    },3000)
})