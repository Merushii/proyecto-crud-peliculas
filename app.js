const express = require('express')

const movieRouter = require('./movies.router')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({message: 'Server OK'})
})

app.use('/', movieRouter)

app.listen(3000, () => {
  console.log('Server started on port 3000')
})