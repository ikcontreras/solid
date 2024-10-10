declare namespace NodeJS {
    interface ProcessEnv {
        PORT?: string;
        API_KEY: string;
        NODE_ENV: 'development' | 'production' | 'test';
    }
}