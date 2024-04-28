import path from 'path';
import sharp from 'sharp';
import {nanoid} from 'nanoid';
import generateErrorsUtils from "../../utils/generateErrorUtils.js";
import createTweetService from "../../services/tweets/createTweetService.js";
import { createPathIfNotExist } from "../../utils/helpers.js";


const newTweetController = async (req, res, next) => {

    try {
        const {text} = req.body;

        if(!text || text.length > 280) throw generateErrorsUtils('Introduce un texto menor de 280 caracteres', 400);

        let imageFileName;

        if(req.files && req.files.image) {
            const uploadsDir = path.join(process.cwd(), './src/uploads');

            await createPathIfNotExist(uploadsDir);

            const image = sharp(req.files.image.data);
            image.resize(1000);

            imageFileName = `${nanoid(24)}.jpg`;

            await image.toFile(path.join(uploadsDir, imageFileName));
            
        }

        const id = await createTweetService(req.userId, text, imageFileName);

        res.send({
            status: 'ok',
            message: `Tweet con id: ${id} creado correctamente`,
        });
        
    } catch (error) {
        next(error);
    }
}

export default newTweetController;
