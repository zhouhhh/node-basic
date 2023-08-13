const mongoose = require('mongoose')

// console.log(1235, process.env);
mongoose.connect(process.env.MONGODB || '')