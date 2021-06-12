module.exports.home = function(req , res) {
    console.log(req.cookies);
    res.cookie("userid" , 35);
    return res.render('home' , {
        title: "Home"
    })  ;
}