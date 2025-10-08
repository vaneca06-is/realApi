// JS COMMON JS
//console.log('Hello Word from API')

//JS ES6 (MODULE)
import express, { application } from "express";
import helmet from "helmet";
import cors from "cors";

const api = express()
api.use(cors())
api.use(express.json())
api.use(helmet())

api.listen(3099, ()=> {
    console.log("API running on port 3099")
})

api.get('/test',(req,res)=>{
    console.log('API route test 123')

    res.send('ok')
})


api.post('/incrementar',(req,res)=>{
    console.log('API route ingrementar')
    const { numero } = req.body

    res.send({ numero: numero + 1 })
})
