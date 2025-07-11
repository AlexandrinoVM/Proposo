export interface Section{
    title:string;
    content:string;
    alignTitle?: "left" | "center" | "right";
    alignContent?: "left" | "center" | "right";
}


export interface ContractData {
    clientName:string;
    projectTitle:string;
    date:Date;
    value: number;
    sections:Section[];
    observations:string;
    customClauses:[];
    saveTemplate: Boolean
}