const request = require('supertest');
const app = require('../src/app');

describe('API Endpoints', () => {
  test('GET / returns 200 and message "Gated CI Pipeline API"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Gated CI Pipeline API' });
  });

  test('GET /health returns 200 and status "OK"', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'OK' });
  });
});
