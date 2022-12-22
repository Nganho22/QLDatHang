const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))

app.engine('hbs', engine(
    {
        extname: '.hbs'
    }
))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

//console.log('PATH: ', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
    //res.send('Hello World!')
    res.render('home');
})

app.get('/Search', (req, res) => {
    //res.send('Hello World!')
    res.render('search');
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});