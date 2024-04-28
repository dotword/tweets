import getAllTweets from "../../services/tweets/getAllTweets.js";

const getTweetsController = async (req, res, next) => {
    try {

        const tweets = await getAllTweets();

        res.send({
            status: 'ok',
            data: tweets,
        });
        
    } catch (error) {
        next(error);
    }
}

export default getTweetsController;