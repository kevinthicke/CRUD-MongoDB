import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: [ true, 'name is required' ]
    },
    email: {
        type: String,
        unique: true,
        required: [ true, 'email is required']
    },
    password: {
        type: String,
        required: true
    }, 
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE'
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }

})

userSchema.plugin(uniqueValidator, { message: '{PATH} must be unique'});

export default mongoose.model('User', userSchema);