// # Trainer-specific fields (assigned members, schedules)
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const trainerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    assignedMembers: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Member' 
        }
    ],
    schedule: [
        { 
            day: {
                type: String,
                enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                required: true,
            }, 
            time: {
                type: String,
                required: true,
            } 
        }
    ]
}, { timestamps: true });

const trainerModel = mongoose.model('Trainer', trainerSchema);
module.exports = trainerModel;