require('module-alias/register');

import express, { Application } from 'express';

import dotenvFlow from 'dotenv-flow';

dotenvFlow.config();

export class ServerUp {
  app: Application;

  constructor() {
    this.app = express();
    const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

    const environment = process.env.NODE_ENV || 'development';

    this.app.get('/', (req, res) => {
      res.send(`Hello from ${environment} environment!`);
    });

    this.app.listen(port, () => {
      console.log(`[${environment}] Server running at http://localhost:${port}`);
    });
  }
}
