import request from 'supertest';
import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

describe('GET /', () => {
  it('should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello World!');
  });
});
