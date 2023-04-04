//Base de datos temporal para almacenar las peliculas
const movieDb = [
    {
      id : 1,
      title: "Pacific Rim",
      description: "Lorem Ipsum",
      year: 2012,
      director: "Guillermo del Toro",
    },
    {
      id : 2,
      title: "Marte necesita mamás",
      description: "Lorem Ipsum",
      year: 2011,
      director: "Disney",
    },
    {
      id : 3,
      title: "Viernes de locos",
      description: "Lorem Ipsum",
      year: 2004,
      director: "Disney",
    },
    {
      id: 4,
      title: "Cars",
      description: "Lorem Ipsum",
      year: 2002,
      director: "Disney"
    }
  ]

  let movieId = 5

  //Función que nos permite obtener toda la base de datos
  const findAllMovies = async () => {
    return movieDb
  }

  //Funcion que nos retorna una pelicula de la base de datos dependiendo de su id
  const findMovieById = async (id) => {
    const data = movieDb.find((movie) => movie.id === id)
    return data
  }

  //Funcion que nos permite agregar peliculas con sus datos a la base de datos
  const createMovie = async (movieObj) => {
    const newMovie = {
      id: movieId++,
      title: movieObj.title || 'movie title is unnokwn',
      description: movieObj.description || 'Lorem Ipsum',
      year: movieObj.year || 0,
      director: movieObj.director || 'Anonimus'
    }

    //Agregamos la nueva pelicula a la base de datos
    movieDb.push(newMovie)
    return newMovie
  }

  const deleteMovie = async (id) => {
    const data = movieDb.find((movie) => movie.id === id)
    const position = movieDb.indexOf(data)
    if(movieDb.includes(data))
    {
      movieDb.splice(position, 1)
    }

    return movieDb
  }

  module.exports = {
    findAllMovies,
    findMovieById,
    createMovie,
    deleteMovie
  }