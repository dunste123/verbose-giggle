const DiscordRPC = require('discord-rpc'),
    log = require("fancy-log");

const keys = require('./keys.json');

const rpc = new DiscordRPC.Client({transport: keys.rpcTransportType}),
    appClient = keys.havePantsId,
    largeImageKey = keys.imageKeys.pants;
// const date = new Date();
// newYear = new Date();

rpc.on('ready', () => {
    log(`Connected to Discord! (${appClient})`);
    //var newYear = new Date();
    // newYear.setTime(23*1000*60*60);
    // newYear.setFullYear(2018, 0, 1);
    // log(`time set to: (${newYear})`);
    f();
	setInterval(f, f1(10))
});
// setInterval(f2, f1(10))
f2();

function f() {
	let d = {
        //details: "For",
        state: "https://youtu.be/3j2uBoC5nUA",
        //startTimestamp: date,
        // endTimestamp: date,
        largeImageKey: largeImageKey,
        //smallImageKey: smallImageKey,
        largeImageText: undefined,
        //smallImageText: undefined,
        instance: false,
    };
    rpc.setActivity(d);
    log("setting activity " + d);
}

function f1(a) {
    return a * 60 * 1000;
}

function f2() {
    log("(re)starting rpc connection");
    rpc.login({
        clientId: appClient
    }).catch(log.error);
}
