
import path from "path";
import { ContractData } from "../models/contract.model.js";
import fs from "fs"
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
    
    if (!data.Header.pathLogo?.trim()) {
        console.warn(`extension not supported`)
        delete data.Header.logo;
    }else{
        const ext = path.extname(data.Header.pathLogo).toLowerCase().replace(".","")
        const suportEXT = ['png','jpg','jpeg','webp','svg']

        if(suportEXT.includes(ext)){
            const base64 = fs.readFileSync(data.Header.pathLogo,{encoding:"base64"})
            data.Header.logo = `data:image/${ext};base64,${base64}`
        }else{
            delete data.Header.logo;
        }
    }

    return data
}