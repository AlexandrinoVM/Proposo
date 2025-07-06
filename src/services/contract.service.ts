import { ContractData } from "../models/contract.model.js"
import {generatePDF} from "../utils/pdfGenerator.js"

export class ContractService{
    static async createContract(data:ContractData): Promise<string>{
        const filePath = await generatePDF(data);
        return filePath;
    }
} 