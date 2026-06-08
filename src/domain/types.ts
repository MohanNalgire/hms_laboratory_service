export type LabTestPayload = {
  visit_id: string;
  test_name: string;
  category: string;
  status: 'pending' | 'in-progress' | 'completed';
  results?: string;
};