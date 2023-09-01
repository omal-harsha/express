import express from 'express'
import { router as homeRouter } from './route/home.js';


const app = express()
app.use(express.json())

app.use('/home', homeRouter)

app.listen( process.env.PORT || 5000, ()=> {
    console.log("port 5000 connected")
})