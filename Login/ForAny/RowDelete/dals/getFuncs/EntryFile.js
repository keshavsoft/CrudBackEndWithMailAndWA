import { StartFunc as RowDeleteFunc } from '../../kLowDb/RowDeleteFunc.js';

let DeleteRowDataFunc = ({ inId }) => {
    let LocalFromLowDb = RowDeleteFunc({ inId });

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb;
};

export {
    DeleteRowDataFunc
};