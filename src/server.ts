import { app } from './main';
import * as http from 'http';
import { dbConnection } from './db/connection';

//* dbConnection
dbConnection();

//* Listener
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, (): void => console.log(`server running on port:${port}`));
