const express = require('express')
const app = express()
 
app.use(express.static(__dirname + '/public'))

app.use(express.static(__dirname + '/views'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html')
})

app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/works.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/PhotoGallery', (req, res) => {
    res.sendFile(__dirname + '/views/photoGallery.html.html')
})
 
app.listen(3002)