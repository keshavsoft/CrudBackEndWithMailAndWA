import {
    DeleteRowDataFunc as DeleteRowDataFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let DeleteRowDataFunc = async (req, res) => {
    let localid = req.params.id
    let LocalFromRepo = await DeleteRowDataFuncRepo({ inId: localid });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

export {
    DeleteRowDataFunc
};