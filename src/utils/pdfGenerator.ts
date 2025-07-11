import fs from 'fs'
import path, { resolve } from 'path'
import Handlebars from 'handlebars'
import puppeteer from 'puppeteer';
import { ContractData } from '../models/contract.model.js'
import { pdfTemplateGenerate } from './pdfTemplateGenerator.js';
import { processJSON } from './processJSON.js';

export async function generatePDF(data:ContractData): Promise<Buffer>{
    
    const processedData = processJSON(data);

    const templatePaht = path.resolve('src','templates','contract.template.hbs')
    const htmlTemplate = fs.readFileSync(templatePaht,'utf8')
    const template = Handlebars.compile(htmlTemplate)
    const html = template(processedData);

   const browser = await puppeteer.launch()
   const page = await browser.newPage()
   await page.setContent(html,{waitUntil: 'networkidle0'})
   const pdfUint8array = await page.pdf({format:'A4',printBackground:true})
   //converting from uint8 to buffer type
   const pdfBuffer= Buffer.from(pdfUint8array)
   await browser.close();
   return pdfBuffer;
}