import express from 'express'
export const dogsRouter = express.Router()
import { dogs } from '../dogData.js'

dogsRouter.get('/', (req, res) => {
  res.send(JSON.stringify(dogs))
})
