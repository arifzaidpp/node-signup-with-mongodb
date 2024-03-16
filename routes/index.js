var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit',function(req,res){
  console.log(req.body)

  const url = 'mongodb://localhost:27017/'

  MongoClient.connect(url)
  .then((Client) => {
    console.log('successfully...')
    Client.db('arif').collection('user').insertOne(req.body)
  })
  .catch((err) => {
    console.log('Failed...', err)
  })

  res.send('Got it')
});

module.exports = router;
