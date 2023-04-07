const express = require('express');
const ejs = require('ejs');
const path = require('path')
const translate = require('@vitalets/google-translate-api');//this is the npm package used to translate text
const app = express()
const OriLang = require('./Schema/translation')
const TransLang = require('./Schema/language')
const methodover = require('method-override')

//apis required rather than rendering pages


app.set('view engine', ejs)
app.set('views', path.join(__dirname, '/views'))

app.use(methodover('_method'))
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {//api for homepage
    res.render('homePage.ejs')
})
app.post('/translate', async (req, res) => {//here post request is recieved from homepage
    const text = req.body.trans_text;
    const lang = req.body.language;
    const langArr = ['hi', 'ml', 'gu', 'bn', 'kn', 'mr', 'te', 'ta', 'en']//array of available languages
    const orilang = new OriLang({ oriText: text })//here users original text is saved
    await orilang.save();

    const transalted = await translate(text, { to: lang })//text is translated to users prefered choice

    const hindi = await translate(text, { to: 'hi' })    //here text is translated to 
    const malyalam = await translate(text, { to: 'ml' }) //other languages wrt their language variables
    const gujrati = await translate(text, { to: 'gu' })
    const bengali = await translate(text, { to: 'bn' })
    const kannada = await translate(text, { to: 'kn' })
    const marati = await translate(text, { to: 'mr' })
    const telugu = await translate(text, { to: 'te' })
    const tamil = await translate(text, { to: 'ta' })
    const english = await translate(text, { to: 'en' })

    const transArr = [hindi.text, malyalam.text, gujrati.text, //array of all translated languages is formed.
    bengali.text, kannada.text, marati.text, telugu.text, tamil.text, english.text];

    for (let i = 0; i < langArr.length; i++) { //the loop is made to run to store all the translated
        const alllang = await TransLang({      //language wrt thier language name and id of the original text
            langName: langArr[i], langTranslate: transArr[i], translated: orilang._id
        })
        alllang.save();
    }
    res.render('translatepage.ejs', { transalted, orilang })//translated text and language name of users choice is sent as parameter
})

app.patch('/translate/:id', async (req, res) => {//this api runs if the user wishes to retranslate
    const { id } = req.params;
    const { language } = req.body;
    //here the text is requested from the database using original text id and sent as parametes to the render page
    const translang = await TransLang.findOne({ translated: id, langName: language })
    res.render('retranslate.ejs', { translang, id })
})

app.get('*', (req, res) => {//if the api is invalid or not found following page is displayed
    res.render('pageNotFound.ejs')
})

module.exports = app;
