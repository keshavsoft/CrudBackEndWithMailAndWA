import { StartFunc as StartFuncFromSelectedColumns } from '../../kLowDb/ReadFromFile/SelectedColumns/getFunc.js';

let postDefaultFunc = ({ inRequestBody }) => {
    let LocalFromLowDb = StartFuncFromSelectedColumns({ inRequestBody });

    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};