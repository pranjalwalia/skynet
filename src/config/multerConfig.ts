/* eslint-disable object-shorthand */
/* eslint-disable comma-dangle */
import multer from 'multer';
import path from 'path';

export const storage: multer.StorageEngine = multer.diskStorage({
    destination: (_req, _file, callback): void => callback(null, 'uploads/'),
    filename: (_req, file, callback): void => {
        const uniqueName = `${Date.now()}-${Math.round(
            Math.random() * 100000000
        )}${path.extname(file.originalname)}`;
        callback(null, uniqueName);
    },
});

export const multiPartFormHandler = multer({
    storage,
    limits: { fileSize: 1000000 * 100 }, //100mb
}).single('myfile'); // multipart form field
