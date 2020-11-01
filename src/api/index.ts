import { Router } from 'express';
import Skins from './skins';

const app = Router();

app.use('/skins', Skins);

export default app;