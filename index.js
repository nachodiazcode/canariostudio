const express = require('express')

const path = require('path')

const app = express()

app.set('view engine', 'pug')


app.set('views', path.join(__dirname, 'views'));

app.use('/views', express.static(path.join(__dirname, 'views')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'public','css')));
app.use('/js', express.static(path.join(__dirname, 'public','js')));

app.get('/' , (req, res)=>{
    res.render('inicio',{

    })
})

app.listen(3000, () => {
    console.log('Escuchando en el puerto ' + 3000)
})

