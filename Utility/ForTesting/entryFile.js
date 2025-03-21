import express from 'express';
import bodyParser from 'body-parser';

var router = express.Router();

import packageJSON from '../../package.json' assert {type: 'json'};

const CommonTextParser = bodyParser.text({ type: 'text/plain' });
const CommonJsonParser = bodyParser.text({ type: 'application/json' });

router.get('/GetMethod', (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Accept,Authorization');
    // res.setHeader('Access-Control-Allow-Credentials', true);
    res.end(packageJSON.version);
});

router.post('/PostText', CommonTextParser, (req, res) => {
    // var contype = req.headers['content-type'];
    const contype = req.get('content-type');

    if (contype === 'text/plain') {
        res.end(req.body);
        return;
    };
});

router.post('/PostJson', CommonJsonParser, (req, res) => {
    // var contype = req.headers['content-type'];
    const contype = req.get('content-type');

    if (contype === 'application/json') {
        res.end(req.body);
        return;
    };
});

export { router };