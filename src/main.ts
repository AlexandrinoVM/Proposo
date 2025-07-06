import { pool } from './config/database.js'

import { ContractController } from './controllers/contract.controller.js';

ContractController.generate({
  clientName: 'João da Silva',
  serviceName: 'Desenvolvimento Web',
  value: 2500,
  dueDate: '2025-07-15'
});



// async function start() {
//   try {
//     const [rows] = await pool.query('SELECT NOW() AS now');
//     console.log('Conectado com sucesso:', rows);
//   } catch (err) {
//     console.error('Erro na conexão:', err);
//   }
// }

// start()