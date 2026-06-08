import type { LabTestPayload } from '../domain/types.js';

export class LabTestRepository {
  constructor(private pool: any) {}

  async create(payload: LabTestPayload): Promise<string> {
    const result = await this.pool.query(
      'INSERT INTO lab_tests (visit_id, test_name, category, status, results) VALUES ($1, $2, $3, $4, $5) RETURNING id',
      [payload.visit_id, payload.test_name, payload.category, payload.status, payload.results]
    );
    return result.rows[0].id;
  }
}