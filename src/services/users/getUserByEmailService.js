import getPool from "../../db/getPool.js";
import generateErrorsUtils from "../../utils/generateErrorUtils.js";

const getUserByEmailService = async (email) => {

    const pool = await getPool();

    const [user] = await pool.query(`
        SELECT * FROM users WHERE email = ?
    `, [email]);

    if(user.length === 0 ) throw generateErrorsUtils('No existe ningún usuario con ese email', 404);

    return user[0];
}

export default getUserByEmailService;
