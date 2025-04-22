import { JSONFilePreset } from 'lowdb/node'

import Whatsapp from 'whatsapp-web.js';
const { MessageMedia } = Whatsapp;

import { getClientInfo } from "../CommonExpose/clientInfo.js";

const StartFunc = async msg => {
    const defaultData = [];

    const db = await JSONFilePreset('Data/inwards.json', defaultData);
    const LocalFromNumber = msg.from;


    await db.update(({ posts }) => posts.push({
        FromNumber: LocalFromNumber,
        MessageRec: msg.body
    }));

    const LocalNumbersData = await JSONFilePreset('Data/mobiles.json', defaultData);

    console.log("LocalFromNumber : ", LocalNumbersData, LocalFromNumber);

    if (LocalFromNumber in LocalNumbersData.data) {
        const LocalClientInfo = getClientInfo();

        LocalClientInfo.sendMessage(msg.from, LocalNumbersData.data[LocalFromNumber]).then(PromiseData => {
        });
    } else {
        if (msg.body === "ping") {
            msg.reply('pong');
        };

        if (msg.body === "hi") {
            msg.reply('Greetings from KeshavSoft');
        };

        if (msg.body === "Button") {
            const LocalClientInfo = getClientInfo();
            // console.log("msg.from : ", msg.from);

            LocalClientInfo.sendMessage(msg.from, "Send Button").then(PromiseData => {
            });
            // msg.send('send button');
        };

        if (msg.body === "SendMedia") {
            const media = MessageMedia.fromFilePath('./path/to/Keshav.png');
            await msg.reply(media);
        };

        if (msg.body === "SendFromUrl") {
            const LocalMediaUrl = "https://washtex5.keshavsoft.com/assets/image%20(1)-Bo3S5UVn.png";

            const media = await MessageMedia.fromUrl(LocalMediaUrl);
            await msg.reply(media);
        };
    };
};

const LocalFuncFetchData = async (inNumber) => {
    const LocalUrl = `https://join.keshavsoft.biz/binV4/StudentNames/Search?Mobile=${inNumber}`;

    const response = await fetch(LocalUrl);
    const data = await response.json();
    return data;
};

export { StartFunc };