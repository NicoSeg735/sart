import { execSync } from 'child_process'

const args = process.argv.slice(2)

if (args.length === 0) {
  console.error(
    'Error: Debes proporcionar un nombre para la migración entre comillas dobles'
  )
  process.exit(1)
}

const migrationName = args.join(' ').toLowerCase().replace(/ /g, '-')
const command = `pnpm typeorm migration:create src/lib/typeorm/migrations/${migrationName}`

try {
  execSync(command, { stdio: 'inherit' })
} catch (error: any) {
  console.error('Error ejecutando el comando:', error.message)
  process.exit(1)
}
