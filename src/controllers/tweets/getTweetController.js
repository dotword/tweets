import displaySingleTweetService from "../../services/tweets/displayTweetService.js";

const getTweetController = async (req, res, next) => {
    try {

        const {id} = req.params;

        const tweet = await displaySingleTweetService(id);

        res.send({
            status: 'ok',
            data: tweet,
        });
        
    } catch (error) {
        next(error);
    }
}

export default getTweetController;