import getPool from "../../db/getPool.js";

const getAllTweets = async () => {

    const pool = await getPool();

    const [result] = await pool.query(`SELECT * FROM tweets ORDER BY createdAt DESC`);

    return result;
}

export default getAllTweets;