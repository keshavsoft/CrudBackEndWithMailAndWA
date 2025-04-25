import express from 'express';

var router = express.Router();

import {
    postFilterDataFromBodyFunc
} from '../../controllers/postFuncs/EntryFile.js';

import { StartFunc as middlewarespostFilterDataFromBodyFunc } from "../../middlewares/postFuncs/EntryFile.js";

router.post('/', middlewarespostFilterDataFromBodyFunc, postFilterDataFromBodyFunc);

export { router };