const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'pug')

app.set('views', path.join(__dirname, 'views'));


app.get('/' , (req, res)=>{
    res.render('inicio',{

    })
})

app.listen(9000, () => {
    console.log('Escuchando en el puerto ' + 9000)
})
