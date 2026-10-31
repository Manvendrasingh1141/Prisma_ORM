import express from 'express';
import appRouter from './routes/CRED.route.js';
const app = express();


app.use(express.json());
app.use('/user',appRouter);


export default app;