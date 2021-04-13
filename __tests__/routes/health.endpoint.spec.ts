import { app } from '../../src/main';
const request = require('supertest');

describe('server is alive in production', () => {
    it('api test', () => {
        const expected = { alive: 'true' };
        request(app)
            .get('/')
            .expect(200)
            .expect('Content-Type', /application\/json/)
            .end((err, res) => {
                expect(err).toEqual(null);
                expect(res.body).toHaveProperty(Object.keys(expected));
            });
    });
});
