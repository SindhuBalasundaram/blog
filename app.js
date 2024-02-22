require('dotenv').config()
const express = require('express')
const app = express()
const exhbs = require('express-handlebars')

const PORT = 5000 || process.env.PORT

const hbs = exhbs.create({});


app.use(express.static('public'))

app.engine('hbs', exhbs.engine({layoutsDir:"views/layouts/", defaultLayout:"main", extname:"hbs"}))
app.set('view engine','hbs')
app.set('views', 'views')

app.use('/', require('./src/routes/main'))

// register new function
// hbs.handlebars.registerPartial(__dirname + '/views/partials');

app.listen(PORT, ()=>{
    console.log(`Blog app listening on the port ${PORT}`)
})