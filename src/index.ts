import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import systemRouter from './api/routes/system.routes'

dotenv.config();

const app: Express = express();
app.use('/', express.static(path.join(__dirname, '../build/ui')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../build/ui/index.html'))
})

const port = process.env.PORT || 3000;

app.get('/api', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/api/system', systemRouter);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});