import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import getUserByEmailService from "../../services/users/getUserByEmailService.js";
import generateErrorsUtils from "../../utils/generateErrorUtils.js";

const loginUserController = async (req, res, next) => {
    try {

        const {email, password} = req.body;

        if(!email || ! password) throw generateErrorsUtils('Tienes que introducir un email y una contraseña', 400)

        // Recojo los datos del usuario con ese email de la DB
        const user = await getUserByEmailService(email);

        //Compruebo que las contraseña coinciden
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) throw generateErrorsUtils('La contraseña no coincide', 401);

        //Creo el payload del token
        const payload = {id: user.id};
        
        //Firmo el token
        const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: '30d',
        });

        //Envio el token
        res.send({
            status: 'ok',
            data: token
        });
        
    } catch (error) {
        next(error);
    }
}

export default loginUserController;