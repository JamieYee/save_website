import { createServer } from 'node:http'
import avatar from '../api/avatar.mjs'
import checkVersion from '../api/check-version.mjs'

const handlers = new Map([
  ['/api/avatar', avatar],
  ['/api/check-version', checkVersion],
])

const server = createServer(async (req, res) => {
  const url = new URL(req.url, 'http://127.0.0.1')
  const handler = handlers.get(url.pathname)
  if (!handler || req.method !== 'GET') {
    res.writeHead(404).end('Not Found')
    return
  }

  req.query = Object.fromEntries(url.searchParams)
  res.status = (code) => {
    res.statusCode = code
    return res
  }
  res.json = (value) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.end(JSON.stringify(value))
    return res
  }
  res.send = (value) => {
    res.end(value)
    return res
  }

  try {
    await handler(req, res)
  } catch (error) {
    console.error(error)
    if (!res.headersSent) res.writeHead(500)
    res.end('Internal Server Error')
  }
})

server.listen(3000, '127.0.0.1', () => {
  console.log('Local APIs: http://127.0.0.1:3000/api/')
})
