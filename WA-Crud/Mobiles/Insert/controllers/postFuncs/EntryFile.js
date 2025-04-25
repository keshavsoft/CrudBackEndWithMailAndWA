import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../../repos/postFuncs/EntryFile.js';

let postFilterDataFromBodyFunc = async (req, res) => {
    const [LocalKey, LocalValue] = Object.entries(req.body)[0];

    let LocalFromRepo = await postDefaultFuncFromRepo({ inKey: LocalKey, inValu: LocalValue });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo.JsonData);
};

export {
    postFilterDataFromBodyFunc
};