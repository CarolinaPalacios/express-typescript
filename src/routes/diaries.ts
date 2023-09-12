import { Router } from 'express'
import * as diariesServices from '../services/diaries/diary'
import toNewDiaryEntry from '../utils/utils'
const diaryRouter = Router()

diaryRouter.get('/', (_req, res) => {
  res.send(diariesServices.getEntriesWithoutSensitiveInfo())
})

diaryRouter.get('/:id', (req, res) => {
  const diary = diariesServices.findById(+req.params.id)
  return (diary !== null)
    ? res.send(diary)
    : res.sendStatus(404)
})

diaryRouter.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diariesServices.addDiary(newDiaryEntry)

    res.json(addedDiaryEntry)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message)
    } else {
      res.status(400).send('Error desconocido')
    }
  }
})

export default diaryRouter
