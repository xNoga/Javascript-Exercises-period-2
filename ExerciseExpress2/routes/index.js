var express = require('express');
var router = express.Router();

var jokesFile = require('/Users/kristoffernoga/WebstormProjects/ExerciseExpress2/models/jokes.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    name: req.session.userName
  });
});

router.get('/jokes', function (req, res, next) {
  req.session.jokesCount += 1;
  res.render('jokes' , {jokes: jokesFile.allJokes})
})

router.get('/joke', function (req, res, next) {
  req.session.jokeCount += 1;
  res.render('joke', {joke: jokesFile.getRandomJoke()})
})

router.get('/addJoke', function (req, res, next) {
  res.render('addJoke')
})

router.post('/storeJoke', function (req, res, next) {
  req.session.storeJokeCount += 1;
  jokesFile.addJoke(req.body.newJoke)
  res.redirect('/addJoke')
})

router.post('/setUsername', function (req, res, next) {
   req.session.userName = req.body.userName
   res.redirect('/')
})

router.get('/login', function (req, res, next) {
  res.render('login')
})

router.get("/AngularVersion", function (req, res, next) {
  res.render('AngularVersion')
})

// REST API METHODS ----------------------------------

router.get('/api/joke', function (req, res, next) {
  var result = {joke: jokesFile.getRandomJoke()}
  res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
})

router.get("/api/joke1", function (req, res, next) {
  var result = {joke: jokesFile.allJokes[0]}
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(result))
})

router.get('/api/jokes', function (req, res, next) {
  var result = {jokes: jokesFile.allJokes}
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(result))
})

router.post('/api/joke', function (req, res, next) {
  jokesFile.addJoke(req.body.newJoke)
  var result = {status: "succes", joke: req.body.newJoke}
  res.end(JSON.stringify(result))
  res.redirect('/addJoke')
})


module.exports = router;
