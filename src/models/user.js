const mongoose = require('mongoose')
const validator = require('validator');

const userSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        trim:true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim:true,
        minlength:7,
        validate(value){
            if (value.includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }

    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    }
})
const User = mongoose.model('User',userSchema)


module.exports= User