import { resolveMigrationsDir, runMigrations } from '@hms/platform';
import { connectPostgres, getPool } from './postgres.js';

export async function bootstrapDatabase(importMetaUrl: URL | string): Promise<void> {
  await connectPostgres();
  const pool = getPool();
  const url = typeof importMetaUrl === 'string' ? importMetaUrl : importMetaUrl.href;
  await runMigrations(pool, resolveMigrationsDir(url));
}