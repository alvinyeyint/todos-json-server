import jsonServer from 'json-server';
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

// Configure lowdb to write data to JSON file
const adapter = new JSONFile('./db.json')
const defaultData = { todos: [] }
const db = new Low(adapter, defaultData)

const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
