const express = require("express")
const app = express();
const mysql = require('mysql2')
const bodyParser = require('body-parser');
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());


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
   
    var Email= req.body.Email;
    console.log(Email);
    var Nome= req.body.Nome;
    var Sobrenome= req.body.Sobrenome;
    
    let sql = `INSERT INTO users (Email, Nome, Sobrenome) VALUES("${Email}", "${Nome}","${Sobrenome}")`;
    db.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": result}));
    })
})

app.listen(3001, ()=>{
    console.log('running on port 3001');
})


    