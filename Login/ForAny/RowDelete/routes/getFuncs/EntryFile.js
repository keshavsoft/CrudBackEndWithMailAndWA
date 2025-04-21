import express from 'express';

var router = express.Router();

import {
    DeleteRowDataFunc,
} from '../../controllers/getFuncs/EntryFile.js';

router.delete('/:id', DeleteRowDataFunc);

export { router };