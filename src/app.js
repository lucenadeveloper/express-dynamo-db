import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import exampleRoutes from './routes/example.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', exampleRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});