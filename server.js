const app = require('./app')
const PORT = process.env.PORT || 5500;
const mongoose = require('mongoose')
const mongoDB = process.env.DBURL || 'mongodb://localhost:27017/languages'

mongoose.connect(mongoDB, { //to set up mongo server
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('database connected!!!!')
    })
    .catch(err => {
        console.log('error in connection!')
        console.log(err);
    })

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})