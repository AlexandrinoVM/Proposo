import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
import { Sequelize } from 'sequelize-typescript'
import { Contracts } from '../models/contract.db.model.js'
import { Templates } from '../models/templates.db.model.js'


dotenv.config()

export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'database',
    models:[Contracts,Templates],
    logging:false,
    define: {
    timestamps: true,
    underscored: true,
  }
})
