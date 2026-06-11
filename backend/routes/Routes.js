import express from 'express';
import { cadastrarTarefa } from '../controllers/ControllerTarefa.js';

const router = express.Router();

router.post('/cadastrarTarefa', cadastrarTarefa);

export default router;