import * as fs from 'fs';

const path = './dist/';

describe('build `dist` before running server', () => {
    it('folder `dist` exists', () => {
        expect(fs.existsSync(path)).toBeTruthy();
    });

    it('server binary must exist before execution', () => {
        expect(`${fs.existsSync(path)}/server.js`).toBeTruthy();
    });

    it('App binary must exist before execution', () => {
        expect(`${fs.existsSync(path)}/server.js`).toBeTruthy();
    });
});
