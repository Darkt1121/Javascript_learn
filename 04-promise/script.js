

let promise = new Promise((resolve,reject) => {
    const i = Math.floor(Math.random()* 5);

    if(i !== 1){
        resolve()
    } else {
        reject()
    }
})

