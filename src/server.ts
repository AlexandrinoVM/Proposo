import { sequelize } from './config/database.js';
import app from './main.js';

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});

async function start() {
  try {
    await sequelize.sync({ alter: true }); // cuidado com alter em produção
    console.log('🟢 Database connected and synchronized');
  } catch (err) {
    console.error('🔴 Cannot connect to the database:', err);
  }
}

start();