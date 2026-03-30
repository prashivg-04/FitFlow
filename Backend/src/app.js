import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import joinRoutes from './routes/join.routes.js'
import ownerRoutes from './routes/owner.routes.js';
import trainerRoutes from './routes/trainer.routes.js';
import memberRoutes from './routes/member.routes.js';
import userRoutes from './routes/user.routes.js';

import errorHandler from './middlewares/error.middleware.js';

const app = express();
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  process.env.CORS_ORIGIN,
  'http://localhost:5173',
  'http://localhost:4173'
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    // Allow specific origins or any *.vercel.app domain
    const isAllowed = allowedOrigins.includes(origin) || /^https:\/\/fit-flow-[a-z0-9]+-prashiv-goyals-projects\.vercel\.app$/.test(origin);

    if (isAllowed) {
      return callback(null, true);
    }

    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));

app.options('/*splat', cors());

app.get('/', (req, res) => {
  res.json({ status: 'Server is running 🚀'})
});

app.use('/api/auth', authRoutes);
app.use('/api/join-request', joinRoutes);
app.use('/api/user', userRoutes);
app.use('/api/owner', ownerRoutes);
app.use('/api/trainer', trainerRoutes);
app.use('/api/member', memberRoutes);

app.use(errorHandler);

export default app;