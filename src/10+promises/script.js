let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 3) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})


p.then((message) => {
    console.log('this is : ' + message)
}).catch((message) => {
    console.log('this is : ' + message)
})