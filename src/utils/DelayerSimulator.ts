export class DelaySimulator {
  maxDelay = 500;
  minDelay = 3000;

  simulateDelay(): Promise<void> {
    const delay = Math.floor(Math.random() * (this.maxDelay - this.minDelay + 1)) + this.minDelay;
    return new Promise((resolve) => setTimeout(resolve, delay));
  }
}
