const {createPool} = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "pass",
    database: "test"
});

pool.query(`select * from apartments`, (err, res) =>{
    return console.log(res)

})