import express from 'express'
const router=express.Router();
import { signIn,signUp } from '../controllers/Auth.js';

router.post('/signUp',signUp)
router.post('/signIn',signIn)
export default router;