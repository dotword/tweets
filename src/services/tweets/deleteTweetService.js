import getPool from "../../db/getPool.js";
import generateErrorsUtils from "../../utils/generateErrorUtils.js";

const deleteTweetService = async (id) => {
    const pool = await getPool();

    await pool.query(`
        DELETE FROM tweets WHERE id = ?
    `, [id]);

    //Devolver la id
    return;
}

export default deleteTweetService;