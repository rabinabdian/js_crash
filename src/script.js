document.getElementById('btn1').addEventListener('click', getText)



const getText = () => {
    fetch(text.txt).then(function(res) {
        return (res.text())
    }).then(function(data) {
        document.getElementById('output').innerText = data
    }).catch(function(err) {
        console.log('ERROR: ' + err)
    })
}