import { header } from "./header.contract.js";
import { observations } from "./observations.contract.js";
import { Section } from "./section.contract.js";
import { signature } from "./signatures.contract.js";


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