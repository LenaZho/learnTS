import { test, expect } from '@playwright/test';
import { ApiHelper } from '../../utils/apiHelper';
import { generateRandomUser } from '../../test-data/testdata';

test.describe('Authentication API Tests', () => {
    let apiHelper: ApiHelper;

    test.beforeEach(async ({ request }) => {
        apiHelper = new ApiHelper(request);
    });

    test('Verify login with valid credentials', async () => {
        const userData = generateRandomUser();
        
        // Create user first
        await apiHelper.post('/createAccount', userData);
        
        const loginData = {
            email: userData.email,
            password: userData.password
        };
        
        const response = await apiHelper.post('/verifyLogin', loginData);
        await apiHelper.verifyStatusCode(response, 200);
        
        const body = await apiHelper.getResponseBody(response);
        expect(body.responseCode).toBeDefined();
    });

    test('Return error on email is missing', async () => {
        const loginData = {
            password: 'password123'
        };
        
        const response = await apiHelper.post('/verifyLogin', loginData);
        await apiHelper.verifyStatusCode(response, 200);
        
        const body = await apiHelper.getResponseBody(response);
        expect(body.responseCode).toBe(400);
        expect(body.message).toContain('Bad request');
    });

    test('Return error on password is missing', async () => {
        const userData = generateRandomUser();
        
        const loginData = {
            email: userData.email
        };
        
        const response = await apiHelper.post('/verifyLogin', loginData);
        await apiHelper.verifyStatusCode(response, 200);
        
        const body = await apiHelper.getResponseBody(response);
        expect(body.responseCode).toBe(400);
    });

    test('No support of DELETE method', async () => {
        const userData = generateRandomUser();
        
        const loginData = {
            email: userData.email,
            password: userData.password
        };
        
        const response = await apiHelper.delete('/verifyLogin', loginData);
        await apiHelper.verifyStatusCode(response, 200);
        
        const body = await apiHelper.getResponseBody(response);
        expect(body.responseCode).toBe(405);
    });
});
