import { StartFunc as StartFuncPullData } from "../../CommonPull/kLowDb/CommonFuncs/ReturnDbObject.js";

let StartFunc = async ({ inId }) => {
  let LocalId = inId;

  let LocalStartFuncPullData = StartFuncPullData();

  const db = LocalStartFuncPullData.dbObject;
  db.read();
  let LocalarrayOfObjects = db.data;

  const LocalFindId = LocalarrayOfObjects.find((obj) => obj.UuId === LocalId);

  if (LocalFindId === undefined) {
    return await { KTF: false, KReason: `Id : ${LocalId} not found in data` };
  };

  let LocalArrayAfterDelete = deleteObjectById({
    inCollection: LocalarrayOfObjects,
    inId: LocalId,
  });

  db.data = LocalArrayAfterDelete;
  db.write();

  return await true;
};

let deleteObjectById = ({ inCollection, inId }) => {
  let LocalCollection = inCollection;
  let LocalId = inId;

  LocalCollection.splice(
    LocalCollection.findIndex((a) => a.UuId === LocalId),
    1
  );

  return LocalCollection;
};


export { StartFunc };
