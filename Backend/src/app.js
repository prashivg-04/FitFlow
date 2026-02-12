import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import joinRoutes from './routes/join.routes.js'
import ownerRoutes from './routes/owner.routes.js';

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

export default app;