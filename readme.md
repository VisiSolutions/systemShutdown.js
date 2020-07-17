# Shutdown_Computer

> Run program using `sudo` or admin premission on Windows
> Shutdown Computer on any platform.

## Install

```
$ npm install shutdown_computer
```

## Usage

```js
let Shutdown = reuquire("shutdown_computer");
let s = new Shutdown();
async function shutdown() {
  try {
    await s.initShutdown();
  } catch (err) {
    console.error(err);
  }
}

// OR Scheduale the Shutdown
s.schedualeShutdown({ sec: 10, min: 0, hour: 0 });
// You may pass in any combination of the time unit

// For Example
s.schedualeShutdown({ sec: 10, min: 1 });
// OR
s.schedualeShutdown({ hour: 1 });
```
