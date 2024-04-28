import getPool from "../../db/getPool.js";

const createTweetService = async (userId, text, image = '') => {
    const pool = await getPool();

    const [result] = await pool.query(`
        INSERT INTO tweets (userId, text, image) VALUES (?, ?,? )
    `, [userId, text, image]);

    return result.insertId;
}

export default createTweetService;