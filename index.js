const express = require('express')

const port = 3100
app.listen(port, `Esta esuchando en el puerto ${port}`)

const app = express()

app.get('/' , (req, res)=>{
    res.send('hola Mundo')
})