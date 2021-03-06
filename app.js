
//Middleware
const express = require('express') //basic express driver
const path = require('path') //assists with serving static files and dirs
const helmet = require('helmet') //security middleware
const sql = require('mssql') //SQL Server interaction

//Aliases
const app = express() //rename express to app
const router = express.Router(); //rename express.Router for easier access

app.use(helmet()) //instantiate helmet
app.use(router) //create an instance of router

router.get( '/', (req,res) => {res.render('index') })
//const index = require('index.js') // TODO: decide if you want to split files out like this





//Page Modules
const compDataSelMod = require('./modules/compDataSel.js')
//let initCompData = compDataSelMod.LaunchSP() //This line successfully calls the LaunchSP export in compDataSel.js
router.get( '/compDataSel', (req,res) => { res.render('compDataSel', {initCompData: compDataSelMod.LaunchSP()}) })



app.set('views',path.join(__dirname, "views")) //tell pug where views folder is
app.set('view engine', 'pug') //configure html template language

//app.set('view options', {layout:false}) //helps pug.extend work???
app.use("/static", express.static(path.join(__dirname,"public"))) //serve up the contents of public folder


app.listen(3000, () => console.log("App running at localhost:3000"))