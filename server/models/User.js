const { Schema, model } = require('mongoose');
const bcrypt = require ('bcrypt');

const userSchema = new Schema({
    username: {
        type:String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Must enter an email'],
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    height: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    age: {
        type: Number,
    }, 
    sex: {
        type: String,
    },
    foods: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Food',
        },
    ],
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next ();
});

userSchema.methods.isCorrectPassword = async function (pasword) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User; 