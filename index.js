const express = require('express')

const app = express()

app.get('/' , (req, res)=>{
    res.render('inicio',{

    })
})

app.listen(9000, () => {
    console.log('Escuchando en el puerto ' + 9000)
})
