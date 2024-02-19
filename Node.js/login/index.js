import express from 'express';
import mysql from 'mysql';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import bodyParser from 'body-parser';
import fetch from 'node-fetch'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Create the server
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});

//Connect DB
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "user-app"
});

db.connect((err)=>{
    if (err) throw err;
    console.log('Connected to Database');
});

//Static folder
app.use(express.static(path.join(__dirname, '/public/')));

//Routes
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/public', '/html', '/index.html'));
});

app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, '/public', '/html', '/login.html'));
});

app.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname, '/public', '/html', '/register.html'));
});

//API
app.use(bodyParser.urlencoded({extended: true}))

fetch('/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        user: {
            name: "John",
            email: "john@example.com"
        }
    })
});

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Access the parse results as request.body
app.post('/login', function(request, response){
    res.send(request.body.user.name);
    res.send(request.body.user.password);
    
});