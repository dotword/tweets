import getPool from "../../db/getPool.js";
import generateErrorsUtils from "../../utils/generateErrorUtils.js";

const displaySingleTweetService = async (id) => {
    
    const pool = await getPool();

    const [result] = await pool.query(`
        SELECT * FROM tweets WHERE id = ?
    `, [id]);

    if(result.length === 0) throw generateErrorsUtils('Este tweet no existe', 409);


    //Devolver la id
    return result[0];
}

export default displaySingleTweetService;