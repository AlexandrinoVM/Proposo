import { aligns } from "./aligns.contract.js";
import { color } from "./color.contract.js";

export interface Section extends aligns,color{
    title:string;
    content:string;
}
