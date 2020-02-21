export function log (str: string): void {
	return console.log(`${(new Date()).toLocaleTimeString('ru')} [APP]:`, str);
}
