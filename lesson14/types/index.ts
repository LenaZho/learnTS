export interface Joke {
    id: number;
    setup: string;
    punchline: string;
    type: string;
}

export interface ApiResponse<T> {
    status: number;
    data: T;
}

export interface ErrorResponse {
    type: 'error';
    message: string;
}
