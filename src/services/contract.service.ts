import { Contracts } from "../models/contract.db.model.js";
import { ContractData } from "../models/contract.model.js"
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
} 