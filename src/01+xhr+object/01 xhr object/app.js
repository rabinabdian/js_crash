document.getElementById('button').addEventListener('click', loadData);
var div = document.getElementById('output');

function loadData() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);

    xhr.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText)
            div.innerHTML += this.responseText;

        }
    }

    xhr.send()
}