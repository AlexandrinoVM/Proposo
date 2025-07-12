
import { ContractData } from "../models/contract.model.js";

export function processJSON(data:ContractData){
    data.sections = data.sections.map(section=>({
        ...section,
        alignContent: section.alignContent || "left",
        alignTitle: section.alignTitle || "left",
        TitleColor: section.TitleColor || "black",
        ContentColor: section.ContentColor || "black"
    }))

    data.customClauses = data.customClauses.map(custom=>({
        ...custom,
        alignContent: custom.alignContent || "left",
        alignTitle: custom.alignTitle || "left",
        TitleColor: custom.TitleColor || "black",
        ContentColor: custom.ContentColor || "black"
    }))


     if (data.observations) {
        data.observations = {
        ...data.observations,
        alignTitle: data.observations.alignTitle || "left",
        alignContent: data.observations.alignContent || "left",
        TitleColor: data.observations.TitleColor || "black",
        ContentColor: data.observations.ContentColor || "black"
        };
    }

    return data
}