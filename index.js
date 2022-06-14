const http = require('http')
const { EventEmitter } = require('events')

module.exports = class acceptViteHandler extends EventEmitter {
  constructor (port, readyCallback) {
    super()

    this._callbackServer = http.createServer(this._handleRequest)
    this._callbackServer.listen(port)

    if (typeof readyCallback === 'function') readyCallback()
  }

  async _handleRequest (req, res) {
    let body = ''

    req.on('data', function(data) {
      body += data.toString()
    })

    req.on('end', () => {
      this.emit('callback', JSON.parse(body))

      res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'version': 'v1.0'
      })

      res.end()
    })
  }
}
