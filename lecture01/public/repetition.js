//GLOBALS
const express = require(`express`);
const app = express();
const port = 8080;
const fs = require(`fs`);

//MIDDLEWARES
app.use(express.json());
app.use(express.static(`public`));
app.use(function(req,res,next){
console.log(req.method, req.url)
    next();
})
app.use(function(req,res,next){
    if(!req.is('json')){
        res.status(400).end();
    }else{
        next()
    }
})

//SERVER BUILD

app.post(`/uppercase`, (req,res)=>{
    let data = req.body;
    if(!data.name){
        res.status(400).end();
    }else{
        let answer = {
           name:  data.name.toUpperCase()
        }
        res.json(answer)
    }    
})

app.post(`/lowercase`, (req,res)=>{
    let data = req.body;
    if(!data.name){
        res.status(400).end();
    }else{
        let answer = {
           name:  data.name.toLowerCase()
        }
        res.json(answer)
    }    
})

app.post('/capitalize', (req,res)=>{
    let data = req.body
    if(!data.name){
        res.status(400).end();
    }else{
        const name = data.name;
        const nameCapitalized = name.charAt(0).toUpperCase()+name.slice(1);
        let answer = {
            name: nameCapitalized
        };
        res.json(answer)
    }
})
app.listen(port, console.log(`listening to ${port}`))