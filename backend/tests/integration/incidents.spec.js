const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Incidents', () => {
    beforeEach( async ()=> {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('POST/incidents', async () => {
        const response = await request(app)
        .post('/incidents')
        .set('authorization', '4fcfe320')
        .send({
            title: "caso 1",
            description: "Detalhes do caso",
            value: 150
        });

        console.log(response.body);

        expect(response.body).toHaveProperty('id');
    });

    it('GET/incidents', async ()=> {
        const response = await request(app)
        .get('/incidents')
        .expect('Content-Type', /json/)
        .expect(200);
    });

})