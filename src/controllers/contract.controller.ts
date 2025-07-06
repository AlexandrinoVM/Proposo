import { Contracts } from "../models/contract.db.model.js";
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

    static async getContractPDF(req:Request,res:Response){
        
        try{
        const {id} = req.params;

        const contract = await Contracts.findByPk(id)

        if(!contract || !contract.pdf_file){
            return res.status(404).json({error: 'contract not found'})
        }

        res.setHeader('Content-Type','application/pdf');
        res.setHeader('Content-Disposition',`attachment; filename"contract-${id}.pdf"`)
        res.send(contract.pdf_file)
    }catch(err){
        console.error(err)
        res.status(500).json({error: 'Erro ao buscar contrato'})
    }

    }
}

