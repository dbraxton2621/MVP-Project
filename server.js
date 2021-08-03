require('dotenv').config()
const express = require('express');
const app = express();
const db = require('./db/db_configuration');



app.use(express.static('public'))

app.get('/api/employees', (req, res) => {
    db.query('SELECT * FROM employees', (err, data) => {
        console.log(err)
        res.json(data.rows);
    })
})
const PORT = process.env.PORT || 8000;




// app.use(express.json())
// const { Pool } = require('pg');
// const pool = new Pool ({
//     user: 'devinbraxton',
//     host: 'localhost',
//     database: 'match',
//     // password: '',
//     port: 5432,
//  
// // POST
// app.post('/api/user', async (request, response) => {
//     try {
//         const {name, email, gender} = request.body
//         console.log(request.body)
//         const userInfo = 'INSERT INTO users(name, email, gender) VALUES($1, $2, $3) RETURNING *'
//         const values = [name, email, gender]
//         const insertCmd = await pool.query(userInfo, values)
//         response.status(201).send(insertCmd.rows[0])
//     } catch (error) {
//         console.log('Server error')
//         response.status(500).json(error) 
//     }
// })
// // GET
// app.get('/api/qualities', async (request, response) => {
//     try {
//         const insertCmd = await pool.query('SELECT * FROM qualities');
//         response.status(201).send(insertCmd.rows)
//     } catch (error) {
//         console.log('Server error', error)
//         response.status(500).json(error) 
//     }
// })
// // GET ONE ITEM
// app.get('/api/qualities/:stuff', async (request, response) => {
//     const {stuff} = request.params;
//     console.log('this will be the shit value', shit)
//     try {
//         const insertCmd = await pool.query('SELECT * FROM qualities WHERE user_id = $1', [stuff]);
//         response.status(201).send(insertCmd.rows)
//     } catch (error) {
//         console.log('Server error', error)
//         response.status(500).json(error) 
//     }
// })
// // PATCH
// app.patch('/api/qualities/:user', async (request, response) => {
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
// // DELETE
// app.delete('/api/qualities/:username', async (request, response) => {
//     try {
//         const {username} = request.params;
//         const deleteCmd = 'DELETE FROM qualities WHERE FavoriteFoodType = $1 RETURNING *'
//         let {rows} = await pool.query(deleteCmd, [username]);
//         response.status(200).json(rows[0])
//     } catch (error) {
//     console.log('Server error', error)
//     response.status(500).json(error)
//     }
// })
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})