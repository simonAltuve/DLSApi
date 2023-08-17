const express= require('express');
const container = require('../src/startup/container');
const router = container.resolve("router");
const request = require('supertest');

const _express = express().use(router);


describe("Endpoints /home", () => {

    test("should respond a json object", async () => {
        
        const response = await request(_express).get('/v1/apisa/home').send();
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject({'message': 'API Simon Altuve'});

    });
});