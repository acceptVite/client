# acceptVite Client 💸
### A library for handling acceptVite callbacks.

> This library creates a web server to handle acceptVite back-end callbacks and gives an easy way to integrate with projects.

## Usage
```JS
const acceptViteHandler = require('./')

const handler = new acceptViteHandler(2555, () => {
  console.log('Listening payment gateway!')
})

handler.on('callback', (data) => {
  console.log('Callback executed!', data)
})
```

## How-to use
Please check our main repo.
