# Shutdown_Computer

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

