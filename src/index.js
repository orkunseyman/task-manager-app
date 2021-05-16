const express = require('express')
require('./db/mongoose')
const bcrypt = require('bcryptjs');
const User = require('./models/user')
const Task = require('./models/task')

const usersRouter= require('./routes/users')
const tasksRouter= require('./routes/tasks')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use('/users',usersRouter)
app.use('/tasks',tasksRouter)


app.listen(port, ()=>{
    console.log('Server is running.');
})

const myFunc= async()=> {
    const password='sadsd'
    const hashedPassword = await bcrypt.hash(password,8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('sadsd','$2a$08$FD/C/LUxeqSSIBd/GIIQbOgvDk4HgfOJuBYHwwpGgFkQCWzDZAH.e')
    console.log(isMatch);
}
myFunc()