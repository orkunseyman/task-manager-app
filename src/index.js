const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const usersRouter= require('./routes/users')
const tasksRouter= require('./routes/tasks')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use('/users',usersRouter)
app.use('/tasks',tasksRouter)

const jwt = require('jsonwebtoken');

app.listen(port, ()=>{
    console.log('Server is running.'+port);
})

const myFunc= async()=> {
    
}
myFunc()