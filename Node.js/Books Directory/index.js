const express = require('express');
const path = require('path');
const mysql = require('mysql');
var exphbs  = require('express-handlebars');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "book_directory"
});

db.connect((err)=>{
    if (err) console.log(err);;
    console.log('connected');
});

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


// Look this shit up
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

app.get('/', function (req, res) {
    sql = "SELECT * from books";
    books = db.query(sql, (err, results)=>{
        if (err) throw err;
        res.render('index', {
            title: "Books directory",
            results
        });
    })
    
});

app.get('/addbookform', (req, res) =>{
    res.sendFile(path.join(__dirname, 'addBook.html'));
})

app.get('/addbook', (req, res)=>{
    let book = {
        name: "book5",
        description: "whatever",
        isbn : 5
    }
    let sql = "INSERT INTO books set ?";
    let query = db.query(sql, book, err=>{
        if (err) throw err;
        res.send('Book inserted');
    })   
});

app.get('/deletebook/:isbn', (req, res)=>{
    let sql = `DELETE from books where isbn = ${req.params.isbn}`;
    let query = db.query(sql, err=>{
        if (err) throw err;
        res.send(`Book ${req.params.isbn} deleted`);
    })
});

app.get('/updatebook/:isbn', (req, res)=>{
    let newName = "Book24";
    let newDesc = "pretty sus"
    let newISBN = '24'
    let sql = `UPDATE books SET name = '${newName}', description = '${newDesc}', isbn = '${newISBN}' WHERE isbn = ${req.params.isbn}`;
    let query = db.query(sql, err=>{
        if (err) throw err;
        res.send(`Book ${req.params.isbn} updated`);
    })
});