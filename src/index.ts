import express from 'express';
import indexRoute from '@routes/index.route';

const app = express();

const PORT = 3000;

app.use('/', indexRoute);

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
