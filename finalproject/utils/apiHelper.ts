import { APIRequestContext, expect, APIResponse } from '@playwright/test';

export class ApiHelper {
    public request: APIRequestContext;
    public baseURL = 'https://automationexercise.com/api';

    public constructor(request: APIRequestContext) {
        this.request = request;
    }

    public async get(endpoint: string) {
        return await this.request.get(this.baseURL + endpoint);
    }

    public async post(endpoint: string, data?: any) {
        const formData = new URLSearchParams();
        
        if (data) {
            for (const key in data) {
                formData.append(key, data[key]);
            }
        }

        return await this.request.post(this.baseURL + endpoint, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: formData.toString()
        });
    }

    public async delete(endpoint: string, data?: any) {
        const formData = new URLSearchParams();
        
        if (data) {
            for (const key in data) {
                formData.append(key, data[key]);
            }
        }

        return await this.request.delete(this.baseURL + endpoint, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: formData.toString()
        });
    }

    public async verifyStatusCode(response: APIResponse, expectedStatusCode: number) {
        expect(response.status()).toBe(expectedStatusCode);
    }

    public async getResponseBody(response: APIResponse) {
        return await response.json();
    }
}
