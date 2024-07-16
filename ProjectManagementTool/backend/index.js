import "dotenv/config"
import express from 'express'
import cors from 'cors'


const port = process.env.PORT;
const app = express()

app.use(cors())


app.get('/getData', (req, res) =>{
    res.send("this is running")
})




app.listen(port , () => console.log(`app is listening at port : ${port}`))