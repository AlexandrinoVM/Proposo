import { observations } from "../intefaces/observations.contract.js";
import { Section } from "../intefaces/section.contract.js";



export interface ContractData {
    clientName:string;
    projectTitle:string;
    date:Date;
    value: number;
    sections:Section[];
    observations:observations;
    customClauses:Section[];
    saveTemplate: Boolean
}