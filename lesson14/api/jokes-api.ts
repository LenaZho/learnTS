import ApiService from '../services/api-service';
import { Joke, ApiResponse } from '../types';

class JokesApi {
    private apiService: ApiService;

    public constructor(baseUrl = 'https://official-joke-api.appspot.com') {
        this.apiService = new ApiService(baseUrl);
    }

    public async ping(): Promise<ApiResponse<string>> {
        return this.apiService.get<string>('/ping');
    }

    public async getRandomJoke(): Promise<ApiResponse<Joke>> {
        return this.apiService.get<Joke>('/jokes/random');
    }

    public async getTenJokes(): Promise<ApiResponse<Joke[]>> {
        return this.apiService.get<Joke[]>('/jokes/ten');
    }

    public async getJokeTypes(): Promise<ApiResponse<string[]>> {
        return this.apiService.get<string[]>('/types');
    }

    public async getDadJoke(): Promise<ApiResponse<Joke | Joke[]>> {
        return this.apiService.get<Joke | Joke[]>('/jokes/dad/random');
    }

    public async getJokeById(id: number): Promise<ApiResponse<Joke>> {
        return this.apiService.get<Joke>(`/jokes/${id}`);
    }
}

export default JokesApi;
