// require('dotenv').config()
const express = require('express')
const app = express();
const {Pool} = require('pg')
const pool = require('./db/db_configuration')
const cors = require("cors")

const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.static('public'))
app.use(express.json())

//GET ALL
app.get('/api/employees', async (req, res) => {
    pool.query('SELECT * FROM employees', (err, data) => {
        console.log(err)
        res.json(data.rows);
    })
})
// GET ONE ITEM
app.get('/api/employees/:stuff', async (request, response) => {
    const { stuff } = request.params;
    console.log('this will be the stuff value', stuff)
    try {
        const insertCmd = await pool.query('SELECT * FROM employees WHERE employee_id = $1', [stuff]);
        response.status(201).send(insertCmd.rows)
    } catch (error) {
        console.log('Server error', error)
        response.status(500).json(error)
    }
})
// POST
app.post('/api/employees', async (request, response) => {
    try {
        console.log('This is my request body', request.body)
        const { first_name, last_name, badge_number, department, employment_start_date, rank } = request.body
        const employeeInfo = 'INSERT INTO employees(first_name, last_name, badge_number, department, employment_start_date, rank) VALUES($1, $2, $3, $4, $5, $6) RETURNING *'
        const values = [first_name, last_name, badge_number, department, employment_start_date, rank]
        const insertCmd = await pool.query(employeeInfo, values)
        console.log('This is the insert var', insertCmd.rows)
        response.status(201).send(insertCmd)
    } catch (error) {
        console.log('Server error', error)
        response.status(500).json(error)
    }
})
// DELETE
app.delete('/api/employees/:fired', async (request, response) => {
    try {
        const { fired } = request.params;
        console.log('This is my fired var', fired)
        const deleteCmd = 'DELETE FROM employees WHERE employee_id = $1 RETURNING *'
        let { rows } = await pool.query(deleteCmd, [fired]);
        response.status(200).json(rows[0])
        console.log(rows[0])
    } catch (error) {
        console.log('Server error', error)
        response.status(500).json(error)
    }
})
// // PATCH
// app.patch('/api/employees/:user', async (request, response) => {
//     try {
//         const {user} = request.params;
//         const {name, email, gender} = request.body
//         if ( name == null || email == null || typeof gender == null ) {
//             response.status(400).send("Bad Request")
//         } else {
//             const updateCmd = 'UPDATE users SET name = $1, email = $2, gender = $3 WHERE name = $4 RETURNING *'
//             //UPDATE users SET name = 'Kim', email = 'kimpossible@gmail.com', gender = 'female' WHERE name = 'Brittney' RETURNING *;
//             const values = [name, email, gender, user]
//             await pool.query(updateCmd, values, (err, res) => {
//                 if (err) {
//                     console.log(err.stack)
//                 }
//                 response.status(201).send(res.rows[0])
//             })
//         }
//     } catch (error) {
//         console.log('Server error')
//         response.status(500).json(error)
//     }
// })
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})