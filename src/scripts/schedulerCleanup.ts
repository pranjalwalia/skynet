import { File } from '../models/File';
import * as fs from 'fs';
import { dbConnection } from '../db/connection';

dbConnection();

export const fetchFiles = async (): Promise<void> => {
    // this date now is 24 hours old
    const pastDate = new Date(Date.now() - 24 * 60 * 60 * 1000);

    //* fetch files older than 24 hours
    const files: Array<any> = await File.find({
        createdAt: { $lt: pastDate }, // select doc with createdAt < pastDate
    });

    //* delete them in order
    if (files.length) {
        for (const file of files) {
            try {
                fs.unlinkSync(file.path);
                await file.remove();
                console.log(`successfully deleted ${file.filename}`);
            } catch (err) {
                console.log(`Error while deleting file: ${err}`);
            }
        }
    }
    console.log('cleanup complete !');
};

fetchFiles().then((): void => {
    process.exit();
});
