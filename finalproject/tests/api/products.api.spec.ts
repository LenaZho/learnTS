import { test, expect } from '@playwright/test';
import { ApiHelper } from '../../utils/apiHelper';

test.describe('Products API Tests', () => {
    let apiHelper: ApiHelper;

    test.beforeEach(async ({ request }) => {
        apiHelper = new ApiHelper(request);
    });

    test('Get all products', async () => {
        const response = await apiHelper.get('/productsList');
        await apiHelper.verifyStatusCode(response, 200);
        
        const body = await apiHelper.getResponseBody(response);
        expect(body.responseCode).toBe(200);
        expect(body.products).toBeDefined();
        expect(body.products.length).toBeGreaterThan(0);
    });

    test('No POST method to products list', async () => {
        const response = await apiHelper.post('/productsList');
        await apiHelper.verifyStatusCode(response, 200);
        
        const body = await apiHelper.getResponseBody(response);
        expect(body.responseCode).toBe(405);
        expect(body.message).toBe('This request method is not supported.');
    });

    test('should get all brands', async () => {
        const response = await apiHelper.get('/brandsList');
        await apiHelper.verifyStatusCode(response, 200);
        
        const body = await apiHelper.getResponseBody(response);
        expect(body.responseCode).toBe(200);
        expect(body.brands).toBeDefined();
        expect(body.brands.length).toBeGreaterThan(0);
    });

    test('Search for products', async () => {
        const searchData = { search_product: 'top' };
        
        const response = await apiHelper.post('/searchProduct', searchData);
        await apiHelper.verifyStatusCode(response, 200);
        
        const body = await apiHelper.getResponseBody(response);
        expect(body.responseCode).toBe(200);
        expect(body.products).toBeDefined();
    });

    test('Return error on missing search parameter', async () => {
        const response = await apiHelper.post('/searchProduct');
        await apiHelper.verifyStatusCode(response, 200);
        
        const body = await apiHelper.getResponseBody(response);
        expect(body.responseCode).toBe(400);
    });
});
