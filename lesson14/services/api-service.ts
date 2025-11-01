import fetch, { Response } from 'node-fetch';
import { ApiResponse } from '../types';

class ApiService {
    private baseUrl: string;

    public constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public async get<T>(endpoint: string): Promise<ApiResponse<T>> {
        const url = `${this.baseUrl}${endpoint}`;
        const response: Response = await fetch(url);

        const contentType = response.headers.get('content-type');
        let data: T;

        if (contentType && contentType.includes('application/json')) {
            data = await response.json() as T;
        } else {
            data = await response.text() as unknown as T;
        }

        return {
            status: response.status,
            data: data
        };
    }
}

export default ApiService;
