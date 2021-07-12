const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');
module.exports.home = async function (req, res) {
    try {
        let posts = await Post.find({}).sort( {createdAt: -1})
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            },
            options: {sort:{"createdAt": -1}},
        });
        let users = await User.find({});

        return res.render('home', {
            title: "Home",
            posts: posts,
            all_users: users
        });
    } catch (err) {
        console.log(err);
    }
    
}