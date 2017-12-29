const Post = require('../../models/post');
 
let fetch = (req, res) => {
    let id = req.params.id;

    Post.findById(id, {_id:0}, (err, post) => {
        if(err) {
             res.status(500).json({ message: err.message });
        }
        if(!post) {
             res.status(204).json({ message: 'there were no documents to fetch' });
        }
        else {
             res.json({ message: 'successful fetch', payload: post });
        }
    });   
};

let fetchAll = (req, res) => {
    Post.find((err, posts) => {
        if(err) {
             res.status(500).json({ message: err.message });
        }
        if(!posts) {
             res.status(204).json({ message: 'there are no posts yet' });
        }
        else {
             res.json({message: 'successful fetch', payload: posts });
        }
    });   
};

let create = (req, res) => {
    
    let tags = JSON.parse(req.body.tags);

    let entry = new Post({
        title: req.body.title,
        tags: tags.map(tag => {return {name: tag}}),
        content: req.body.content
    }); 
  
    entry.save((err) => {
        if(err) {
             res.status(500).json({message: err.message });
        }
        else {
             res.status(201).json({message: 'post created successfully' });
        }
    });   
};

let update = (req, res) => {
    let postUpdate = req.body;
    let id = req.params.id;
     
    Post.findByIdAndUpdate(id, postUpdate, {new: true}, (err, doc) => {
        if(err) {
             res.status(500).json({ message: err.message });
        }
        if(!doc) {
             res.status(204).json({ message: "couldn't find the post to update" });
        }
        else {
             res.json({ message: 'post updated successfully', payload: doc});
        } 
    });
}

let deleteOne = (req, res) => {
    let _id = req.params.id;

    Post.remove({_id}, (err, confirmation) => {
        if(err) {
            res.status(500).json({message: err.message });
        }
        else {
            res.json({message: 'post deleted successfully', payload: confirmation});
        }
    }); 
};

module.exports = {
    create,
    fetch,
    fetchAll,
    update,
    deleteOne
};

