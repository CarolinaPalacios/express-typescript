import { Router } from 'express'
const router = Router()

import diariesRouter from './diaries'

router.use('/diaries', diariesRouter)

export default router