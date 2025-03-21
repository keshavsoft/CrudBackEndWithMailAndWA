import { StartFunc as StartFuncPullData } from "../../PullData/EntryFile.js";

let StartFunc = ({ inRequestBody }) => {
  let LocalRequestBody = inRequestBody;
  console.log("LocalRequestBody: ", LocalRequestBody);

  let LocalReturnData = { KTF: false };

  let LocalStartFuncPullData = StartFuncPullData();

  if ("error" in LocalStartFuncPullData) {
    LocalReturnData.KReason = LocalStartFuncPullData.error;
    return LocalReturnData;
  };

  const db = LocalStartFuncPullData.inDb;
  db.read();
  const LocalData = db.data;

  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = LocalData;

  return LocalReturnData;
};

const LocalFuncApplyFilers = ({ inFindValue, inFindKey, inData }) => {
  let LocalFindKey = inFindKey;
  let LocalFindValue = inFindValue;

  let LocalFilterData = inData.filter(e => {
    return eval(LocalFindKey) == LocalFindValue
  });

  return LocalFilterData;
};

export { StartFunc };
