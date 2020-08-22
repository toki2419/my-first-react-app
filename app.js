const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'reactmysql'
});
  
connection.connect(function(err){
    (err) ? console.log(err) : console.log(connection);
});

app.get('/api/select', (req, res) => {
    var sql = "SELECT * FROM todo ORDER BY id DESC";
    connection.query(sql, function(err, results) {
        if (err) throw err;
        res.json({todos: results});
    });
});

app.post('/api/delete', (req, res) => {
    var sql = "DELETE FROM todo "
            + "WHERE id = '" + req.body.id + "'";
    connection.query(sql, (err, result) => {
        if(err) throw err;
        res.json({todos: result});
    })
});

app.post('/api/update', (req, res) => {
    var sql = "UPDATE todo SET "
            + "completed = '" + req.body.completed + "' "
            + "WHERE id = '" + req.body.id + "'";
    connection.query(sql, (err, result) => {
        if(err) throw err;
        res.json({todos: result});
    })
});

app.listen(4000, () => console.log('App listening on port 4000'));