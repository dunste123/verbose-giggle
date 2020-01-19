const DiscordRPC = require('discord-rpc'),
      log = require("fancy-log");

const keys = require('./keys.json');

const rpc = new DiscordRPC.Client({ transport: keys.rpcTransportType }),
      appClient = keys.appClientID,
      largeImageKey = keys.imageKeys.large,
      smallImageKey = keys.imageKeys.small,
	  newYear = new Date(),
	  startTime = new Date();

rpc.on('ready', () => {
const thisYear = (new Date()).getFullYear();
  log(`Connected to Discord! (${appClient})`);
  //var newYear = new Date();
	newYear.setTime(23*1000*60*60)
	newYear.setFullYear(thisYear, 0, 1);
	log(`time set to: (${newYear})`);

  rpc.setActivity({
    details: `It's ${thisYear}!!!! (GMT+1)`,
    state: "Happy new year",
    startTimestamp: startTime,
    //endTimestamp: newYear,
    // largeImageKey: largeImageKey,
    // smallImageKey: smallImageKey,
    largeImageText: undefined,
    smallImageText: undefined,
		instance: false,
  });
});

rpc.login({
    clientId: appClient
}).catch(log.error);
