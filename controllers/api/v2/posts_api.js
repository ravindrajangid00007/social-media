module.exports.index = function(req,res) {
    return res.json({
        message: "this is a message from v2 to the world",
        posts: []
    })
}