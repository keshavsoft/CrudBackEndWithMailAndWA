import express from 'express';

var router = express.Router();

import { router as routerFromReadFile } from './ReadFile/routes.js';
import { router as routerFromCreate } from './Create/routes.js';

router.use('/ReadFile', routerFromReadFile);
router.use('/Create', routerFromCreate);

export { router };