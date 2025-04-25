import express from 'express';

var router = express.Router();

import { router as routerFromReadFile } from './ReadFile/routes.js';
import { router as routerFromInsert } from './Insert/routes.js';

router.use('/ReadFile', routerFromReadFile);
router.use('/Insert', routerFromInsert);

export { router };