const { Platform } = require("./paltform");
const cp = require("child_process");
function Shutdown() {
  this.currentPlatform = new Platform();

  this.schedualeShutdown = (time) => {
    if (time.sec === undefined) time.sec = 0;
    if (time.min === undefined) time.min = 0;
    if (time.hour === undefined) time.hour = 0;

    let delayTime =
      time.sec * 1000 + time.min * 60 * 1000 + time.hour * 60 * 60 * 10000;

    setTimeout(() => {
      this.initShutdown();
    }, delayTime);

    console.log(
      `Shutdown schedualed for  ${time.hour} hour ${time.min} min ${time.sec} sec  `
    );
  };

  this.initShutdown = () => {
    return new Promise((resolve, reject) => {
      let shutdownCommand = this.getCommandShutdown();
      cp.exec(shutdownCommand, function (err, stdout, stderr) {
        if (err) return reject(err.message);
        resolve("Shutting Down");
      });
    });
  };
  this.getCommandShutdown = () => {
    switch (this.currentPlatform.platform.toLowerCase()) {
      case "darwin":
      case "linux":
        return "sudo shutdown -h now";
      case "win32":
        return "shutdown -s -t 0";
    }
    return false;
  };
}

module.exports.Shutdown = Shutdown;
