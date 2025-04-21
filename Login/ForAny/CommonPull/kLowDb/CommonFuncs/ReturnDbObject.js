import { LowSync } from 'lowdb';
import path from 'path';
import { JSONFileSync } from 'lowdb/node'
import { StartFunc as StartFuncFromreturnRootDir } from "../../../../../CommonExpose/returnRootDir.js";
import { StartFunc as StartFuncFromreturnDataPath } from "../../../../../CommonExpose/returnDataPath.js";
const CommonTableName = "Users.json";

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    const LocalCommonRootDir = StartFuncFromreturnRootDir();
    const LocalRootPath = StartFuncFromreturnDataPath();

    const defaultData = { error: "From KLowDb" }

    const db = new LowSync(new JSONFileSync(path.join(LocalCommonRootDir, LocalRootPath, CommonTableName)), defaultData);

    return {
        dbObject: db
    };
};

export { StartFunc };
