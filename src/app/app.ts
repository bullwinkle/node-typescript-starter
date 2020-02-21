import { sharedFn } from "./shared";

export class App {
	start (): void {
		console.warn(sharedFn());
	}
}
