//globals
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

//middlewares
app.use(express.static('public'))
app.use(express.json())

//server build
app.post('/uppercase', function(req, res) {
   let data = req.body;
   if(!data.name){
       res.status(400).end();
   }else{
       let answer = {
           name: data.name.toUpperCase()
       };
       res.json(answer)
   }
  });

  app.post('/lowercase', function(req, res) {
    let data = req.body;
    if(!data.name){
        res.status(400).end();
    }else{
        let answer = {
            name: data.name.toLowerCase()
        };
        res.json(answer)
    }
   });

   app.post('/capitalize', function(req, res) {
    let data = req.body;
    if(!data.name){
        res.status(400).end();
    }else{
        const name = data.name;
        const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)

        let answer = {
            name: nameCapitalized
        };
        res.json(answer)
    }
   });


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))