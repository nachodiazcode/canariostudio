const app = express()


const port = 5000
app.listen(port, `Esta esuchando en el puerto ${port}`)

app.get('/', (req, res)=>{
    res.status(200).send(`Todo OK`)
})