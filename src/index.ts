import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import medicalCenterRoutes from './routes/medicalCenter.routes';

const app = express();

const HOST = 'localhost';
const PORT = 3000;

app.use(cors());
app.use(helmet());
app.use(express.json()); // habilitar request body en formato JSON

app.use('/api/v1/medicalCenter', medicalCenterRoutes);

app.listen(PORT, () => {
  console.log(`Server running at ${HOST}:${PORT}`);
});
