import getPool from "../../db/getPool.js";
import generateErrorsUtils from "../../utils/generateErrorUtils.js";

const getUserByIdService = async (id) => {

    const pool = await getPool();

    const [user] = await pool.query(`
        SELECT id, email, createdAt FROM users WHERE id = ?
    `, [id]);

    if(user.length === 0 ) throw generateErrorsUtils('No existe ningún usuario con ese id', 404);

    return user[0];
}

export default getUserByIdService;
