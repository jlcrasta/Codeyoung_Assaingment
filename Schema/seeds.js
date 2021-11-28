const mongoose = require('mongoose')
const lang = require('./language')
//const ori = require('./translation')


mongoose.connect('mongodb://localhost:27017/languages', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () { console.log('server connected/') });

lang.insertMany([
    {
        langName: 'fr',
        langTranslate: 'Comment allez-vous',
        translated: "61a2448ee6c157aab93228d4"
    },
    {
        langName: 'de',
        langTranslate: 'wie gehts',
        translated: "61a2448ee6c157aab93228d4"
    },
    {
        langName: 'hi',
        langTranslate: 'आप कैसे हैं',
        translated: "61a2448ee6c157aab93228d4"
    },
    {
        langName: 'ur',
        langTranslate: 'آپ کیسے ہو',
        translated: "61a2448ee6c157aab93228d4"
    }
])
    .then(data => {
        console.log('seeds inserted')
        console.log(data)
    })



/*ori.insertMany([
    {
        oriLang: 'en-uk',
        oriText: 'how are you'
    },
    {
        oriLang: 'en-us',
        oriText: 'whats up'
    }
])
    .then(data => {
        console.log('seeds inserted')
        console.log(data)
    })*/