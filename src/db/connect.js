const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@blog.adrmtj5.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    .then( console.log("Inicio exitoso") )
    .catch( err=> console.log("ocurrio un error: ",err) )


class moongooseClass{
    constructor(){
        this.moviesModel = require('./movies')
    }

    async allMovies(query, options){
        //const movies = await this.moviesModel.find();
        const movies = await this.moviesModel.paginate(query, options)
        
        return movies
    }

    async aMovie(title){
        const movie = await this.moviesModel.findOne({ title })
        return movie
    }

    async deleteMovie(title){
        try{
            await this.moviesModel.deleteOne({ title })
            return { msg:"Pelicula eliminada correctamente" }
        }
        catch(err){
           return {msg:"Ocurrio un error", err}
        }
        
    }
}

const Moongoose = new moongooseClass()

module.exports = Moongoose