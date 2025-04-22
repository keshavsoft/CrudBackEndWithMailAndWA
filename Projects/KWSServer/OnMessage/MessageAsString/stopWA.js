import { StartFunc as StartFuncFromWA } from "../../../../WA/signOut.js";

let StartFunc = async () => {
    await StartFuncFromWA();
};

export { StartFunc };