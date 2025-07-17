import { header } from "../intefaces/header.contract.js";
import { observations } from "../intefaces/observations.contract.js";
import { Section } from "../intefaces/section.contract.js";
import { signature } from "../intefaces/signatures.contract.js";


export interface ContractData {
    Header:header;
    clientName:string;
    projectTitle:string;
    date:Date;
    value: number;
    sections:Section[];
    observations:observations;
    customClauses:Section[];
    saveTemplate: Boolean;
    signatures:signature[];
}