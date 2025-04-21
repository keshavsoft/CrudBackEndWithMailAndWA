import {
    DeleteRowDataFunc as DeleteRowDataFuncDal,
} from '../../dals/getFuncs/EntryFile.js';

let DeleteRowDataFunc = async ({ inId }) => {
    return DeleteRowDataFuncDal({ inId });
};

export {
    DeleteRowDataFunc,
};