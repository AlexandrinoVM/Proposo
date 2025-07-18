import express from 'express';
import dotenv from 'dotenv';
import route from './routes/Contracts.route.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(route); 

export default app;