import {Router} from 'express'
import AuthRoutes from './auth.routes.js'


const router =Router();

router.use('/Auth' ,AuthRoutes)


export default router;