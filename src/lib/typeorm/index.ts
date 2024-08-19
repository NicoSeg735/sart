import { AppDataSource } from './data-source'

let isInitialized = false

export async function initializeDatabase() {
  if (isInitialized) {
    return AppDataSource
  }

  try {
    await AppDataSource.initialize()
    isInitialized = true
    console.info('Database initialized')
    return AppDataSource
  } catch (error) {
    console.error('Error during data source initialization:', error)
    throw error // Re-throw the error to handle it in the calling function
  }
}
