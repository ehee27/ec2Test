import express from 'express'
import cors from 'cors'
const port = 3500
import { usersRouter } from './routes/usersAPI.js'
import { dogsRouter } from './routes/dogsAPI.js'

const app = express()
app.use(cors())
app.use('/api/users', usersRouter)
app.use('/api/dogs', dogsRouter)

app.get('/', (req, res) => {
  res.send('Hi Scott, server is good to goooo!')
})
app.listen(port, () => console.log(`We're live... listening on port ${port}`))
