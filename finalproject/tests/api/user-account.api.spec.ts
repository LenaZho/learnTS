import { test, expect } from '@playwright/test';
import { ApiHelper } from '../../utils/apiHelper';
import { generateRandomUser } from '../../test-data/testdata';

test.describe('User Account API Tests', () => {
    let apiHelper: ApiHelper;

    test.beforeEach(async ({ request }) => {
        apiHelper = new ApiHelper(request);
    });

    test('Create new user account', async () => {
        const userData = generateRandomUser();
        
        const response = await apiHelper.post('/createAccount', userData);
        await apiHelper.verifyStatusCode(response, 200);
        
        const body = await apiHelper.getResponseBody(response);
        expect(body.responseCode).toBe(201);
        expect(body.message).toBe('User created!');
    });

    test('No email duplication', async () => {
        const userData = generateRandomUser();
        
        await apiHelper.post('/createAccount', userData);
        
        const response = await apiHelper.post('/createAccount', userData);
        const body = await apiHelper.getResponseBody(response);
        
        expect(body.responseCode).toBe(400);
        expect(body.message).toBe('Email already exists!');
    });

    test('Delete user account', async () => {
        const userData = generateRandomUser();
        
        await apiHelper.post('/createAccount', userData);
        
        const deleteData = {
            email: userData.email,
            password: userData.password
        };
        
        const response = await apiHelper.delete('/deleteAccount', deleteData);
        await apiHelper.verifyStatusCode(response, 200);
        
        const body = await apiHelper.getResponseBody(response);
        expect(body.responseCode).toBe(200);
        expect(body.message).toBe('Account deleted!');
    });
});
