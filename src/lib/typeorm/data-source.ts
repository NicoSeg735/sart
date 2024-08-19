import 'reflect-metadata'

import { DataSource } from 'typeorm'

import { User } from './entities'
import { Initial1724103161428 } from './migrations/1724103161428-initial'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './data/db.sqlite',
  synchronize: process.env.NODE_ENV === 'development',
  logging: false,
  entities: [User],
  migrations: [Initial1724103161428],
  subscribers: []
})
