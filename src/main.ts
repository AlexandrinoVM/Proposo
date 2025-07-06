import { pool } from './config/database.js'
import express from 'express'
import {Router,Request,Response} from 'express'
import { ContractController } from './controllers/contract.controller.js';
import dotenv from 'dotenv'
dotenv.config()
const app = express()

const route = Router()

app.use(express.json())


route.post('/',(req:Request,res:Response)=>{
    ContractController.generate(req,res);
})

// ContractController.generate({
//   clientName: 'João da Silva',
//   serviceName: 'Desenvolvimento Web',
//   value: 2500,
//   dueDate: '2025-07-15'
// });


app.use(route)
const port = process.env.PORT || 3333

app.listen(port,()=>console.log( `server running on port ${port}`))


// async function start() {
//   try {
//     const [rows] = await pool.query('SELECT NOW() AS now');
//     console.log('Conectado com sucesso:', rows);
//   } catch (err) {
//     console.error('Erro na conexão:', err);
//   }
// }

// start()