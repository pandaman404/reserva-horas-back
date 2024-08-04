import { Router } from 'express';
import {
  createMedicalCenter,
  getAllMedicalCenters,
  updateMedicalCenter
} from '@controllers/medicalCenter.controller';

const router = Router();

router.get('/all', getAllMedicalCenters);
router.post('/', createMedicalCenter);
router.put('/:id', updateMedicalCenter);

export default router;
