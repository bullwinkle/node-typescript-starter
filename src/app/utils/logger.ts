function log (name: string, ...data: any[]): void {
  return console.log(`${(new Date()).toLocaleTimeString('ru')} [${name.toUpperCase()}]:`, ...data);
}

export function createLogger (name: string): typeof log {
  return log.bind(undefined, name);
}
