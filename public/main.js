// postEmployee()
getData()
async function getData() {
    const res = await fetch('/api/employees')
    const data = await res.json() 
    addOfficer(data)
}

function addOfficer(data) {
    //[{},{},{}]
    console.log(data)
    for (let i of data) {
        let div = $('<div></div>')
        div.attr('class', 'employees')
        div.html(`First Name: ${i.first_name}<br> LastName: ${i.last_name}<br>  Badge Number: ${i.badge_number} <br> ${i.department} <br> ${i.employment_start_date} <br> ${i.rank}`)
        $('.container').append(div) 
    }
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


function loadEventListenersGet() {
    const btn = document.querySelector('#btn')
    btn.addEventListener('click', getData)
}
loadEventListenersGet()

function loadEventListenersPost() {
    const submitbtn = document.querySelector('.submitbtn')
    submitbtn.addEventListener('click', postEmployees)
    console.log('This button is working')
}
loadEventListenersPost()

async function postEmployees() {
    const first_name = $('#first_name').val()
    const last_name = $('#last_name').val()
    const badge_number = $('#badge_number').val()
    const department = $('#department').val()
    const employment_start_date = $('#employment_start_date').val()
    const rank = $('#rank').val()
    let lastOfficer = $(`.employees`).children().last().attr('id')
    addOfficer([{first_name, last_name, badge_number, department, employment_start_date, rank}])
    alert(`Added officer ${rank} ${first_name} ${last_name}.`);
    postEmployee('/api/employees', {first_name, last_name, badge_number, department, employment_start_date, rank})  
}     

