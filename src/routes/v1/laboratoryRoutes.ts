import type { Express, Request, Response } from 'express';

import { ROUTE_BASE, SERVICE_NAME } from '../config.js';

export function registerLaboratoryRoutes(app: Express) {
  const base = ROUTE_BASE.replace(/\/+$/g, '');

  app.get(base, async (req: Request, res: Response) => {
    res.status(200).json({ success: true, service: SERVICE_NAME, status: 'healthy' });
  });

  app.get(`${base}/health`, async (req: Request, res: Response) => {
    res.status(200).json({ success: true, service: SERVICE_NAME, timestamp: new Date().toISOString() });
  });
}