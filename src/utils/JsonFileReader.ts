import * as fs from 'fs';
import * as path from 'path';

import { DelaySimulator } from './DelayerSimulator';
import { Database } from '../core/database.interface';

class JsonFileReader implements Database {
  delayer: DelaySimulator;

  constructor(delayer: DelaySimulator) {
    this.delayer = delayer;
  }

  async readData<T>(table: string) {
    try {
      await this.delayer.simulateDelay();
      const filePathWithFolderPath = path.join(process.cwd(), 'db', table);
      const data = fs.readFileSync(filePathWithFolderPath, 'utf8');
      return JSON.parse(data) as T[];
    } catch (e) {
      console.error(e);
    }
  }
}

export const MockDatabase = new JsonFileReader(new DelaySimulator());
