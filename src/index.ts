import express from 'express'
import router from './routes'

const app = express()

app.use(express.json())

const PORT = 3001

app.get('/ping', (_req, res) => {
  console.log('someone pinged here')
  res.send('pong')
})

app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
