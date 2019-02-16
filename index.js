const express = require('express')

const port = 5000
app.listen(port, `Esta esuchando en el puerto ${port}`)

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res, err)=>{
    res.render('inicio', {
        
    })
})