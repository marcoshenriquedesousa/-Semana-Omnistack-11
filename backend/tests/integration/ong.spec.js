const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAD",
            email: "apad@email.com",
            whatsapp: "1234567891",
            city: "Rio de janeiro",
            uf: "SC"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

    });

    it('GET/Profile', async ()=> {
        const response = await request(app)
        .get('/profile')
        .set('authorization', '4fcfe320')
        .expect('Content-Type', /json/)
        .expect(200);
    });
})