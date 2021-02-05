import { execFileSync as _execSync } from 'child_process'

export const execSync = (cwd: string, command: string[]) =>
  _execSync(command[0], command.slice(1), { cwd, env: process.env })
