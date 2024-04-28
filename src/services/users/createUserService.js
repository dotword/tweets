import bcrypt from 'bcrypt';
import getPool from "../../db/getPool.js";
import generateErrorsUtils from "../../utils/generateErrorUtils.js";

const createUserService = async (email, password) => {
    
    const pool = await getPool();

    //Comprobar que no exista otro user con ese email
    const [user] = await pool.query(`
        SELECT id FROM users WHERE email = ?
    `, [email]);

    if(user.length) throw generateErrorsUtils('Ya existe un usuario con ese email', 409);

    //Encriptar password
    const passwordHash = await bcrypt.hash(password, 8);

    //Crear usuario
    const [newUser] = await pool.query(`
        INSERT INTO users (email, password) VALUES (?, ?)
    `, [email, passwordHash]);

    //Devolver la id
    return newUser.insertId;
        
}

export default createUserService;