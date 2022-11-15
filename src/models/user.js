const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: String,
        requied: true
    }
});

module.exports = mongoose.model('User',userSchema);