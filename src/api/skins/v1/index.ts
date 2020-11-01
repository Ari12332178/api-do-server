import { Router } from 'express';
import Skin from './skin';
import Upload from './upload';

const app = Router();

app.use('/upload', Upload);
app.use('/skin', Skin);

export default app;