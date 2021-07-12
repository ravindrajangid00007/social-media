const Post = require('../../../models/post');
const Comment = require('../../../models/comment');
module.exports.index = async function (req, res) {
    let posts = await Post.find({})
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        })
    return res.json({
        data: {
            message: "this is message is from v1 to world",
            posts: posts
        }

    });
}

module.exports.delete = async function (req, res) {
    try {
        let post = await Post.findById(req.params.id);
        if (post.user == req.user.id) {
            post.remove();
            await Comment.deleteMany({ post: req.params.id });
        } else {
            return res.status(401).json({
                message: "you are not authorized to delete this post"
            })
        }

        return res.status(200).json({
            message: "post and its comments deleted successfully"
        });
    } catch (err) {
        console.log("error at delete api", err);
    }

}



