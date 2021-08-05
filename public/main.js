const btn = document.querySelector('#btn')
const container = document.querySelector('.container')

createContainer()
getData()
postEmployee()
loadEventListenersGet()

function loadEventListenersGet() {
    btn.addEventListener('click', getData)
}

function loadEventListenersPost() {
    document.getElementsByClassName("form-inline").addEventListener("click", postEmployee());
}

async function getData() {
    const res = await fetch('/api/employees')
    const data = await res.json() 
    for (let i of data) {
        let div = $('<div></div>')
        div.attr('class', 'employees')
        div.html(`First Name: ${i.first_name}<br> LastName: ${i.last_name}<br>  Badge Number: ${i.badge_number} <br> ${i.department} <br> ${i.rank}`)
        $('#container').append(div) 
    }
}

function createContainer() {
    let container = $('<div></div>')
    container.attr('id', 'container')
    $('body').append(container)
}

async function postEmployee(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response.json()
}




// function paintScreen(data) {
//     for(let i = 0; i < data.length; i++) {
//         let current = data[i]
//         const div = document.createElement('div')
//         div.textContent = current
//         container.appendChild(div)
//     }
// }