const router = require('express').Router()

const moviesServices = require('./movies.services')

router.get('/movies', moviesServices.getAllMovies)
router.post('/movies', moviesServices.postNewMovie)
router.get('/movies/:id', moviesServices.getMovieById)
router.delete('/movies/:id', moviesServices.deleteMovieById)


module.exports = router