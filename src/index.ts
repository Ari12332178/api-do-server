import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import expressFileUpload from 'express-fileupload';
import consola from 'consola';
import dotenv from 'dotenv';

import Api from './api';

const app = express();

app.use(helmet());
app.use(morgan('common'));
app.use(expressFileUpload());

app.use('/api', Api);

app.listen()