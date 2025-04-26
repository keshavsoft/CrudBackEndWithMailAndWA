import express from 'express';

var router = express.Router();

import { router as routerFromMobiles} from './FileCreate/routes.js';

router.use('/FileCreate', routerFromMobiles);

export { router };