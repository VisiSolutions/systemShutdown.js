export class Platform {
	platform;
	constructor() {
		this.platform = process.platform;
	}
	getCurrentPlatform() {
		return this.platform;
	}
}
