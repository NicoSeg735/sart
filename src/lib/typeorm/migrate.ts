import { execSync } from 'child_process'

const args = process.argv.slice(2)
const nameArgIndex = args.indexOf('--name')

if (nameArgIndex === -1 || !args[nameArgIndex + 1]) {
  console.error(
    'Error: Debes proporcionar un nombre para la migración usando --name'
  )
  process.exit(1)
}

const migrationName = args[nameArgIndex + 1]
const command = `pnpm typeorm migration:create src/lib/typeorm/migrations/${migrationName}`

try {
  execSync(command, { stdio: 'inherit' })
} catch (error: any) {
  console.error('Error ejecutando el comando:', error.message)
  process.exit(1)
}
