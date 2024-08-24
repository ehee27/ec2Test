import express from 'express'
export const usersRouter = express.Router()
import { users } from '../userData.js'

usersRouter.get('/', (req, res) => {
  res.send(JSON.stringify(users))
})
