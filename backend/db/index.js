const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/review_app').then(()=>{
    console.log('Database connected successfully')
}).catch((error)=>{
    console.log('Db connection failed',error)
})