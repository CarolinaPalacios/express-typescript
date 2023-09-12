import { Router } from 'express'
import diariesRouter from './diaries'
const router = Router()

router.use('/diaries', diariesRouter)

export default router
