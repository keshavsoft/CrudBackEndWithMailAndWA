import express from 'express';

var router = express.Router();

import { router as routerShowAll } from './ShowAll/routes.js';
import { router as routerCreate } from './Create/routes.js';
import { router as routerCheck } from './Check/routes.js';
import { router as routerCreateToken } from './CreateToken/routes.js';
import { router as routerRowShow } from './RowShow/routes.js';
import { router as routerRowDelete } from './RowDelete/routes.js';

router.use('/ShowAll', routerShowAll);
router.use('/Create', routerCreate);
router.use('/Check', routerCheck);
router.use('/CreateToken', routerCreateToken);
router.use('/RowShow', routerRowShow);
router.use('/RowDelete', routerRowDelete);

export { router };