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
      title: 'Proposo',
      version: '1.0.0',
      description: 'Documentacion Api Typescript + NodeJs',
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
