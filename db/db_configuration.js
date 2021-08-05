const { Pool } = require('pg')

let pool
if(!process.env.NODE_ENV) {
    pool = new Pool({
        user: 'devinbraxton', 
        host: 'localhost',
        port: 5432,
        password: '',
        database: 'fuzzbuzz'
    })
} else {
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        host: 'https://fuzzbuzzmvpproject.herokuapp.com/',
        // ssl: {
        //     rejectUnauthorized: false
        // }
    })
}


module.exports = pool;