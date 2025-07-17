import { Contracts } from "../models/contract.db.model.js";
import { ContractData } from "../models/contract.model.js";
import { ContractService } from "../services/contract.service.js";
import { Request, Response } from 'express';

export class ContractController {
    static async generate(req:Request,res:Response){
        const data:ContractData = req.body;
        try{
            const pathToPdf = await ContractService.createContract(data);
            return res.status(201).json({sucess: true,message:'contract created with sucess'})
        }catch(err){
            return res.status(500).json({sucess: false,message:'contract not created',error:err})
        }
    }

    static async getContractPDF(req:Request,res:Response){
        try{
            const {id} = req.params;
            // const contract = await Contracts.findByPk(id)
            const contract =await ContractService.getContract(id)
        if(!contract || !contract.pdf_file){
            return res.status(404).json({error: 'contract not found'})
        }
            res.setHeader('Content-Type','application/pdf');
            res.setHeader('Content-Disposition',`attachment; filename"contract-${id}.pdf"`)
            res.send(contract.pdf_file)
        }catch(err){
            console.error(err)
            res.status(500).json({message: 'Error Searching for Contract',error:err})
        }
    }

    static async deleteContract(req:Request,res:Response){
        const {id } = req.params
        try{
            const deleteUser = await ContractService.deleContract(id)
            if(deleteUser){
                return res.status(201).json({sucess: true,message:'contract deleted with sucess'})
            }else{
                res.status(500).json({err: 'Could not found'})
            }
        }catch(err){

            res.status(500).json({error: 'Could not delete contract:',err})
        }
        const deleteUser = await ContractService.deleContract(id)
        if(deleteUser){
            return res.status(201).json({sucess: true,message:'contract deleted with sucess'})
        }else{
        }
    }
}

