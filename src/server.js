import jsonServer from 'json-server';
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configure lowdb to write data to JSON file
const adapter = new JSONFile(`${__dirname}/db.json`)
const defaultData = { todos: [] }
const db = new Low(adapter, defaultData)

const server = jsonServer.create();
const router = jsonServer.router(`${__dirname}/db.json`);
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
