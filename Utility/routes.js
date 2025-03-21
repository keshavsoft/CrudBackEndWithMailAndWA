import express from 'express';

var router = express.Router();

import { router as routerForRoute } from './src/route.js';
import { router as Who } from './Who/endPoints.js';
import { router as routerFromForTesting } from './ForTesting/entryFile.js';

router.use('/src', routerForRoute);
router.use('/who', Who);
router.use('/ForTesting', routerFromForTesting);

export { router };