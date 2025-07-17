import { Contracts } from "../models/contract.db.model.js";
import { ContractData } from "../intefaces/contract.model.js"
import {generatePDF} from "../utils/pdfGenerator.js"

export class ContractService{
    static async createContract(data:ContractData): Promise<Contracts>{
        const filePath = await generatePDF(data);
        const nameClient = data.clientName
        const newContract = await Contracts.create({
            client_name: data.clientName,
            pdf_file: filePath,
        })
        return newContract;
    }

    static async deleContract(id:string){
        const findData =await Contracts.findByPk(id)
        if(!findData){
            return false
        }
        try{
            await Contracts.destroy({where:{id:id}})
            return true
        }catch{
            return false
        }
    }

    static async getContract(id:string): Promise<Contracts | null>{
        return await Contracts.findByPk(id)
        
    }
} 