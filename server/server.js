const express = require("express")
const app = express();
const mysql = require('mysql2')
const bodyParser = require('body-parser');
const cors = require("cors");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'derp123456789',
    database: 'userdb'
})

db.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected...');
});

// ADD NEW USER
app.post('/store-data', async (req, res) => {
    let data = {
        Email: req.body.Email,
        Nome: req.body.Nome,
        Sobrenome: req.body.Sobrenome,
        Senha: req.body.Senha
    }
    let sql = "INSERT INTO users SET ?";
    const sqlSearch = "SELECT * FROM users WHERE Email = ?"; // checks to see if user already exists
    db.query(sqlSearch, [req.body.Email], (err, result) => {
        console.log(result)
        if (result.length != 0) {
            console.log("------> User already exists");
            res.sendStatus(409);
        } else {
            db.query(sql, data, (err, result) => {
                if (err) throw err;
                res.sendStatus(201);
            })
        }
    })
})

app.get('/Login', (req, res) =>{
    
})

app.listen(3001, () => {
    console.log('running on port 3001');
})


