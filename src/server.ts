import { dbConnection } from './db/connection';
import { app } from './main';

//* server
dbConnection();
const port = process.env.PORT || 3000;
app.listen(port, (): void => console.log(`server running on port:${port}`));
