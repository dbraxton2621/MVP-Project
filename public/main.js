const btn = document.querySelector('#btn')
const container = document.querySelector('.container')

createContainer()
getData()
postEmployee()
loadEventListenersGet()
loadEventListenersPost()

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
    console.log(data)
}

function loadEventListenersGet() {
    btn.addEventListener('click', getData)
}

function loadEventListenersPost() {
    $(".btn btn-primary").on('click', () => {
        const firstName = $('#first_name').val()
        const lastName = $('#last_name').val()
        const badgeNumber = $('#badge_number').val()
        const whatDepartment = $('#department').val()
        const employmentStartDate = $('#employment_start_date').val()
        const whatRank = $('#rank').val()
        if (textInput.length === 0) {
            $('.error').show()
            $('.error').text('Oops!! Please enter item')
        } else {
            let lastOfficer = $(`.employees`).children().last().attr('id')
            //if there is not 
            if (lastOfficer === undefined) {
                lastOfficer = 1;
                var newDiv = 
                postEmployee('/api/employee', {first_name: firstName, last_name: lastName, badge_number: badgeNumber, department: whatDepartment, employment_start_date: employmentStartDate, rank: whatRank})
            }
        }
    });
    
}
