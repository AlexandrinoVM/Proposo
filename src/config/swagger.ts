// src/config/swagger.ts
import swaggerJsdoc from 'swagger-jsdoc';
import { Options } from 'swagger-jsdoc';


import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 3333
const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Minha API com Swagger',
      version: '1.0.0',
      description: 'Documentação da API com Swagger + TypeScript + Node.js',
    },
    servers: [
      {
        url: `http://localhost:${port}`, 
      },
    ],
  },
  apis: ['src/routes/*.ts', 'src/controllers/*.ts'], 
};

export const swaggerSpec = swaggerJsdoc(options);
