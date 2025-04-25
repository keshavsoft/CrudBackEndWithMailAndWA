import express from 'express';

var router = express.Router();

import { router as routerFromReadContent } from './ReadContent/routes.js';
import { router as routerFromInsert } from './InsertContent/routes.js';

router.use('/ReadContent', routerFromReadContent);
router.use('/InsertContent', routerFromInsert);

export { router };