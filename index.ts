import { Platform } from "./platform.js";
import { exec } from "child_process";

type Time = {
	sec?: number;
	min?: number;
	hour?: number;
};

export class Shutdown {
	currentPlatform: Platform;

	constructor() {
		this.currentPlatform = new Platform();
	}

	scheduleShutdown(time: Time) {
		if (time.sec === undefined) time.sec = 0;
		if (time.min === undefined) time.min = 0;
		if (time.hour === undefined) time.hour = 0;

		let delayTime =
			time.sec * 1000 + time.min * 60 * 1000 + time.hour * 60 * 60 * 10000;

		setTimeout(() => {
			this.initShutdown().then(() => {
				console.log("Shutting Down");
			});
		}, delayTime);

		console.log(
			`Shutdown scheduled for  ${time.hour} hour ${time.min} min ${time.sec} sec  `
		);
	}

	initShutdown = () => {
		return new Promise((resolve, reject) => {
			let shutdownCommand = this.getCommandShutdown();
			exec(shutdownCommand, function (err, stdout, stderr) {
				if (err) return reject(err.message);
				resolve(null);
			});
		});
	}
	
	getCommandShutdown() {
		switch (this.currentPlatform.platform.toLowerCase()) {
			case "linux":
				return "sudo shutdown -h now";
			case "win32":
				return "shutdown -s -t 0";
			default:
				throw new Error("Platform not supported");
		}
	}
}