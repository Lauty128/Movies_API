//------------------------ Dependencies
const { Router } = require('express')

//------------------------ Controllers
const controllers = require('../controllers/index.controllers')

//------------------------ Route
const router = Router()

//------------------------ Middlewares

//------------------------ Routes
router.get("/:page", controllers.allMovies)
router.get("/movie/:title", controllers.aMovie)
router.delete("/movie/:title", controllers.deleteMovie)

//------------------------ Export
module.exports = router