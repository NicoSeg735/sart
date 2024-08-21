import 'reflect-metadata'

import { DataSource } from 'typeorm'

import {
  Appointment,
  Client,
  Employee,
  Mechanic,
  TechnicalDirector,
  User,
  Vehicle
} from './entities'

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [
    User,
    Mechanic,
    Appointment,
    Employee,
    Client,
    Vehicle,
    TechnicalDirector
  ],
  subscribers: [],
  migrations: []
})
