import { sequelize } from './config/database.js'
import express from 'express'
import {Router,Request,Response} from 'express'
import { ContractController } from './controllers/contract.controller.js';
import { swaggerSpec } from './config/swagger.js';
import swaggerUi from "swagger-ui-express"

import route from "./routes/Contracts.route.js"


import dotenv from 'dotenv'
dotenv.config()
const app = express()

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(route)
const port = process.env.PORT || 3333

app.listen(port,()=>console.log( `server running on port ${port}`))

async function start() {
    try{
        await sequelize.sync({alter: true})
        console.log('connectet to the database with sucess')
    }catch(err){
        console.log("cannot connect to the database")
    }
}
start();