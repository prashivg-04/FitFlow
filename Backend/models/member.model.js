//  # Member-specific fields (workouts, payment status)
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const memberSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    workouts: [
        { 
            date: Date, 
            type: String 
        }
    ],
    paymentStatus: { 
        type: String, 
        enum: ['paid', 'due'], 
        default: 'due' 
    }
}, { timestamps: true });

const memberModel = mongoose.model('Member', memberSchema);
module.exports = memberModel;