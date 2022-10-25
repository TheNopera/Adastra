const express = require("express")
const app = express();
const mysql = require('mysql2')
const bodyParser = require('body-parser');
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'derp123456789',
    database: 'userdb'
})

db.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected...');
  });

app.post('/store-data', (req,res)=>{
    let data = {
        Email: req.body.Email,
        Nome: req.body.Nome,
        Sobrenome: req.body.Sobrenome
    }
    
    let sql = "INSERT INTO users SET ?";
    db.query(sql,data, (err,result)=>{
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": result}));
    })
})//

app.listen(3001, ()=>{
    console.log('running on port 3001');
})


    