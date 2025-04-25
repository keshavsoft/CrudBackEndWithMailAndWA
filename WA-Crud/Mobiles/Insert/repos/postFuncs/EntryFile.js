import {
    postDefaultFunc as postDefaultFuncFromDal,
} from '../../dals/postFuncs/EntryFile.js';

let postDefaultFunc = async ({ inKey, inValu }) => {
    return postDefaultFuncFromDal({ inKey, inValu });
};

export {
    postDefaultFunc
};