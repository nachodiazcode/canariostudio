const express = require('express')

const app = express()

app.set('view engine', 'pug')

app.get('/' , (req, res)=>{
    res.render('inicio',{

    })
})

app.listen(9000, () => {
    console.log('Escuchando en el puerto ' + 9000)
})
