const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes')
const db = require('./app/database/mssql.database')

//db.poolPromise

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
    extended: true,
}),
)
app.use(morgan('combined'))

app.engine('hbs', engine(
    {
        extname: '.hbs'
    }
))
app.set('view engine', 'hbs');

route(app)

app.set('views', path.join(__dirname, 'resources/views'))

//console.log('PATH: ', path.join(__dirname, 'resources/views'))
/*
app.get('/Me', (req, res) => {
    //res.send('Hello World!')
    res.render('me');
})*/

app.get('/', (req, res) => {
    //res.send('Hello World!')
    res.render('home');
})

app.get('/search', (req, res) => {
    //res.send('Hello World!')
    res.render('search');
})



app.get('/login', (req, res) => {
    //res.send('Hello World!')
    res.render('login');
})


app.post('/login', (req, res) => {
    console.log(req.body)
    //res.send('Hello World!')
    res.send('login');
})


app.get('/signup', (req, res) => {
    //res.send('Hello World!')
    res.render('signup');
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


