const mongoose = require('mongoose');

//console.log(process.env.MONGODB_URI);
const URI =  'mongodb://localhost:27017/login-crud-nodejs';
             

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

.then(db => console.log('DB is conected.'))
.catch(err => console.error(err));
