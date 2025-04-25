import express from 'express';

var router = express.Router();

import { router as routerFromMobiles} from './Mobiles/routes.js';

router.use('/Mobiles', routerFromMobiles);

export { router };