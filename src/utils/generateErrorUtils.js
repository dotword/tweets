const generateErrorsUtils = (message, status) => {
    const error = new Error(message);
    error.httpStatus = status;
    throw error;
}

export default generateErrorsUtils;