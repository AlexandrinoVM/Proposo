import { aligns } from "./aligns.contract.js";
import { color } from "./color.contract.js";

export interface observations extends color,aligns{
    observations:string
}