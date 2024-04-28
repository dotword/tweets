import getPool from "./getPool.js";

const initDB = async () => {

    let pool; 

    try {
        pool = await getPool();

        console.log('Borrando tablas...');

        await pool.query(
            'DROP TABLE IF EXISTS tweets, users'
        );

        console.log('Creando tablas...');

        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
                email VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(100) NOT NULL,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `);

        await pool.query(`
        CREATE TABLE IF NOT EXISTS tweets (
            id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
            userId INT NOT NULL,
            text VARCHAR(280) NOT NULL,
            image VARCHAR(100),
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, 
            FOREIGN KEY (userId) REFERENCES users(id)
        )
     `);
      
    } catch (error) {
        console.log(error);

    } finally {

        if(pool) pool.release;
        process.exit();

    }
}


initDB();