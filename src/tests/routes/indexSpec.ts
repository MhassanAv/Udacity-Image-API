import supertest from "supertest";
import routes from './../../routes/index'

const request = supertest(routes)

describe('Test endpoint responses', () => {
    it('gets the api endpoint for the main route', async function ():Promise<void> {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    }
    )
});