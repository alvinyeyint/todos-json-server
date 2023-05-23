const jsonServer = require('json-server')
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = lowdb(adapter);

const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()

const PORT = 3001
const DELAY = 300

server.use(middlewares)

server.use((req, res, next) => {
  setTimeout(() => {
    next()
  }, DELAY)
})

server.use(router)

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})
