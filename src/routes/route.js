const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const lodash =require('lodash')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    let year = lodash.chunk(['jan','feb','mar','apr','may','june','july','Aug','Sep','oct','nov','Dec'],3)
    console.log(year)
    const a=[1,3,5,7,9,11,13,15,17,19]
    const tail=lodash.tail(a)
    console.log(tail)
    const arr1=[1,2,1],arr2=[1,2,3],arr3=[1,2,3,4,],arr4=[1,2,3,4,5],arr5=[1,2,3,4,5,6]
    const union=lodash.union(arr1,arr2,arr3,arr4,arr5)
    console.log(union)
    const arrPairs=[["horror","The Shining"],["darma","titanic"]]
     const pairs=lodash.fromPairs(arrPairs)
     console.log(pairs)
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})
router.get('/movies', function(req, res){
    let movies=['KGF','RRR ','Pushpa','the Marvels']
    res.send(movies)
})
router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})
router.get('/movies/2', function(req, res){
    let movies=['KGF','RRR','Pushpa','the Marvels']
    res.send(movies[1])
})

router.get('/movies/5', function(req, res){
    let movies=['KGF','RRR','Pushpa','the Marvels']
    for( let i=0;i<movies.length;i++){
    if(i<movies.length){
        res.send(movies[i]) 
    }
        res.send("This is not valid input") 
    }
})
router.get('/flims', function(req, res){
   let flims = [ {
        "id": 1,
        "name": 'The Shining'
        }, {
        "id": 2,
        "name": 'Incendies'
        }, {
        "id": 3,
        "name": 'Rang de Basanti'
        }, {
        "id": 4,
        "name": 'Finding Nemo'
        }]
    res.send(flims)
})

router.get('/flims/:3', function(req, res){
    let flims = [ {
         "id": 1,
         "name": 'The Shining'
         }, {
         "id": 2,
         "name": 'Incendies'
         }, {
         "id": 3,
         "name": 'Rang de Basanti'
         }, {
         "id": 4,
         "name": 'Finding Nemo'
         }]
     res.send(flims[2])
 })
 
 
   router.get("/misnum", function (req, res) {
   
    let arr= [1,2,3,5,6,7]
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let lastDigit= arr.pop()
    let consecutiveSum= lastDigit * (lastDigit+1) / 2
    let missingNumber= consecutiveSum - total
  
    res.send(  { data: missingNumber  }  );
  });
 
 router.get("/misnum2", function (req, res) {
    
    let arr= [33, 34, 35, 37, 38]
    let len= arr.length
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let firstDigit= arr[0]
    let lastDigit= arr.pop()
    let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
    let missingNumber= consecutiveSum - total
   
    res.send(  { data: missingNumber  }  );
  });
 

module.exports = router;
// adding this comment for no reason