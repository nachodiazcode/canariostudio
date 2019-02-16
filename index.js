const express = require('express')

const app = express()


const port = 3100
app.listen(port, `Esta esuchando en el puerto ${port}`)


app.get('/' , (req, res)=>{
    res.send('hola Mundo')
})