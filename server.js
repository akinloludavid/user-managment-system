const express = require('express')
const dotenv = require('dotenv');
const morgan = require('morgan')
const bodyparser = require('body-parser')
const app = express()
const path = require('path')
const ejs = require('ejs')
app.get('/', (req, res) => {
  res.render('index')
})

dotenv.config({
  path: 'config.env'
})

//Log requests
app.use(morgan('dev'))

//parse request to the body-parser
app.use(bodyparser.urlencoded({
  extended: true
}));

//set view engine
app.set('view engine', 'ejs')
//app.set('views')


//locad assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));


const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server fired at http://localhost:${PORT}`);
})