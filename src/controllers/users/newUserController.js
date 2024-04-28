import generateErrorsUtils from "../../utils/generateErrorUtils.js";
import createUserService from "../../services/users/createUserService.js";

const newUserController = async (req, res, next) => {

    try {
        
        const { email, password } = req.body;

        if(!email || !password) throw generateErrorsUtils('Debes incresar un email y una contraseña', 400);

        const id = await createUserService(email, password);

        res.send({
            status: 'ok',
            message: `Usuario con id:${id} creado correctamente`
        });
        
    } catch (error) {
        next(error);
    }

}

export default newUserController;