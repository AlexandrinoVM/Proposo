import {Router,Request,Response} from 'express'
import { ContractController } from '../controllers/contract.controller.js';

const route = Router();

route.post('/',(req:Request,res:Response)=>{
    ContractController.generate(req,res);
})

route.delete('/:id',(req:Request,res:Response)=>{
    ContractController.deleteContract(req,res);
})

route.get('/:id/pdf',(req:Request,res:Response)=>{
    ContractController.getContractPDF(req,res);
})

export default route