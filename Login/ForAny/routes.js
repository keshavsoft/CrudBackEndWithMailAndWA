import express from 'express';

var router = express.Router();

import { router as routerShowAll } from './ShowAll/routes.js';
import { router as routerCreate } from './Create/routes.js';
import { router as routerCheck } from './Check/routes.js';

router.use('/ShowAll', routerShowAll);
router.use('/Create', routerCreate);
router.use('/Check', routerCheck);

export { router };