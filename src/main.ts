import { pool } from './config/database.js'

async function start() {
  try {
    const [rows] = await pool.query('SELECT NOW() AS now');
    console.log('Conectado com sucesso:', rows);
  } catch (err) {
    console.error('Erro na conexão:', err);
  }
}

start()