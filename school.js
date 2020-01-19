const DiscordRPC = require('discord-rpc'),
      log = require("fancy-log");

const keys = require('./keys.json');

const rpc = new DiscordRPC.Client({ transport: keys.rpcTransportType }),
      appClient = keys.appClientID,
      largeImageKey = keys.imageKeys.large,
      smallImageKey = keys.imageKeys.small;
// const newYear = new Date(),
	  // startTime = new Date();

rpc.on('ready', () => {
  log(`Connected to Discord! (${appClient})`);
  //var newYear = new Date();
	// newYear.setTime(23*1000*60*60);
	// newYear.setFullYear(2018, 0, 1);
	// log(`time set to: (${newYear})`);

  rpc.setActivity({
    details: "Watching Danny Phantom",
    state: "Identity Crisis",
    // startTimestamp: startTime,
    // endTimestamp: newYear,
    largeImageKey: largeImageKey,
    smallImageKey: smallImageKey,
    largeImageText: undefined,
    smallImageText: "Going ghost",
		instance: true,
  });
});

rpc.login(appClient).catch(log.error);
