import { log } from './utils/logger';

export class App {
  interval: NodeJS.Timeout | null = null;

  start (): void {
    log('start!');

    this.interval = setInterval(() => {
      log('5 seconds passed');
    }, 5000);
  }
}
