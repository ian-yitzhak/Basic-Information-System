const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})


app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '/contact.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/about.html'))
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '404.html'))
})
app.listen(8000, () => console.log('perfect'))