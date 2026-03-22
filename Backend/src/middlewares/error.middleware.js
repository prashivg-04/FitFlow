

const errorHandler = (err, req, res, next) => {
    console.log("ERROR 💥", err);

    const statusCode = err.statusCode || 500;
    const message = err.isOperational 
        ? err.message
        : 'Internal server error';

    return res.status(statusCode).json({
        success: false,
        message,
    });
};

export default errorHandler;