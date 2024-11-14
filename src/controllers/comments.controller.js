export const getComments = (req, res) => {
    return res.json({
        message: 'Comments'
    });
}

export const getCommentById = (req, res) => {
    return res.json({
        message: 'Comment',
        id: req.params.id
    });
}