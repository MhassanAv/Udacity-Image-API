import supertest from 'supertest';
import app from '../../app';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('gets the api endpoint for the main route', async function(): Promise<
    void
  > {
    const response = await request.get('/');
    expect(response.status).toEqual(404); //no filename
  });
});
