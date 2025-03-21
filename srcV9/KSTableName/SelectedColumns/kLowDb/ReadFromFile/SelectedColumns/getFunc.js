import { StartFunc as StartFuncPullData } from "../../PullData/EntryFile.js";
import _ from "lodash";

let StartFunc = ({ inRequestBody }) => {
  let LocalRequestBody = inRequestBody;

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
  LocalReturnData.JsonData = LocalData.map(element => {
    return _.pick(element, LocalRequestBody);
  });

  return LocalReturnData;
};

export { StartFunc };
