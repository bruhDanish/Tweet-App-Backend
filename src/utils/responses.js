export const errorResponse = (error) => {
    console.log(error);
        if(error.status){
            return res.status(error.status).json({
                message: error.message,
                success: false
            });
        }
        return res.status(500).json({
            message: error.message,
            success: false
        });
}

export const successResponse = (data, statusCode, message) => {
    return res.status(statusCode).json({
        success: true,
        data,
        message
    });
}