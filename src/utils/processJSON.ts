
import { ContractData } from "../models/contract.model.js";

export function processJSON(data:ContractData){
    data.sections = data.sections.map(section=>({
        ...section,
        alignContent: section.alignContent || "left",
        alignTitle: section.alignTitle || "left"
    }))
    return data
}