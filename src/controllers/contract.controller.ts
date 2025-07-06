import { ContractData } from "../models/contract.model.js";
import { ContractService } from "../services/contract.service.js";


export class ContractController{
    static async generate(data:ContractData){
        try{
            const pathToPdf = await ContractService.createContract(data);
            console.log(`pdf generated with sucess  in: ${pathToPdf}`)
        }catch(err){
            console.log(`could not generate contract:${err}`)
        }
    }
}

