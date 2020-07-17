const { Platform } = require("./paltform");
const cp = require("child_process");

class Shutdown {
	currentPlatform;
	constructor() {
		this.currentPlatform = new Platform();
	}
	initShutdown() {
		return new Promise((resolve, reject) => {
			let shutdownCommand = this.getCommandShutdownCommand();
			cp.exec(shutdownCommand, function (err, stdout, stderr) {
				if (err) return reject(err.message);
				resolve("Shutting Down");
			});
		});
	}
	getCommandShutdownCommand() {
		switch (this.currentPlatform.platform.toLowerCase()) {
			case "darwin":
			case "linux":
				return "sudo shutdown -h now";
			case "win32":
				return "shutdown -s -t 0";
		}
		return false;
	}
}

