import deleteTweetService from "../../services/tweets/deleteTweetService.js";
import displaySingleTweetService from "../../services/tweets/displayTweetService.js";
import generateErrorsUtils from "../../utils/generateErrorUtils.js";

const deleteTweetController = async (req, res, next) => {
    try {

        const {id} = req.params;

        const tweet = await displaySingleTweetService(id);

        if(req.userId !== tweet.userId) throw generateErrorsUtils('Estás intentando borrar un Tweet de otro usuario', 401);

        await deleteTweetService(id); 

        res.send({
            status: 'OK',
            message: 'Tweet borrador'
        });
        
    } catch (error) {
        next(error);
    }
}

export default deleteTweetController;