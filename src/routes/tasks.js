const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const { route } = require('./users');

router.get('/',async (req,res)=>{
    try {
     const tasks = await Task.find({})
     res.status(201).send(tasks)
    } catch (e) {
        res.status(400).send(e)
    }

})

router.get('/:id',async (req,res)=>{
    const _id =req.params.id 

    try {
        const task = await Task.findById(_id)
        res.send(task)
       } catch (error) {
           res.status(500).send()
       }

})

router.post('/',async (req,res)=>{

    const task = new Task(req.body)

try {
    await task.save()
    res.send(task)
   } catch (error) {
       res.status(500).send(error)
   }
})

router.patch('/:id',async(req,res)=>{
    const updates=Object.keys(req.body)
    valids=['description','done']
    const isValidOperation = updates.every((update) => valids.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const task = await Task.findById(req.params.id)
        updates.forEach((update)=>{
            task[update]=req.body[update]
        })
        await task.save()
        if (!task) {
            return res.status(404).send
        }
        res.send(task)
    } catch (error) {
        res.status(400).send(e)
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const task= Task.findByIdAndDelete(req.params.id)
        if (!task) {
            res.status(404).send()
        }
        res.send(task)
    } catch (error) {
        res.status(500).send()
    }
    


})

module.exports = router;