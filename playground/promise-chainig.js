require('../src/db/mongoose')
const User = require('../src/models/user')

const findbyIdAndUpdate = async (id,age)=>{
    const user1 = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}

    findbyIdAndUpdate('60998e884576fd554a3dc83c',36).then((count)=>{console.log(count);}).catch((e)=>{console.log(e)})
