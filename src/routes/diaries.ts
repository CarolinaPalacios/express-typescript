import { Router } from 'express'
const diaryRouter = Router()

diaryRouter.get('/', (_req, res) => {
  res.send('fetching all entries from diary')
})

diaryRouter.post('/', (_req, res) => {
  res.send('creating a new diary entry')
})

export default diaryRouter
