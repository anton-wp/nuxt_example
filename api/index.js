const app = require('express')()
var bodyParser = require('body-parser');


let db = require('./db');
let testController = require('./controllers/test')
let tagController = require('./controllers/tag')
let tagPostController = require('./controllers/tagPost')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

module.exports = { path: '/api', handler: app }

app.get('/test/:id', testController.byId)
app.get('/tests', testController.all)
app.post('/test', testController.createById)
app.put('/test/:id', testController.updateById)
app.delete('/test/:id', testController.deleteById)

app.get('/tags', tagController.all)
app.post('/tag', tagController.create)
app.delete('/tag/:id', tagController.delete)

app.get('/postTags', tagPostController.all)
app.delete('/postTags/all', tagPostController.deleteAll)

db.connect('mongodb://localhost:27017/myapi', function (err) {
  if (err) {
    return console.log(err);
  }
})
