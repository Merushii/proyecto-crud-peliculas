const movieControllers= require('./movies.controllers')

//Funcion que obtiene la base de datos llamando a la funcion de nuestros controllers
const getAllMovies = (req, res) => {
  movieControllers.findAllMovies()
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(400).json({message: 'Bad request', err})
    })
}

const getMovieById = (req, res) => {
  const id = Number(req.params.id)
  movieControllers.findMovieById(id)
  .then((data) => {
    if(!data){
      return res.status(404).json({message: `Movie with id: ${id}, not found`})
    }

    res.status(200).json(data)
  })
  .catch((err) => {
    res.status(400).json({message: 'Bad request', err})
  })
}

const deleteMovieById = (req, res) => {
  const id = Number(req.params.id)
  movieControllers.deleteMovie(id)
  .then((data) => {
    res.status(201).json(data)
  })
  .catch((err) => {
    res.status(400).json({message: 'Bad request', err})
  })
}

const postNewMovie = (req, res) => {
  const userObj = req.body
  movieControllers.createMovie(userObj)
  .then((data) => {
    res.status(201).json(data)
  })
  .catch((err) => {
    res.status(400).json({message: 'Bad request', err})
  })
}

module.exports = {
  getAllMovies,
  getMovieById,
  postNewMovie,
  deleteMovieById
}