require('dotenv').confgi();

export const corsOptions = {
    origin: [...process.env.ALLOWED_CLIENTS.split(',')],
};
