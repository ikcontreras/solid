import express, { Application } from 'express';
import dotenvFlow from 'dotenv-flow';

dotenvFlow.config();

const app: Application = express();
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const environment = process.env.NODE_ENV || 'development';

app.get('/', (req, res) => {
    res.send(`Hello from ${environment} environment!`);
});

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(port, () => {
    console.log(`[${environment}] Server running at http://localhost:${port}`);
});