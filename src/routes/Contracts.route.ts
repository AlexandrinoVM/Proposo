import {Router,Request,Response} from 'express'
import { ContractController } from '../controllers/contract.controller.js';

const route = Router();



/**
 * @swagger
 * /contract:
 *   post:
 *     summary: Generate a Contract with the given data
 *     tags:
 *       - Contratos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Header:
 *                 type: object
 *                 properties:
 *                   pathLogo:
 *                     description: Local path to the logo
 *                     type: string
 *                   contractor:
 *                     type: string
 *                   cnpj:
 *                     type: number
 *                   addres:
 *                     type: string
 *                   alignTitle:
 *                     type: string
 *                   alignContent:
 *                     type: string
 *               clientName:
 *                 type: string
 *               projectTitle:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date-time
 *               value:
 *                 type: number
 *               sections:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     content:
 *                       type: string
 *                     alignTitle:
 *                       type: string
 *                     alignContent:
 *                       type: string
 *                     TitleColor:
 *                       type: string
 *                     ContentColor:
 *                       type: string
 *               observations:
 *                 type: object
 *                 properties:
 *                   observations:
 *                     type: string
 *                   alignTitle:
 *                     type: string
 *                   alignContent:
 *                     type: string
 *                   TitleColor:
 *                     type: string
 *                   ContentColor:
 *                     type: string
 *               customClauses:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     content:
 *                       type: string
 *                     alignTitle:
 *                       type: string
 *                     alignContent:
 *                       type: string
 *               saveTemplate:
 *                 type: boolean
 *               signatures:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     role:
 *                       type: string
 *                     name:
 *                       type: string
 *     responses:
 *       201:
 *         description: Contract created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Contract created with success
 *                 path:
 *                   type: string
 *                   example: /contracts/generated/contract123.pdf
 *       500:
 *         description: Failed to create contract
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Contract not created
 *                 error:
 *                   type: string
 *                   example: Internal server error details
 */
route.post('/contract',(req:Request,res:Response)=>{
    ContractController.generate(req,res);
})
/**
 * @swagger
 * /contract/{id}:
 *   delete:
 *     summary: delete contract by id
 *     tags:
 *       - Contratos
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do contrato
 *         schema:
 *           type: string
  *     responses:
 *       200:
 *         description: Contract deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Contract deleted successfully
 *       500:
 *         description: Could not delete contract
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Could not delete contract
 *                 error:
 *                   type: string
 *                   example: Error details here
 */
route.delete('/contract/:id',(req:Request,res:Response)=>{
    ContractController.deleteContract(req,res);
})

/**
 * @swagger
 * /contract/{id}/pdf:
 *   get:
 *     summary: Get a contract PDF by ID
 *     tags:
 *       - Contratos
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do contrato
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the contract PDF if the ID exists
 *         content:
 *           application/pdf:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: Contract not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Contract not found
 *       501:
 *         description: Error while searching for the contract
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Error searching for contract
 *                 error:
 *                   type: string
 *                   example: Internal server error details
 */
route.get('/contract/:id/pdf',(req:Request,res:Response)=>{
    ContractController.getContractPDF(req,res);
})

export default route