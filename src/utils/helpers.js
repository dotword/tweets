import fs from 'fs/promises';

const createPathIfNotExist = async (path) => {
    try {
        await fs.access(path);
    } catch {
        await fs.mkdir(path);
    }
}

export {createPathIfNotExist};