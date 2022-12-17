const Moongoose = require("../db/connect");

const allMovies = async (req,res)=>{
    const page = req.params.page 
    console.log(req.query.limit);
    const limit = req.query.limit ? JSON.parse(req.query.limit) : 10
    const options = req.query.sort ? {page, limit, sort:JSON.parse(req.query.sort)} : {page, limit}

    const query = req.query.query ? JSON.parse(req.query.query) : {}
    console.log(JSON.parse(req.query.query));
    if(req.query.sort) console.log(JSON.parse(req.query.sort));
    console.log(options);
    console.log(query);
    
    const movies = await Moongoose.allMovies(query, options)
    res.json(movies)
}

const aMovie = async (req,res)=>{
    const title = req.params.title

    const movie = await Moongoose.aMovie(title)
    res.json(movie)
}

const deleteMovie = async(req,res)=>{
    const title = req.params.title
    const movie = await Moongoose.deleteMovie(title)

    if(movie.err){
        res.status(500).json({ msg:movie.msg })
        return
    }
    res.json(movie)
}

module.exports = {
    allMovies,
    aMovie,
    deleteMovie
}