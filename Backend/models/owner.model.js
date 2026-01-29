// # Owner-specific fields (gym details, members list, trainers list)
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const ownerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    gymDetails: {
        name: { 
            type: String, 
            required: true 
        },
        address: { 
            type: String, 
            required: true 
        },
        city: {
            type: String, 
            required: true 
        },
        contactNumber: { 
            type: String, 
            required: true 
        }
    },
    membersList: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Member' 
        }
    ],
    trainersList: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Trainer' 
        }
    ]
}, { timestamps: true });

const ownerModel = mongoose.model('Owner', ownerSchema);
module.exports = ownerModel;