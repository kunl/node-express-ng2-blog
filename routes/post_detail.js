"use strict";
exports.__esModule = true;
exports["default"] = function (req, res, next) {
    var title = req.params.title;
    console.log(req.params);
    // Post.getPostByTitle(title).then((post) =>{
    //     if(post){
    //         post.createDate = dateformat(post.createDate, 'yyyy年mm月dd日');
    //         post.updateDate = dateformat(post.updateDate, 'yyyy年mm月dd日 HH:MM:ss');
    //         res.render('post', {
    //             title: post.title,
    //             post: post,
    //             desc: post.content.substr(0, 50)
    //         })
    //     }else{
    //         next()
    //     }
    // })
};