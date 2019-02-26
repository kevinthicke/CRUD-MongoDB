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
        default: 'USER_ROLE',
        enum: {
            values: ['USER_ROLE', 'ADMIN_ROLE'],
            message: '{VALUE} not valid'
        }
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

/*
toJSON method is called when you want to print the UserSchema. 
We modify it so that it does not show the password.
*/
userSchema.methods.toJSON = function() {
    const objUser = this.toObject();

    delete objUser.password;

    return objUser;
}


userSchema.plugin(uniqueValidator, { message: '{PATH} must be unique'});

export default mongoose.model('User', userSchema);