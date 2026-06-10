import { createPostgresClient } from '@hms/platform';

import { DATABASE_NAME } from '../config.js';

const client = createPostgresClient(DATABASE_NAME);

export const connectPostgres = () => client.connect();
export const getPool = () => client.getPool();
export const checkPostgresHealth = () => client.checkHealth();
export const closePostgres = () => client.close();