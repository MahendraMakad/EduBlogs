const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    googleID: {
        type: String,
        required: true,
      },
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        default: "",
      },
      displayName: {
        type: String,
        default: "",
      },
      email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
      },
      role: {
        type: Number, // 0-> creator, 1-> student
        default: -1
      },
      image: {
        type: String,
        default: "",
      },
      cover: {
        type: String,
        default: "./img/theme/light/code-2.jpg",
      },
      gender: {
        type: String,
        default: "",
      },
      about: {
        type: String,
        default: "",
      },
      birthdate: {
        type: String,
        default: "",
      },
      phone: {
        type: String,
        default: "+91 1234567890",
      },
      createdAt: {
        type: Number,
        default: Date.now(),
      },
})

mongoose.model('users',userSchema);