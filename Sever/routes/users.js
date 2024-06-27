const express = require('express');
const router = express.Router();
const User = require('../models/usermodel');


router.post('/',(req,res)=>{
    const Newuser = new User(req.body)
    Newuser.save()
    .then(user=>res.json(user))
    .catch(err=>res.status(400).json({error: err.message}))
})

router.get('/', (req,res)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(err => res.status(400).json({ error: err.message}))
})
router.get('/:id', (req,res)=>{
    User.findById(req.params.id)
    .then(users=>res.json(users))
    .catch(err => res.status(400).json({error: 'User not found' }))
})

router.put('/:id', (req,res)=>{
    User.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(user => res.json(user))
    .catch(err => res.status(400).json({ error: err.message}))
})

router.delete('/:id', (req,res) =>{
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json({success:true}))
    .catch(err => res.status(400).json({ error: err.message}))
})

module.exports = router;