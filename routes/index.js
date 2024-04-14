import express from 'express'; 
import infoRoutes from './infoRoutes';
const router = express.Router();

router.use('/info', infoRoutes);

module.exports = router;
