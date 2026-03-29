import { spawn } from 'child_process';

const procs = [];

function run(command, args, label) {
  const child = spawn(command, args, {
    stdio: 'inherit',
    shell: true,
  });

  child.on('exit', (code) => {
    if (code && code !== 0) {
      console.log(`[${label}] exited with code ${code}`);
      shutdown(code);
    }
  });

  procs.push(child);
}

function shutdown(exitCode = 0) {
  for (const proc of procs) {
    if (!proc.killed) {
      proc.kill();
    }
  }
  process.exit(exitCode);
}

run('npm', ['run', 'dev:api'], 'api');
run('npm', ['run', 'dev:client'], 'client');

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));
