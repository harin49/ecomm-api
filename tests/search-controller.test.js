//create a test suite for the search controller
Path: tests/search-controller.test.js  
const request = require('supertest');  
const app = require('../app');

describe('Search Controller', () => {
    it('should return 200 status code and search results', async () => {
        const response = await request(app).get('/search?query=product');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('results');
    });
    it('should return 500 status code and error message', async () => {
        const response = await request(app).get('/search?query=');
        expect(response.statusCode).toBe(500);
        expect(response.body).toHaveProperty('error');
    });
});

//create a test suite for the index controller

describe('Index Controller', () => {
    it('should return 200 status code and success message', async () => {
        const response = await request(app).post('/index').send({
            title: 'Product',
            content: 'Product description'
        });
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message');
    });
    it('should return 500 status code and error message', async () => {
        const response = await request(app).post('/index').send({
            title: '',
            content: ''
        });
        expect(response.statusCode).toBe(500);
        expect(response.body).toHaveProperty('error');
    });
});
