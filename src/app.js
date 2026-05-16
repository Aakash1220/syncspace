import 'dotenv/config';
import express from 'express';
import userRoutes from './routes/userRoutes.js'

import cors from 'cors';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
const PORT = process.env.PORT || 3000;
 app.use('/' ,userRoutes)

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});