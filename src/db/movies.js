const mongoose = require('mongoose')
const mongoosePagination = require('mongoose-paginate-v2')

const moviesSchema = new mongoose.Schema({
    _id: Number,
    plot: String,
    genres: Array,
    runtime: Object,
    rated: String,
    cast: Array,
    num_mflix_comments: Number,
    poster:{ type:String, default:undefined },
    title: String,
    fullplot: String,
    languages: Array,
    released: Date,
    directors:Array,
    writers: Array,
    awards: Object, //{ wins:Number, nominations:Number, text:String }
    lastupdated: Date,
    year: Number,
    imdb: Object,
    type:String,
    tomatoes:Object
})

moviesSchema.plugin(mongoosePagination)

const Movies = mongoose.model( "movie", moviesSchema )  // the "s" is added after

module.exports = Movies

/*
{
    "_id":{"$oid":"573a1390f29313caabcd587d"},
    "plot":"At 10 years old,Owens becomes a ragged orphan when his sainted mother dies. The Conways,who are next door neighbors,take Owen in,but the constant drinking by Jim soon puts Owen on the ...",
    "genres":["Biography", "Crime", "Drama"],
    "runtime":{"$numberInt":"72"},
    "rated":"PASSED",
    "cast":["John McCann", "James A. Marcus", "Maggie Weston", "Harry McCoy"],
    "num_mflix_comments":{"$numberInt":"1"},
    "poster":"https://m.media-amazon.com/images/M/MV5BNDkxZGU4NmMtODJlNy00YzA2LTg4ZGMtNGFlNzAyNzcxOTM1XkEyXkFqcGdeQXVyOTM3MjcyMjI@._V1_SY1000_SX677_AL_.jpg",
    "title":"Regeneration",
    "fullplot":"At 10 years old, Owens becomes a ragged orphan when his sainted mother dies. The Conways, who are next door neighbors, take Owen in, but the constant drinking by Jim soon puts Owen on the street. By 17, Owen learns that might is right. By 25, Owen is the leader of his own gang who spend most of their time gambling and drinking. But Marie comes into the gangster area of town and everything changes for Owen as he falls for Marie. But he cannot tell her so, so he comes to her settlement to find education and inspiration. But soon, his old way of life will rise to confront him again.", 
    "languages":["English"],
    "released":{"$date":{"$numberLong":"-1713657600000"}},
    "directors":["Raoul Walsh"],
    "writers":["Owen Frawley Kildare (book)",
    "Raoul Walsh (adapted from the book: \"My Mamie Rose\")",
    "Carl Harbaugh (adapted from the book: \"My Mamie Rose\")"],
    "awards":{"wins":{"$numberInt":"1"},
    "nominations":{"$numberInt":"0"},
    "text":"1 win."},
    "lastupdated":"2015-08-14 01:28:18.957000000",
    "year":{"$numberInt":"1915"},
    "imdb":{"rating":{"$numberDouble":"6.8"},
    "votes":{"$numberInt":"626"},
    "id":{"$numberInt":"5960"}},
    "countries":["USA"],
    "type":"movie",
    "tomatoes":{
        "viewer":
            {"rating": {"$numberDouble":"3.4"},
            "numReviews": {"$numberInt":"395"},
            "meter":{"$numberInt":"70"}
            },
            "dvd":{"$date":{"$numberLong":"1006819200000"}},
        "critic":{"rating":
            {"$numberDouble":"9.2"},
            "numReviews":{"$numberInt":"5"},
            "meter":{"$numberInt":"100"}
        },
        "lastUpdated":{"$date":{"$numberLong":"1442510562000"}},
        "rotten":{"$numberInt":"0"},
        "production":"Fox Film Corporation",
        "fresh":{"$numberInt":"5"}
    }
}
*/