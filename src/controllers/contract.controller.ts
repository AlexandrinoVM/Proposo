import { ContractData } from "../models/contract.model.js";
import { ContractService } from "../services/contract.service.js";
import { Request, Response } from 'express';

export class ContractController {
    static async generate(req:Request,res:Response){
        const data:ContractData = req.body;
        try{
            const pathToPdf = await ContractService.createContract(data);
            console.log(`pdf generated with sucess  in: ${pathToPdf}`)
            return res.status(201).json({sucess: true,message:'contract created with sucess',path:pathToPdf})
        }catch(err){
            console.log(`could not generate contract:${err}`)
            return res.status(500).json({sucess: false,message:'contract not created',error:err})
        }
    }
}

