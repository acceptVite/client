const { EventEmitter } = require('events')
const http = require('http')

class WebServer extends EventEmitter {
  constructor(port) {
    super()

    const requestListener = async (req, res) => {
      let body = ''

      req.on('data', function(data) {
        body += data.toString()
      })

      req.on('end', () => {
        this.emit('request', JSON.parse(body))

        res.writeHead(200, {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'version': 'v1.0'
        })

        res.end()
      })
    }
    
    const serverObject = http.createServer(requestListener)
    serverObject.listen(port)
  }
}


const webServer = new WebServer(1270)

webServer.on('request', (data) => {
  console.log(data)
})