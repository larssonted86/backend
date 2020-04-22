//GLOBALS
const express = require(`express`);
const app = express();
const fs = require(`fs`);
const DB_PATH = `movies.json`
let movies = [];
let id = 1;


//FUNCTIONS
save = () =>{
    fs.writeFile
}

//MIDDLEWARES
app.use(express.json());
app.use(express.static(`public`));

//SERVER BUILD
app.get(`/movies`, (req,res)=>{
    res.json({
        data: movies
    })
})
app.get(`/movies/:id`, (req,res)=>{
    let id = parseInt(req.params.id);
    let movie = movies.find(function(movie){
       return movie.id === id;
   })

   if(movie){
       res.status(200).json(movie)
   }else {
       res.status(400).end()
   }
})

app.post(`/movies`, (req,res)=>{
    let movie = req.body;
    if(!movie.title){
        res.status(400).end()
        return
    }
        movie.id = id;
        movies.push(movie)
        id += 1;
        res.status(201).send(movie);    
    res.end();
})

app.put(`/movies/:id`, (req,res) =>{
    let movie = req.body;
    let id = parseInt(req.params.id);
    if(!movie.title || movie.id !== id){
        res.status(400).end()
        return
    }

   let movieIndex = movies.findIndex(function(movie){
       return movie.id === id;
   })
   if(movie === -1){
       res.status(404).end();
       return
   }

   movies[movieIndex] = movie
   res.status(200).send(movie)
})

app.delete(`/movies/:id`, (req,res) =>{
    let movie = req.body;
    let id = parseInt(req.params.id);

    let movieIndex = movies.findIndex(function(movie){
        return movie.id === id;
    })

    if(movie === -1){
        res.status(404).end();
        return
    }

    movies.splice(movieIndex, 1)
    res.status(204).end()
 
})
app.listen(8080, console.log(`server started at 3000`));