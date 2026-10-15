import express from 'express';
import cors from 'cors';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import jokeRoutes from './routes/joke.routes.js';
import notFound from './middlewares/notFound.js';
import errorHandler from './middlewares/errorHandler.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from public directory (HTML, CSS, JS, etc.)
app.use(express.static(join(__dirname, '../public')));

// Set JSON content-type specifically for /api routes
app.use('/api', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

// Routes
app.use("/api", jokeRoutes);

// Explicit root route to serve index.html when opening live URL
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../public/index.html'));
});

// ── Error middlewares (must be last) ──────────────────────────
app.use(notFound);
app.use(errorHandler);

export default app;
