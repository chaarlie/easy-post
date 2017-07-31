const Post = require('../../models/post');

exports.createPost = (req, res, next) =>{
  let entry = new Post({
      title: req.body.post.title,
      tags: req.body.post.tags,
      content: req.body.post.content
    }); 
    entry.save((err) =>{
        if(err){
            console.log("Error creating post", err);
            res.end('error: post could not be saved');
        }
        else{
            res.end('Post created successfully');
        }
  });   
};

exports.fetChAll = function(req, res, next){
    Post.find({}, (err, posts)=>{
        if(err){
            console.log("Error finding posts", err);
            res.end('error: posts could not be fetched');
        }
        if(!post){
            res.end('there are no posts yet');
        }
        else{
            res.json(posts);
        }
    })   
};