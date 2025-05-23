import express from 'express';

var router = express.Router();

import { router as routergetFuncs } from './routes/entryFile.js';

router.use('/', routergetFuncs);

export { router };