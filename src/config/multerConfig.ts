/* eslint-disable object-shorthand */
/* eslint-disable comma-dangle */
import multer from 'multer';
import path from 'path';

export const storage = multer.diskStorage({
    destination: (_req, _file, callback) => callback(null, '../uploads/'),
    filename: (_req, file, callback) => {
        const uniqueName = `${Date.now()}-${Math.round(
            Math.random() * 100000000
        )}${path.extname(file.originalname)}`;

        callback(null, uniqueName);
    },
});

export const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 * 100 },
}).single('myfile');
