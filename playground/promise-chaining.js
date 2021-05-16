require('../src/db/mongoose.js')
const Task = require('../src/models/task')

Task.findByIdAndRemove('609992e437ff5d5a0080679e').then((user)=>{
    console.log(user)
    return Task.countDocuments({done:false})
}).then((number)=>{
    console.log(number)
}).catch((e)=>{
    console.log(e);
})