const express = require('express');
const router = express.Router();
const Post = require('../models/postmodel');


router.post('/', (req,res)=>{
    const NewPost = new Post(req.body)
     NewPost.save()
    .then(post=>res.json({post}))
    .catch(err => res.status(400).json({error:err.message}))
})

router.get('/', (req,res)=>{
    Post.find()
    .then(posts=>res.json(posts))
    .catch(err => res.status(400).json({error:err.message}))
})

router.get('/:id', (req,res)=>{
    Post.findById(req.params.id)
    .then(posts=>res.json(posts))
    .catch(err => res.status(400).json({error: 'Post not found'}))
})

router.put('/:id', (req,res)=>{
    Post.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(post=>res.json(post))
    .catch(err => res.status(400).json({error:err.message}))
})

router.delete('/:id', (req,res)=>{
    Post.findByIdAndDelete(req.params.id)
    .then(()=>res.json({success:true}))
    .catch(err => res.status(400).json({error:err.message}))
})

module.exports = router;

