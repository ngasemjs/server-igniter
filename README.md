# server-igniter
NgasemJS igniter

## What is this?
This is part of NgasemJS framework that initialize all procedures
and setting up the project.

## How to use it?
### Installation
Run this command in your node project:
```bash
npm install --save @ngasemjs/server-igniter
```

### Register Project Directory
To register directory of the project, let's create file
called `server.js` and put this code.
```javascript
const { Igniter } = require('@ngasemjs/server-igniter');

Igniter
  .register(__dirname)
  .listen(() => console.log('RPC server has been started'))
  .catch(console.log);
```

Run this file using `node server.js` command.

It will be display an error until directory called `procedure` created.
