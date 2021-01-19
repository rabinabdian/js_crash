// document.getElementById('btn1').addEventListener('click', getText)



// const getText = () => {
//     fetch(text.txt).then(function(res) {
//         return (res.text())
//     }).then(function(data) {
//         document.getElementById('output').innerText = data
//     }).catch(function(err) {
//         console.log('ERROR: ' + err)
//     })
// }


// async function message() {
//     return 'you have new message'
// }

// console.log(message())


// const message = async  () =>  'you have new message'

// message().then(res => console.log(res))

const getTodos = async() => {
    const res = await  fetch('https://jsonplaceholder.typicode.com/todos')

    const data = await res.json()
    return data
}

getTodos().then(todos => console.log(todos))