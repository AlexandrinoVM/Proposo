import { aligns } from "./aligns.contract.js";

export interface header extends aligns{
    pathLogo?:string;
    logo?:string;
    contractor:string;
    cnpj:number;
    addres:string;
}