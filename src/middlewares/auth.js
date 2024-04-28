import jwt from 'jsonwebtoken';
import generateErrorsUtils from "../utils/generateErrorUtils.js";

const authUser = (req, res, next) => {

    try {
        const {authorization} = req.headers;

        if(!authorization) throw generateErrorsUtils('Falta la cabecera de Authorization', 401);

        let token;

        try {
            token = jwt.verify(authorization, process.env.SECRET);
        } catch {
            throw generateErrorsUtils('Token incorrecto', 401);
        }

        req.userId = token.id;

        next();

    } catch (error) {
        next(error);
    }
}

export default authUser;