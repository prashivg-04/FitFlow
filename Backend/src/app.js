import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import joinRoutes from './routes/join.routes.js'
import ownerRoutes from './routes/owner.routes.js';
import trainerRoutes from './routes/trainer.routes.js';
import memberRoutes from './routes/member.routes.js';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.get('/', (req, res) => {
  res.json({ status: 'Server is running 🚀'})
});

app.use('/api/auth', authRoutes);
app.use('/api/join-request', joinRoutes);
app.use('/api/owner', ownerRoutes);
app.use('/api/trainer', trainerRoutes);
app.use('/api/member', memberRoutes);

export default app;