import * as fs from 'fs';
import * as path from 'path';

import { DelaySimulator } from './DelayerSimulator';

class JsonFileReader {
  delayer: DelaySimulator;

  constructor(delayer: DelaySimulator) {
    this.delayer = delayer;
  }

  async readData<T>(filePath: string) {
    try {
      await this.delayer.simulateDelay();
      const filePathWithFolderPath = path.join(process.cwd(), 'db', filePath);
      const data = fs.readFileSync(filePathWithFolderPath, 'utf8');
      return JSON.parse(data) as T[];
    } catch (e) {
      console.error(e);
    }
  }
}

export const Database = new JsonFileReader(new DelaySimulator());
